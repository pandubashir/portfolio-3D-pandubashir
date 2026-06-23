"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";

function FloatingCrystal() {
  const meshRef = useRef(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.15;
    meshRef.current.rotation.y += delta * 0.22;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.5} floatIntensity={1.1}>
      <mesh ref={meshRef} scale={1.3}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color="#a78bfa"
          emissive="#7c3aed"
          emissiveIntensity={0.35}
          distort={0.45}
          speed={2}
          roughness={0.15}
          metalness={0.35}
        />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <div className="hero-3d-canvas" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#c084fc" />
        <pointLight position={[-5, -3, 2]} intensity={0.6} color="#818cf8" />
        <Sparkles count={36} scale={6} size={2} speed={0.4} color="#c084fc" />
        <FloatingCrystal />
      </Canvas>
    </div>
  );
}
