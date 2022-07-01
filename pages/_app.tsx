import "../styles/globals.css";
import type { AppProps } from "next/app";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

function MyApp({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState(false);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    if (open) {
      document.body.style.top = `-${offset}px`;
    }
  }, [open]);
  return (
    <>
      <Sidebar
        open={open}
        setOpen={setOpen}
        setOffset={setOffset}
        offset={offset}
      />

      <motion.main
        className={`bg-black-dull transition-transform ${
          open ? `overflow-hidden max-h-screen` : ""
        }`}
        style={
          open
            ? {
                scaleX: 0.95,
                scaleY: 0.9,
                marginLeft: "64px",
                borderRadius: "1rem"
              }
            : {
                transitionDuration: ".3s"
              }
        }
      >
        <Component {...pageProps} />
      </motion.main>
    </>
  );
}

export default MyApp;
