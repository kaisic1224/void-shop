import { Canvas } from "@react-three/fiber";
import { motion as motion3d } from "framer-motion-3d";
import { motion } from "framer-motion";

const LandingTitle = () => {
  return (
    <div>
      <h1 className='uppercase flex flex-col'>
        <span className=''>VØID</span>
        <span className=''>Reincarnation</span>
      </h1>
      <Canvas>
        <motion3d.mesh>
          <boxGeometry args={[10, 36, 3]} />
          <meshDepthMaterial color='#' />
        </motion3d.mesh>
      </Canvas>
    </div>
  );
};
export default LandingTitle;
