import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/constants";

export const alt = `${siteConfig.name} — Product Owner, Full-Stack Developer & Designer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand colors (mirrors the dark theme in globals.css)
const BG = "#09090B";
const TEXT = "#FAFAFA";
const MUTED = "#A1A1AA";
const ACCENT = "#10B981";
const ACCENT_2 = "#34D399";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: BG,
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Emerald glow */}
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -160,
            width: 640,
            height: 640,
            borderRadius: "9999px",
            background: ACCENT,
            opacity: 0.14,
            filter: "blur(120px)",
          }}
        />

        {/* Top row: availability pill */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: "12px 24px",
              borderRadius: "9999px",
              border: `1px solid ${ACCENT}40`,
              background: `${ACCENT}14`,
            }}
          >
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: "9999px",
                background: ACCENT,
              }}
            />
            <span style={{ color: ACCENT, fontSize: 26, fontWeight: 600 }}>
              Available for new projects
            </span>
          </div>
        </div>

        {/* Name + tagline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 116,
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1,
              color: TEXT,
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 40,
              fontWeight: 600,
              color: MUTED,
            }}
          >
            Product&nbsp;
            <span style={{ color: ACCENT_2 }}>Strategy</span>
            <span style={{ color: "#3F3F46" }}>&nbsp;·&nbsp;</span>
            <span style={{ color: ACCENT_2 }}>Design</span>
            <span style={{ color: "#3F3F46" }}>&nbsp;·&nbsp;</span>
            <span style={{ color: ACCENT_2 }}>Code</span>
          </div>
        </div>

        {/* Bottom row: domain */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ color: MUTED, fontSize: 30 }}>
            6+ years shipping web &amp; mobile products end&nbsp;to&nbsp;end
          </span>
          <span style={{ color: TEXT, fontSize: 30, fontWeight: 600 }}>
            elieyammine.com
          </span>
        </div>

        {/* Bottom accent bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: 10,
            background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT_2})`,
          }}
        />
      </div>
    ),
    { ...size },
  );
}
