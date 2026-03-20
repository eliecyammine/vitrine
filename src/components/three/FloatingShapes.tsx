"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function MorphBlob() {
  const mesh = useRef<THREE.Mesh>(null!);
  const geo = useRef<THREE.IcosahedronGeometry>(null!);
  const originalPositions = useRef<Float32Array | null>(null);
  const elapsed = useRef(0);

  useMemo(() => {
    // Store original positions after first render
  }, []);

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
        color="#10B981"
        wireframe
        transparent
        opacity={0.07}
      />
    </mesh>
  );
}

function GlowSphere() {
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
      <meshBasicMaterial color="#10B981" transparent opacity={0.012} />
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

function Particles({ count = 200 }: { count?: number }) {
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
      <pointsMaterial size={0.015} color="#10B981" transparent opacity={0.3} sizeAttenuation />
    </points>
  );
}

export function FloatingShapes() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} intensity={0.3} color="#10B981" />
      <pointLight position={[-5, -5, -5]} intensity={0.15} color="#34D399" />
      <MorphBlob />
      <GlowSphere />
      <Particles />
    </>
  );
}
