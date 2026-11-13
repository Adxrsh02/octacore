"use client";

import * as React from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export interface EmblemProps {
  isTouch?: boolean;
}

export function Emblem({ isTouch = false }: EmblemProps) {
  const groupRef = React.useRef<THREE.Group>(null);
  const outerBezelRef = React.useRef<THREE.Mesh>(null);
  const innerRingRef = React.useRef<THREE.Mesh>(null);
  const coreRef = React.useRef<THREE.Mesh>(null);

  // Helper to construct an 8-sided regular polygon shape
  const createOctagonShape = React.useCallback((radius: number) => {
    const shape = new THREE.Shape();
    const sides = 8;
    for (let i = 0; i < sides; i++) {
      const angle = (i * 2 * Math.PI) / sides + Math.PI / 8;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      if (i === 0) {
        shape.moveTo(x, y);
      } else {
        shape.lineTo(x, y);
      }
    }
    shape.closePath();
    return shape;
  }, []);

  const outerShape = React.useMemo(() => createOctagonShape(1.5), [createOctagonShape]);
  const midShape = React.useMemo(() => createOctagonShape(1.2), [createOctagonShape]);
  const coreShape = React.useMemo(() => createOctagonShape(0.8), [createOctagonShape]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Slow idle vertical float
    const floatY = Math.sin(state.clock.elapsedTime * 1.6) * 0.08;
    groupRef.current.position.y = floatY;

    if (isTouch) {
      // Mobile: gentle, smooth gyroscope-free auto-rotation
      groupRef.current.rotation.y += delta * 0.4;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.8) * 0.05;
    } else {
      // Desktop: smooth pointer-based tilt
      const targetRotX = -state.pointer.y * 0.35;
      const targetRotY = state.pointer.x * 0.35;

      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetRotX,
        0.06
      );
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotY,
        0.06
      );
    }
  });

  return (
    <group ref={groupRef} scale={[1.1, 1.1, 1.1]}>
      {/* 1. Outer Gunmetal Precision Bezel */}
      <mesh ref={outerBezelRef} position={[0, 0, -0.15]}>
        <extrudeGeometry
          args={[
            outerShape,
            {
              depth: 0.18,
              bevelEnabled: true,
              bevelSegments: 3,
              steps: 1,
              bevelSize: 0.08,
              bevelThickness: 0.08,
            },
          ]}
        />
        <meshStandardMaterial color="#1e1e1e" metalness={0.88} roughness={0.22} />
      </mesh>

      {/* 2. Mid Tier Charcoal Accent Ring */}
      <mesh ref={innerRingRef} position={[0, 0, 0.02]}>
        <extrudeGeometry
          args={[
            midShape,
            {
              depth: 0.1,
              bevelEnabled: true,
              bevelSegments: 2,
              steps: 1,
              bevelSize: 0.04,
              bevelThickness: 0.04,
            },
          ]}
        />
        <meshStandardMaterial color="#141414" metalness={0.92} roughness={0.28} />
      </mesh>

      {/* 3. Radiant Orange Kinetic Core Chamber */}
      <mesh ref={coreRef} position={[0, 0, 0.12]}>
        <extrudeGeometry
          args={[
            coreShape,
            {
              depth: 0.08,
              bevelEnabled: true,
              bevelSegments: 2,
              steps: 1,
              bevelSize: 0.03,
              bevelThickness: 0.03,
            },
          ]}
        />
        <meshStandardMaterial
          color="#ff8500"
          emissive="#ff8500"
          emissiveIntensity={0.85}
          metalness={0.4}
          roughness={0.3}
        />
      </mesh>

      {/* 4. Center High-Contrast Metallic Pip */}
      <mesh position={[0, 0, 0.22]}>
        <cylinderGeometry args={[0.18, 0.18, 0.06, 32]} />
        <meshStandardMaterial color="#f0ede8" metalness={0.95} roughness={0.1} />
      </mesh>
      <mesh position={[0, 0, 0.26]}>
        <cylinderGeometry args={[0.07, 0.07, 0.04, 32]} />
        <meshStandardMaterial color="#080808" metalness={0.9} roughness={0.4} />
      </mesh>
    </group>
  );
}
