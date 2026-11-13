import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "OCTACORE Fitness - Premium Gym in Nerul & Airoli, Navi Mumbai";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
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
      {/* Ambient Orange Glow */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,133,0,0.3) 0%, rgba(8,8,8,0) 70%)",
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
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              backgroundColor: "#1b1b1b",
              border: "2px solid #ff8500",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <polygon points="7,2 17,2 22,7 22,17 17,22 7,22 2,17 2,7" fill="#ff8500" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: "28px",
                fontWeight: "900",
                letterSpacing: "4px",
                color: "#ffffff",
              }}
            >
              <span>OCTA</span>
              <span style={{ color: "#ff8500" }}>CORE</span>
            </div>
            <span
              style={{
                fontSize: "12px",
                letterSpacing: "3px",
                color: "#a0a0a0",
                marginTop: "2px",
              }}
            >
              FITNESS • PASSION • SPIRIT
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#141414",
            padding: "8px 20px",
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#ff8500",
            fontSize: "14px",
            fontWeight: "700",
            letterSpacing: "2px",
          }}
        >
          NAVI MUMBAI
        </div>
      </div>

      {/* Center Headline */}
      <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "900px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            fontSize: "56px",
            fontWeight: "900",
            color: "#ffffff",
            lineHeight: "1.1",
            letterSpacing: "1px",
          }}
        >
          <span>PREMIER ATHLETIC GYM IN </span>
          <span style={{ color: "#ff8500", marginLeft: "12px" }}>NERUL &amp; AIROLI</span>
        </div>

        <p
          style={{
            display: "flex",
            fontSize: "22px",
            color: "#a0a0a0",
            lineHeight: "1.4",
            margin: "0",
          }}
        >
          5,000 sq.ft strength deck, 50kg dumbbells, Olympic cages &amp; corporate wellness campus.
        </p>
      </div>

      {/* Footer Badges */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          paddingTop: "24px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div style={{ display: "flex", gap: "24px" }}>
          <span style={{ color: "#ffffff", fontSize: "15px", fontWeight: "600" }}>
            Nerul (Sector 1, Shiravane)
          </span>
          <span style={{ color: "#a0a0a0", fontSize: "15px" }}>•</span>
          <span style={{ color: "#ffffff", fontSize: "15px", fontWeight: "600" }}>
            Airoli (Reliable Tech Park, MIDC)
          </span>
        </div>

        <div
          style={{
            display: "flex",
            color: "#ff8500",
            fontSize: "15px",
            fontWeight: "700",
            letterSpacing: "1px",
          }}
        >
          octacorefitness.com
        </div>
      </div>
    </div>,
    {
      ...size,
    }
  );
}
