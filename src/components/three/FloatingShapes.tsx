"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useTheme } from "@/lib/theme";

type Theme = "light" | "dark";

/* Per-theme palette. Light mode needs a darker green and higher opacity to
   stay visible on the near-white background; dark mode stays subtle. */
const PALETTE: Record<
  Theme,
  {
    primary: string;
    secondary: string;
    wireframeOpacity: number;
    glowOpacity: number;
    particleOpacity: number;
    ambient: number;
    point1: number;
    point2: number;
  }
> = {
  dark: {
    primary: "#10B981",
    secondary: "#34D399",
    wireframeOpacity: 0.22,
    glowOpacity: 0.018,
    particleOpacity: 0.45,
    ambient: 0.45,
    point1: 0.55,
    point2: 0.32,
  },
  light: {
    primary: "#059669",
    secondary: "#10B981",
    wireframeOpacity: 0.09,
    glowOpacity: 0.018,
    particleOpacity: 0.24,
    ambient: 0.65,
    point1: 0.5,
    point2: 0.28,
  },
};

function MorphBlob({ color, opacity }: { color: string; opacity: number }) {
  const mesh = useRef<THREE.Mesh>(null!);
  const geo = useRef<THREE.IcosahedronGeometry>(null!);
  const originalPositions = useRef<Float32Array | null>(null);
  const elapsed = useRef(0);

  useFrame((state, delta) => {
    if (!geo.current) return;
    elapsed.current += delta;

    const positions = geo.current.attributes.position;
    if (!originalPositions.current) {
      originalPositions.current = new Float32Array(positions.array);
    }

    const t = elapsed.current;
    const mouse = state.pointer;

    for (let i = 0; i < positions.count; i++) {
      const ox = originalPositions.current[i * 3];
      const oy = originalPositions.current[i * 3 + 1];
      const oz = originalPositions.current[i * 3 + 2];

      const noise =
        Math.sin(ox * 2.5 + t * 0.8) * 0.12 +
        Math.sin(oy * 3.1 + t * 0.6) * 0.1 +
        Math.sin(oz * 2.8 + t * 0.9) * 0.08 +
        Math.sin((ox + oy) * 1.5 + t * 1.2) * 0.06;

      const len = Math.sqrt(ox * ox + oy * oy + oz * oz);
      const nx = ox / len;
      const ny = oy / len;
      const nz = oz / len;

      positions.setXYZ(
        i,
        ox + nx * noise,
        oy + ny * noise,
        oz + nz * noise
      );
    }
    positions.needsUpdate = true;
    geo.current.computeVertexNormals();

    mesh.current.rotation.y = t * 0.1 + mouse.x * 0.3;
    mesh.current.rotation.x = t * 0.05 + mouse.y * 0.2;
  });

  return (
    <mesh ref={mesh} scale={2.2}>
      <icosahedronGeometry ref={geo} args={[1, 48]} />
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={opacity}
      />
    </mesh>
  );
}

function GlowSphere({ color, opacity }: { color: string; opacity: number }) {
  const mesh = useRef<THREE.Mesh>(null!);
  const elapsed = useRef(0);

  useFrame((_state, delta) => {
    elapsed.current += delta;
    const t = elapsed.current;
    mesh.current.scale.setScalar(2.0 + Math.sin(t * 0.5) * 0.1);
    mesh.current.rotation.y = t * 0.05;
    mesh.current.rotation.x = t * 0.03;
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  );
}

function generateParticlePositions(count: number) {
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = 3 + Math.random() * 4;
    pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    pos[i * 3 + 2] = r * Math.cos(phi);
  }
  return pos;
}

const DEFAULT_PARTICLE_POSITIONS = generateParticlePositions(200);

function Particles({
  color,
  opacity,
  count = 200,
}: {
  color: string;
  opacity: number;
  count?: number;
}) {
  const ref = useRef<THREE.Points>(null!);
  const elapsed = useRef(0);

  const customPositions = useMemo(
    () => (count !== 200 ? generateParticlePositions(count) : null),
    [count]
  );
  const positions = customPositions ?? DEFAULT_PARTICLE_POSITIONS;

  useFrame((_state, delta) => {
    elapsed.current += delta;
    const t = elapsed.current;
    ref.current.rotation.y = t * 0.015;
    ref.current.rotation.x = Math.sin(t * 0.01) * 0.1;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color={color}
        transparent
        opacity={opacity}
        sizeAttenuation
      />
    </points>
  );
}

export function FloatingShapes() {
  const { theme } = useTheme();
  const p = PALETTE[theme];

  return (
    <>
      <ambientLight intensity={p.ambient} />
      <pointLight position={[5, 5, 5]} intensity={p.point1} color={p.primary} />
      <pointLight
        position={[-5, -5, -5]}
        intensity={p.point2}
        color={p.secondary}
      />
      <MorphBlob color={p.primary} opacity={p.wireframeOpacity} />
      <GlowSphere color={p.primary} opacity={p.glowOpacity} />
      <Particles color={p.primary} opacity={p.particleOpacity} />
    </>
  );
}
