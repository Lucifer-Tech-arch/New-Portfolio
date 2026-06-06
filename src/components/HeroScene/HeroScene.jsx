import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Torus } from "@react-three/drei";

const FloatingOrb = () => {
  const torusRef = useRef();
  const innerRef = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.25;
      torusRef.current.rotation.y = t * 0.35;
    }
    if (innerRef.current) {
      innerRef.current.rotation.x = -t * 0.2;
      innerRef.current.rotation.z = t * 0.15;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.6} floatIntensity={1.2}>
      <group>
        <Torus ref={torusRef} args={[1.35, 0.08, 32, 100]} scale={1.1}>
          <meshStandardMaterial
            color="#8245ec"
            emissive="#8245ec"
            emissiveIntensity={0.6}
            metalness={0.9}
            roughness={0.15}
            wireframe
          />
        </Torus>
        <mesh ref={innerRef} scale={0.85}>
          <icosahedronGeometry args={[1, 1]} />
          <MeshDistortMaterial
            color="#a855f7"
            emissive="#8245ec"
            emissiveIntensity={0.35}
            distort={0.35}
            speed={2.5}
            roughness={0.1}
            metalness={0.85}
            transparent
            opacity={0.85}
          />
        </mesh>
      </group>
    </Float>
  );
};

const HeroScene = () => (
  <div className="absolute inset-0 pointer-events-none">
    <Canvas
      camera={{ position: [0, 0, 4.5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 4, 4]} intensity={1.2} color="#c084fc" />
      <pointLight position={[-4, -2, 2]} intensity={0.6} color="#8245ec" />
      <Suspense fallback={null}>
        <FloatingOrb />
      </Suspense>
    </Canvas>
  </div>
);

export default HeroScene;
