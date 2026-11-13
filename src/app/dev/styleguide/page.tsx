import type { Metadata } from "next";
import { StyleguideClient } from "./StyleguideClient";

export const metadata: Metadata = {
  title: "Design System & Component Styleguide (Internal Dev)",
  robots: {
    index: false,
    follow: false,
  },
};

export default function StyleguidePage() {
  return <StyleguideClient />;
}
