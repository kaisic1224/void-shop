import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

const Eye = (props: any) => {
  const { scene } = useGLTF("/models/sharingan/scene.gltf");

  return <primitive object={scene} {...props} />;
};

export default Eye;
