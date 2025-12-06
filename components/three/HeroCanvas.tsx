"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function PlaceholderCar() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.003;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={mesh} castShadow receiveShadow>
        <boxGeometry args={[2.4, 0.8, 4]} />
        <meshStandardMaterial
          color="#c0c0c0"
          metalness={0.8}
          roughness={0.25}
        />
      </mesh>
    </Float>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas camera={{ position: [4, 2.4, 5], fov: 42 }} shadows>
      <color attach="background" args={[0, 0, 0]} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
      <Suspense fallback={null}>
        <PlaceholderCar />
      </Suspense>
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.6, 0]}
        receiveShadow
      >
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0.8} />
      </mesh>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
}

// To use your own GLB/GLTF car model:
// 1) Place the model in public/models/car.glb
// 2) Replace PlaceholderCar with a useGLTF loader from @react-three/drei
//    e.g., const {scene} = useGLTF('/models/car.glb'); return <primitive object={scene} />;
