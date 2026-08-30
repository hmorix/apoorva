import crypto from "crypto";

export interface GoogleDriveUploadResult {
  fileId: string;
  url: string;
  name: string;
  mimeType: string;
}

// ── CREATE SERVICE ACCOUNT JWT TOKEN ─────────────────────────────────────────
function createServiceAccountJwt(clientEmail: string, privateKey: string): string {
  const cleanKey = privateKey.replace(/\\n/g, "\n");
  const now = Math.floor(Date.now() / 1000);

  const header = { alg: "RS256", typ: "JWT" };
  const claimSet = {
    iss: clientEmail,
    scope: "https://www.googleapis.com/auth/drive",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now,
  };

  const base64Header = Buffer.from(JSON.stringify(header)).toString("base64url");
  const base64Claim = Buffer.from(JSON.stringify(claimSet)).toString("base64url");
  const signatureInput = `${base64Header}.${base64Claim}`;

  const signer = crypto.createSign("RSA-SHA256");
  signer.update(signatureInput);
  const signature = signer.sign(cleanKey, "base64url");

  return `${signatureInput}.${signature}`;
}

// ── GET GOOGLE DRIVE ACCESS TOKEN ───────────────────────────────────────────
async function getDriveAccessToken(): Promise<string | null> {
  const directToken = process.env.GOOGLE_DRIVE_ACCESS_TOKEN;
  if (directToken) return directToken;

  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || process.env.GOOGLE_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY || process.env.GOOGLE_PRIVATE_KEY;

  if (!clientEmail || !privateKey) {
    return null;
  }

  try {
    const jwt = createServiceAccountJwt(clientEmail, privateKey);
    const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
        assertion: jwt,
      }),
    });

    if (!tokenRes.ok) {
      const errText = await tokenRes.text();
      console.warn("[Google Drive Auth Error]:", errText);
      return null;
    }

    const tokenData = await tokenRes.json();
    return tokenData.access_token || null;
  } catch (err) {
    console.warn("[Google Drive Token Exception]:", err);
    return null;
  }
}

// ── UPLOAD FILE TO GOOGLE DRIVE ─────────────────────────────────────────────
export async function uploadToGoogleDrive(
  buffer: Buffer,
  filename: string,
  mimeType: string
): Promise<GoogleDriveUploadResult | null> {
  const accessToken = await getDriveAccessToken();
  if (!accessToken) {
    return null;
  }

  try {
    const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;
    const metadata: Record<string, any> = {
      name: filename,
      mimeType,
    };
    if (folderId) {
      metadata.parents = [folderId];
    }

    const boundary = "-------314159265358979323846";
    const delimiter = `\r\n--${boundary}\r\n`;
    const closeDelimiter = `\r\n--${boundary}--`;

    const multipartRequestBody = Buffer.concat([
      Buffer.from(
        delimiter +
          "Content-Type: application/json; charset=UTF-8\r\n\r\n" +
          JSON.stringify(metadata) +
          delimiter +
          `Content-Type: ${mimeType}\r\n` +
          "Content-Transfer-Encoding: base64\r\n\r\n"
      ),
      Buffer.from(buffer.toString("base64")),
      Buffer.from(closeDelimiter),
    ]);

    const uploadRes = await fetch(
      "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,name,mimeType,webContentLink,webViewLink",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": `multipart/related; boundary=${boundary}`,
        },
        body: multipartRequestBody,
      }
    );

    if (!uploadRes.ok) {
      const errText = await uploadRes.text();
      console.warn("[Google Drive Upload Error]:", errText);
      return null;
    }

    const file = await uploadRes.json();
    const fileId = file.id;

    // Make file publicly readable
    try {
      await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}/permissions`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          role: "reader",
          type: "anyone",
        }),
      });
    } catch (permErr) {
      console.warn("[Google Drive Permission Set]:", permErr);
    }

    // Direct high-resolution thumbnail / CDN link that works seamlessly in <img> and <video> tags
    const directUrl = mimeType.startsWith("video/")
      ? `https://drive.google.com/file/d/${fileId}/preview`
      : `https://lh3.googleusercontent.com/d/${fileId}`;

    return {
      fileId,
      url: directUrl,
      name: filename,
      mimeType,
    };
  } catch (err) {
    console.error("[Google Drive Upload Exception]:", err);
    return null;
  }
}
