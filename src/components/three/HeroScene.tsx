"use client";

import * as React from "react";
import { Canvas } from "@react-three/fiber";
import { Emblem } from "./Emblem";

export interface HeroSceneProps {
  isTouch?: boolean;
  className?: string;
}

export function HeroScene({ isTouch = false, className }: HeroSceneProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={className ?? "relative flex h-full w-full items-center justify-center"}
    >
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 45 }}
        dpr={[1, isTouch ? 1.5 : 2]}
        frameloop={isVisible ? "always" : "never"}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
          alpha: true,
        }}
        className="pointer-events-auto h-full w-full"
      >
        <ambientLight intensity={0.75} />
        {/* Fill directional light from top-left */}
        <directionalLight position={[-4, 4, 3]} intensity={1.2} color="#ffffff" />
        {/* Kinetic Orange Rim Lights */}
        <pointLight position={[3, 2, -1.5]} intensity={5.0} color="#FF8500" distance={10} />
        <pointLight position={[-3, -2, -1]} intensity={3.5} color="#F5A623" distance={8} />
        {/* Core center accent */}
        <pointLight position={[0, 0, 2.2]} intensity={1.8} color="#FF8500" distance={6} />

        <Emblem isTouch={isTouch} />
      </Canvas>
    </div>
  );
}

export default HeroScene;
