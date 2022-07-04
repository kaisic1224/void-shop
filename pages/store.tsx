import { Canvas, useFrame } from "@react-three/fiber";
import Head from "next/head";
import { motion } from "framer-motion-3d";
import { useRef } from "react";
import * as THREE from "three";
import { OrbitControls, MeshReflectorMaterial } from "@react-three/drei";

const store = () => {
  return (
    <>
      <Head>
        <title>Shop | VØID</title>
      </Head>

      <main className='min-h-screen'>
        <Canvas>
          <OrbitControls />
          <ambientLight />
          <directionalLight color='blue' position={[10, 10, 15]} />
          <Torus position={[1, 1, 0]} />
          <Plane />
        </Canvas>
      </main>
    </>
  );
};

const Plane = () => {
  return (
    <motion.mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <motion.planeBufferGeometry args={[50, 50]} color='blue' />
      <MeshReflectorMaterial
        mirror={0}
        blur={[300, 100]}
        resolution={2048}
        mixBlur={1}
        mixStrength={40}
        roughness={1}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color='#101010'
        metalness={0.5}
      />
    </motion.mesh>
  );
};

const Torus = (props: any) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(() => (ref.current.rotation.x += 0.01));
  return (
    <motion.mesh ref={ref} {...props}>
      <torusBufferGeometry attach='geometry' />
      <meshStandardMaterial attach='material' color='orange' />
    </motion.mesh>
  );
};

export default store;
