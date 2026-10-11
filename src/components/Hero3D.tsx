import { Suspense, useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useMediaQuery, usePrefersReducedMotion } from "../hooks/useMediaQuery";

function Monolith() {
  const group = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.18;
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      pointer.current.y * 0.18,
      0.05
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      -pointer.current.x * 0.12,
      0.05
    );
    const t = state.clock.getElapsedTime();
    group.current.position.y = Math.sin(t * 0.6) * 0.15;
  });

  const material = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color("#5C1F1F"),
        roughness: 0.32,
        metalness: 0.55,
        clearcoat: 0.6,
        clearcoatRoughness: 0.25,
        reflectivity: 0.5,
      }),
    []
  );

  const creamMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#F5EFE6"),
        roughness: 0.6,
        metalness: 0.1,
      }),
    []
  );

  return (
    <group ref={group}>
      <mesh material={material} castShadow receiveShadow>
        <icosahedronGeometry args={[1.5, 1]} />
      </mesh>
      <mesh material={creamMaterial} position={[0, 0, 0]} scale={0.52}>
        <torusKnotGeometry args={[1, 0.3, 120, 16]} />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 5, 3]} intensity={1.6} color="#F5EFE6" />
      <pointLight position={[-4, -2, -3]} intensity={1.1} color="#5C1F1F" />
      <Monolith />
    </>
  );
}

function CssFallback() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="hero-blob relative h-[70%] w-[70%] max-w-[420px]">
        <div className="absolute inset-0 animate-spin-slow rounded-[40%] bg-gradient-to-br from-[#5C1F1F] via-[#7a2b2b] to-[#3f1414] opacity-90 shadow-2xl" />
        <div className="absolute inset-[18%] rounded-[45%] border border-cream/40" />
        <div className="absolute inset-[30%] rounded-full bg-cream/90 mix-blend-overlay" />
      </div>
    </div>
  );
}

export default function Hero3D() {
  const reducedMotion = usePrefersReducedMotion();
  const isSmall = useMediaQuery("(max-width: 640px)");
  const [webglOk, setWebglOk] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) setWebglOk(false);
    } catch {
      setWebglOk(false);
    }
  }, []);

  if (reducedMotion || !webglOk) {
    return <CssFallback />;
  }

  return (
    <div className="h-full w-full">
      <Canvas
        dpr={isSmall ? [1, 1.5] : [1, 2]}
        camera={{ position: [0, 0, 5.2], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
