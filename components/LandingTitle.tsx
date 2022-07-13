import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import {
  OrbitControls,
  ScrollControls,
  Scroll,
  MeshReflectorMaterial,
  Stars,
  Capsule
} from "@react-three/drei";

const LandingTitle = () => {
  return (
    <Canvas shadows dpr={[1, 2]}>
      <ambientLight intensity={0.5} />
      <OrbitControls />
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />

      <fog attach='fog' args={["white", 5, 15]} />
      <pointLight position={[10, 5, 15]} color='yellow' />
      <directionalLight position={[-2, 0, 4]} color='hotpink' />
      <mesh position={[0, 2, -4]}>
        <ringBufferGeometry />
        <meshStandardMaterial color='limegreen' />
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
