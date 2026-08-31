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
          background: "#7a1421",
          borderRadius: "10px",
          fontFamily: "sans-serif",
        }}
      >
        <span
          style={{
            fontSize: "24px",
            fontWeight: "900",
            color: "#ffffff",
            letterSpacing: "1px",
          }}
        >
          AK
        </span>
      </div>
    ),
    {
      ...size,
    }
  );
}
