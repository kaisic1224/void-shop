import {
  FirstPersonControls,
  OrbitControls,
  PerspectiveCamera
} from "@react-three/drei";
import { Suspense, useRef, useState } from "react";

const Shop = () => {
  return (
    <>
      <color attach='background' args={["#010203"]} />
      <fog attach='fog' args={["#010203", 5, 15]} />
      <OrbitControls />
      <ambientLight args={["#0D0D0D", 1.2]} />
      <spotLight
        intensity={2}
        penumbra={0.5}
        angle={0.6}
        color='#fc0000'
        castShadow
        position={[5, 5, 5]}
      />
      <spotLight
        intensity={2}
        penumbra={0.5}
        angle={-0.6}
        color='white'
        castShadow
        position={[-5, 5, -5]}
      />
      <Torus position={[0, 1.5, -5]} />
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
        color={hover ? "#AC7979" : "#FFFFFF"}
      />
    </mesh>
  );
};
export default Shop;
