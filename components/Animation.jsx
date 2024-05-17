"use client";
import { motion } from "framer-motion";

const Butterfly = () => {
  return (
    <motion.div
      className="relative"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="blue"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-butterfly"
      >
        <path d="M10.88 4.21A5.36 5.36 0 0112 2.5a5.36 5.36 0 011.12 1.71A5.25 5.25 0 0116.64 3a5.38 5.38 0 012.88 1.57 5.38 5.38 0 01-7.13 7.13l-.22-.22-.22.22a5.38 5.38 0 01-7.13-7.13A5.38 5.38 0 017.36 3a5.25 5.25 0 011.71 1.21A5.36 5.36 0 0112 2.5a5.36 5.36 0 011.12 1.71M12 12.5a5.5 5.5 0 00-5.5 5.5 5.5 5.5 0 005.5 5.5 5.5 5.5 0 005.5-5.5 5.5 5.5 0 00-5.5-5.5z"></path>
      </svg>
    </motion.div>
  );
};

export default Butterfly;
