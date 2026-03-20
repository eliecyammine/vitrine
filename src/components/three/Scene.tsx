"use client";

import { Canvas } from "@react-three/fiber";
import { FloatingShapes } from "./FloatingShapes";

export function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{ position: "absolute", inset: 0 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <FloatingShapes />
    </Canvas>
  );
}
