import { Canvas, useFrame } from "@react-three/fiber";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import {
  MeshReflectorMaterial,
  FirstPersonControls,
  OrbitControls,
  Float,
  useTexture,
  PerspectiveCamera
} from "@react-three/drei";
import { LinearEncoding, type Texture } from "three";

const store = () => {
  return (
    <>
      <Head>
        <title>Shop | VØID</title>
      </Head>

      <section className='relative min-h-screen'>
        <Canvas resize={{ offsetSize: true }} dpr={[1, 2]}>
          {/* <color attach='background' args={["#010203"]} /> */}
          <PerspectiveCamera makeDefault fov={50} position={[0, 6, 0]} />
          <fog attach='fog' args={["#010203", 0, 15]} />
          <OrbitControls />
          <ambientLight args={["#0D0D0D", 1.2]} />
          <spotLight
            intensity={2}
            penumbra={0.5}
            angle={0.6}
            color='#fc0000'
            castShadow
            position={[0, 5, 5]}
          />
          <Float>
            <Torus position={[0, 1.5, -5]} />
          </Float>
          <Plane />
        </Canvas>
      </section>
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
  const textures = useTexture({
    map: "./textures/concrete/diffuse.jpg",
    displacementMap: "./textures/concrete/displacement.jpg",
    aoMap: "./textures/concrete/arm.jpg",
    roughnessMap: "./textures/concrete/arm.jpg",
    metalnessMap: "./textures/concrete/arm.jpg"
  });

  const normalTexture = useTexture(
    "./textures/concrete/normal.jpg",
    (texture) => {
      (texture as Texture).encoding = LinearEncoding;
    }
  );
  return (
    <mesh
      position={[0, 0, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      castShadow
      receiveShadow
    >
      <planeBufferGeometry args={[50, 50]} />
      <MeshReflectorMaterial
        {...textures}
        normalMap={normalTexture}
        dithering={true}
        mirror={0}
        blur={[400, 100]}
        resolution={1024}
        mixBlur={30}
        mixStrength={90}
        mixContrast={1}
        depthScale={1}
        minDepthThreshold={0.1}
        color='#0D0D0D'
        roughness={1}
        metalness={0.5}
        reflectorOffset={0.2}
      />
    </mesh>
  );
};

const Torus = (props: any) => {
  const ref = useRef<THREE.Mesh>(null);
  const [hover, setHover] = useState(false);
  return (
    <mesh
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
    </mesh>
  );
};

export default store;
