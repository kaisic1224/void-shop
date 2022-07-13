import { Float, MeshReflectorMaterial, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { HiOutlineMail } from "react-icons/hi";

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
  const [invalid, setInvalid] = useState(false);
  const [eInvalid, seteInvalid] = useState(false);

  const sendEmail = () => {
    alert("ja");
  };
  return (
    <>
      <motion.div id='contact' className='grid grid-cols-2'>
        <div></div>
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
            onSubmit={(e) => {
              e.preventDefault();
              setInvalid(false);
              sendEmail();
            }}
          >
            <div className='flex gap-4 w-full'>
              <motion.div variants={vars2} className='flex-1 relative'>
                <input
                  type='text'
                  value={name}
                  placeholder='Name'
                  onChange={(e) => setName(e.target.value)}
                  className='text-form'
                />
              </motion.div>
              <motion.div variants={vars2} className='flex-1 relative'>
                <input
                  placeholder='Email'
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (
                      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email) === false
                    )
                      seteInvalid(true);
                  }}
                  value={email}
                  type='email'
                  required
                  autoComplete='off'
                  title='Please fill out this field'
                  className='text-form'
                  onInvalid={(e) => {
                    e.preventDefault();
                    setInvalid(true);
                    seteInvalid(true);
                  }}
                />
                {invalid && (
                  <span className={`text-red-accent ${!eInvalid && "hidden"}`}>
                    Must be a valid email
                  </span>
                )}
              </motion.div>
            </div>
            <motion.div variants={vars2}>
              <textarea
                placeholder='Message'
                onChange={(e) => {
                  setMsg(e.target.value);
                  e.target.style.height = "auto";
                  e.target.style.height = e.target.scrollHeight + "px";
                }}
                value={msg}
                required
                title='Please fill out this field'
                className='text-form resize-none mt-4 overflow-y-hidden'
                onInvalid={(e) => {
                  e.preventDefault();
                  setInvalid(true);
                }}
              />
              {invalid && (
                <span
                  className={`text-red-accent ${msg.length != 0 && "hidden"}`}
                >
                  Message field <strong>cannot</strong> be left blank
                </span>
              )}
            </motion.div>
            <motion.input
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { delay: 1.5 } }
              }}
              type='submit'
              value='Send Message'
              className='contact-btn'
            />
          </motion.form>
          <span className='flex items-center gap-2'>
            <HiOutlineMail className='social-icons' />
            <a
              href='mailto:VR@shop-void.com'
              className='underline hover:no-underline'
            >
              VR@shop-void.com
            </a>
          </span>
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
