import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 48,
  height: 48,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #7a1421 0%, #9e1c2e 60%, #4e0c15 100%)",
          borderRadius: "12px",
          border: "2px solid #ffd54f",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        <span
          style={{
            fontSize: "22px",
            fontWeight: "900",
            color: "#ffffff",
            letterSpacing: "-0.5px",
          }}
        >
          AK
        </span>
        {/* Golden sparkle dot */}
        <div
          style={{
            position: "absolute",
            top: "5px",
            right: "5px",
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "#ffd54f",
            boxShadow: "0 0 4px #ffe082",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
