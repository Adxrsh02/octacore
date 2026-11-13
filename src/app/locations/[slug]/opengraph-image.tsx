import { ImageResponse } from "next/og";
import { branches } from "@/content/branches";

export const runtime = "nodejs";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const branch = branches[slug] || branches.nerul;
  const isNerul = slug === "nerul";

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        backgroundColor: "#080808",
        padding: "60px 80px",
        fontFamily: "sans-serif",
        position: "relative",
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          top: "-120px",
          right: "-120px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: isNerul
            ? "radial-gradient(circle, rgba(255,133,0,0.35) 0%, rgba(8,8,8,0) 70%)"
            : "radial-gradient(circle, rgba(245,166,35,0.35) 0%, rgba(8,8,8,0) 70%)",
          display: "flex",
        }}
      />

      {/* Top Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "46px",
              height: "46px",
              borderRadius: "12px",
              backgroundColor: "#1b1b1b",
              border: `2px solid ${isNerul ? "#ff8500" : "#f5a623"}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <polygon
                points="7,2 17,2 22,7 22,17 17,22 7,22 2,17 2,7"
                fill={isNerul ? "#ff8500" : "#f5a623"}
              />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: "26px",
                fontWeight: "900",
                letterSpacing: "3px",
                color: "#ffffff",
              }}
            >
              <span>OCTA</span>
              <span style={{ color: isNerul ? "#ff8500" : "#f5a623" }}>CORE</span>
            </div>
            <span
              style={{
                fontSize: "11px",
                letterSpacing: "2px",
                color: "#a0a0a0",
              }}
            >
              FITNESS • PASSION • SPIRIT
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            backgroundColor: "#141414",
            padding: "8px 18px",
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.1)",
            color: isNerul ? "#ff8500" : "#f5a623",
            fontSize: "13px",
            fontWeight: "700",
            letterSpacing: "2px",
          }}
        >
          {isNerul ? "SECTOR 1 SHIRAVANE" : "RELIABLE TECH PARK"}
        </div>
      </div>

      {/* Center Headline */}
      <div style={{ display: "flex", flexDirection: "column", gap: "14px", maxWidth: "960px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            fontSize: "52px",
            fontWeight: "900",
            color: "#ffffff",
            lineHeight: "1.1",
          }}
        >
          <span>OCTACORE FITNESS — </span>
          <span style={{ color: isNerul ? "#ff8500" : "#f5a623", marginLeft: "12px" }}>
            {isNerul ? "NERUL BRANCH" : "AIROLI BRANCH"}
          </span>
        </div>

        <p
          style={{
            display: "flex",
            fontSize: "20px",
            color: "#d4d4d4",
            lineHeight: "1.4",
            margin: "0",
          }}
        >
          {branch.tagline} — {branch.shortLocation}, Navi Mumbai.
        </p>

        <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
          {branch.features.slice(0, 3).map((feat, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                padding: "6px 14px",
                borderRadius: "6px",
                color: "#f0f0f0",
                fontSize: "13px",
                fontWeight: "600",
              }}
            >
              {feat}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          paddingTop: "20px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div style={{ display: "flex", gap: "24px" }}>
          <span style={{ color: "#a0a0a0", fontSize: "14px" }}>{branch.fullAddress}</span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <span
            style={{
              color: isNerul ? "#ff8500" : "#f5a623",
              fontSize: "14px",
              fontWeight: "700",
            }}
          >
            Tel: {branch.displayPhone}
          </span>
          <span style={{ color: "#555" }}>|</span>
          <span style={{ color: "#888", fontSize: "13px" }}>
            octacorefitness.com/locations/{slug}
          </span>
        </div>
      </div>
    </div>,
    {
      ...size,
    }
  );
}
