import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import {
  OrbitControls,
  ScrollControls,
  Scroll,
  MeshReflectorMaterial,
  Stars
} from "@react-three/drei";

const LandingTitle = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <OrbitControls />
      <Stars count={5000} radius={1} depth={2} />
      <pointLight position={[10, 5, 15]} color='yellow' />
      <directionalLight position={[-2, 0, 4]} color='hotpink' />
      <mesh position={[0, 0, -4]}>
        <icosahedronBufferGeometry args={[2, 0]} />
        <MeshReflectorMaterial mirror={1} attach='material' />
      </mesh>
      <Grid />
    </Canvas>
  );

  function Grid() {
    return (
      <mesh position={[0, -2, 0]}>
        <gridHelper args={[100, 20]} />
      </mesh>
    );
  }
};
export default LandingTitle;
