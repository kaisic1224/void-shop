import { Canvas, useFrame } from "@react-three/fiber";
import Head from "next/head";
import { motion } from "framer-motion-3d";
import { useRef, useState } from "react";
import * as THREE from "three";
import {
  MeshReflectorMaterial,
  FirstPersonControls,
  OrbitControls,
  Float
} from "@react-three/drei";

const store = () => {
  return (
    <>
      <Head>
        <title>Shop | VØID</title>
      </Head>

      <main className='min-h-screen'>
        <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
          {/* <color attach='background' args={["#010203"]} /> */}
          <fog attach='fog' args={["#010203", 0, 15]} />
          <OrbitControls />
          <ambientLight args={["#0D0D0D", 1.2]} />
          <pointLight intensity={2} color='#fc0000' position={[0, 5, 5]} />
          <Float>
            <Torus position={[0, 1, -5]} />
          </Float>
          <Plane />
        </Canvas>
      </main>
    </>
  );
};

const FPControls = () => {
  const args = {
    activeLook: true,
    autoForward: false,
    constrainVertical: false,
    enabled: true,
    heightCoef: 1,
    heightMax: 1,
    heightMin: 0,
    heightSpeed: false,
    lookVertical: true,
    lookSpeed: 0.005,
    movementSpeed: 3,
    verticalMax: Math.PI,
    verticalMin: 0
  };
  return <FirstPersonControls {...args} />;
};

const Plane = () => {
  return (
    <motion.mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <motion.planeBufferGeometry args={[50, 50]} />
      <MeshReflectorMaterial
        mirror={1}
        blur={[400, 100]}
        resolution={2048}
        mixBlur={1}
        mixStrength={30}
        depthScale={15}
        minDepthThreshold={0.4}
        color='#0D0D0D'
        roughness={1}
        metalness={0.5}
      />
    </motion.mesh>
  );
};

const Torus = (props: any) => {
  const ref = useRef<THREE.Mesh>(null);
  const [hover, setHover] = useState(false);
  return (
    <motion.mesh
      ref={ref}
      {...props}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <torusBufferGeometry attach='geometry' />
      <meshStandardMaterial
        attach='material'
        color={hover ? "#AC7979" : "white"}
      />
    </motion.mesh>
  );
};

export default store;
