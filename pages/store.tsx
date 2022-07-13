import { MeshReflectorMaterial, useTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Head from "next/head";
import { LinearEncoding, Texture } from "three";
import Shop from "../components/Shop";

const store = () => {
  return (
    <>
      <Head>
        <title>Shop | VØID</title>
      </Head>

      <section style={{ height: "100vh" }}>
        <Canvas dpr={[1, 2]} shadows>
          <Shop />
          <Plane />
        </Canvas>
      </section>
    </>
  );
};

export default store;

const Plane = () => {
  const textures = useTexture({
    map: "/textures/concrete/diffuse.jpg",
    displacementMap: "/textures/concrete/displacement.jpg",
    aoMap: "/textures/concrete/arm.jpg",
    roughnessMap: "/textures/concrete/arm.jpg",
    metalnessMap: "/textures/concrete/arm.jpg"
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
      <planeBufferGeometry args={[50, 50, 16, 16]} />
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
