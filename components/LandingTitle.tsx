import { Canvas } from "@react-three/fiber";
import { motion as motion3d } from "framer-motion-3d";

const LandingTitle = () => {
  return (
    <Canvas
      resize={{ offsetSize: true }}
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5.5], fov: 45 }}
    >
      <motion3d.mesh>
        <boxGeometry args={[32, 32, 32]} />
        <meshDepthMaterial color='white' />
      </motion3d.mesh>
    </Canvas>
  );
};
export default LandingTitle;
