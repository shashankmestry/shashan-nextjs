import { ImageResponse } from "next/og";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

export const alt = `${SITE_NAME} — portfolio and case studies`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "linear-gradient(145deg, #0B0F19 0%, #151b2e 50%, #0B0F19 100%)",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            maxWidth: 900,
          }}
        >
          <span
            style={{
              fontSize: 28,
              fontWeight: 600,
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.02em",
            }}
          >
            {SITE_NAME}
          </span>
          <span
            style={{
              fontSize: 52,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.15,
            }}
          >
            Scalable products, modern web platforms & AI-powered systems
          </span>
          <span
            style={{
              fontSize: 24,
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.4,
            }}
          >
            {SITE_DESCRIPTION}
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
