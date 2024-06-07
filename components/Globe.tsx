"use client";
import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Mesh } from "three";
import { OrbitControls } from "@react-three/drei";
import { cn } from "@/lib/utils";

// size prop so I can change it from component.

function Box({ size }: { size: number }) {
  const boxRef = useRef<Mesh>(null!);

  return (
    <mesh ref={boxRef}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshPhongMaterial color={"blue"} />
    </mesh>
  );
}

export function Globe({
  className,
  size,
}: {
  className: string;
  size: number;
}) {
  return (
    <Canvas className={cn(className)}>
      <ambientLight color={"0x404040"} castShadow={true} />
      <OrbitControls enableZoom={false} enablePan={false} />
      <Box size={size} />
    </Canvas>
  );
}
