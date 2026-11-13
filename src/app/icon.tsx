import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  const logoBuffer = fs.readFileSync(
    path.join(process.cwd(), "public", "brand", "octacore-fitness-logo.jpg")
  );
  const base64Logo = `data:image/jpeg;base64,${logoBuffer.toString("base64")}`;

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
        overflow: "hidden",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={base64Logo}
        alt="OCTACORE"
        width="32"
        height="32"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>,
    { ...size }
  );
}
