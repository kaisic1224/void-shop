import { useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Eye = (props: any) => {
  const gtlf = useLoader(GLTFLoader, "models/sharingan/scene.gtlf");
  useEffect(() => {
    gtlf.scene.scale.set(0.005, 0.005, 0.005);
    gtlf.scene.position.set(0, 0, 0);
    gtlf.scene.traverse((object) => {
      object.castShadow = true;
      object.receiveShadow = true;
    });
  }, [gtlf]);
  return <primitive object={gtlf.scene} {...props} />;
};

export default Eye;
