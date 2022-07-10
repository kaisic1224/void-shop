import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Dispatch, memo, SetStateAction, useRef, useState } from "react";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { FaTshirt } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const navigation = [
  {
    name: "Home",
    path: "/",
    component: (
      <BsFillHouseDoorFill className={`nav-icon group-hover:opacity-80`} />
    )
  },
  {
    name: "Apparel",
    path: "/store",
    component: <FaTshirt className={`nav-icon group-hover:opacity-80`} />
  },
  {
    name: "Contact",
    path: "/#contact",
    component: <MdMail className={`nav-icon group-hover:opacity-80`} />
  }
];

const scytheVars = {
  hidden: {
    rotate: 140
  },
  show: {
    rotate: 0,
    transition: {
      ease: "easeOut"
    }
  },
  hover: {
    rotate: -45,
    transition: {
      duration: 3
    }
  }
};

const Sidebar = ({
  open,
  setOpen,
  offset,
  setOffset
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  offset: number;
  setOffset: Dispatch<SetStateAction<number>>;
}) => {
  const [visibility, setVisibility] = useState(true);
  const bgRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  return (
    <>
      {visibility && (
        <motion.div
          variants={scytheVars}
          initial='hidden'
          animate='show'
          whileTap='hidden'
          whileHover='hover'
          onTapStart={() => {
            setOffset(window.scrollY);
            setOpen(!open);
          }}
          className={`fixed top-2 left-2 select-none z-[899]`}
        >
          <Image
            className='cursor-pointer'
            src='/scythe.png'
            width={40}
            height={40}
            objectFit='cover'
          />
        </motion.div>
      )}
      <div
        ref={bgRef}
        onClick={(e) => {
          if (e.target === bgRef.current) setOpen(!open);
          window.scrollTo(0, offset);
        }}
        className={`fixed inset-0 transition-colors duration-300 z-[900] ${
          open
            ? "bg-black/40 select-none"
            : "bg-transparent pointer-events-none"
        }`}
      >
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: "-135%" }}
              animate={{ x: 0 }}
              exit={{ x: "-135%" }}
              onAnimationComplete={() => setVisibility(!visibility)}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className='p-4 bg-black absolute min-h-screen z-[999]'
            >
              <ul
                className='flex flex-col items-center gap-2 bg-black-dull text-white px-4 py-8
             rounded-md'
              >
                {navigation.map((nav) => (
                  <li className='group relative' key={nav.path}>
                    <Link href={nav.path}>
                      <a
                        className={`block p-2 nav-item ${
                          router.pathname === nav.path && "bg-black-base"
                        }`}
                      >
                        {nav.component}
                      </a>
                    </Link>
                    <span className='nav-tooltip group-hover:scale-100'>
                      {nav.name}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
export default Sidebar;
