import { Float, MeshReflectorMaterial, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { useState } from "react";

export const fadeinUp = {
  duration: 0.6,
  ease: "easeOut"
};

const vars = {
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.4
    }
  }
};

const vars2 = {
  hidden: {
    opacity: 0,
    y: 100
  },
  show: {
    opacity: 1,
    y: 0,
    transition: fadeinUp
  }
};

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  return (
    <>
      <motion.div id='contact' className='grid grid-cols-2'>
        <div>
          <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight
              position={[10, 10, 15]}
              color='lightblue'
              intensity={1}
            />
            <OrbitControls />
            <Float>
              <Scumbag position={[1, 1, -2]} />
            </Float>
            <Plane />
          </Canvas>
        </div>
        <div>
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={fadeinUp}
            className='font-bold text-6xl mb-4'
          >
            Have <span className='text-red-accent'>questions?</span>
          </motion.h2>
          <motion.form
            variants={vars}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            className='flex flex-col mt-2'
          >
            <div className='flex gap-4 w-full'>
              <motion.input
                variants={vars2}
                type='text'
                value={name}
                placeholder='Name'
                onChange={(e) => setName(e.target.value)}
                required
                className='text-form flex-1'
              />
              <motion.input
                variants={vars2}
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type='text'
                required
                className='text-form flex-1'
              />
            </div>
            <motion.textarea
              variants={vars2}
              placeholder='Message'
              onChange={(e) => {
                setMsg(e.target.value);
                e.target.style.height = "auto";
                e.target.style.height = e.target.scrollHeight + "px";
              }}
              value={msg}
              required
              className='text-form resize-none mt-4 overflow-y-hidden'
            />
          </motion.form>
          or support email:{" "}
          <a
            href='mailto:VR@shop-void.com'
            className='underline hover:no-underline'
          >
            VR@shop-void.com
          </a>
        </div>
      </motion.div>
    </>
  );
};

const Plane = () => {
  return (
    <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry args={[100, 100]} />
      <MeshReflectorMaterial
        mirror={1}
        blur={[400, 100]}
        mixStrength={10}
        color='#101010'
        depthScale={15}
      />
    </mesh>
  );
};

const Scumbag = (props: any) => {
  const [hover, setHover] = useState(false);
  return (
    <mesh
      onPointerOver={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
      {...props}
    >
      <torusBufferGeometry />
      <meshStandardMaterial color={hover ? "limegreen" : "aquamarine"} />
    </mesh>
  );
};

export default Contact;
