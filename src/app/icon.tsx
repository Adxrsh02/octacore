import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        background: "#080808",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6,
      }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <polygon points="7,2 17,2 22,7 22,17 17,22 7,22 2,17 2,7" fill="#FF8500" />
        <polygon points="8.2,4 15.8,4 20,8.2 20,15.8 15.8,20 8.2,20 4,15.8 4,8.2" fill="#080808" />
        <polygon
          points="9.5,6.5 14.5,6.5 17.5,9.5 17.5,14.5 14.5,17.5 9.5,17.5 6.5,14.5 6.5,9.5"
          fill="#FF8500"
        />
      </svg>
    </div>,
    { ...size }
  );
}
