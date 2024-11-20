import React from "react";
import { motion } from "framer-motion";

const ScalingLink = () => {
  return (
    <motion.a
      href="#"
      style={{
        display: "inline-block",
        textDecoration: "none",
        padding: "10px 20px",
        backgroundColor: "#007BFF",
        color: "#fff",
        borderRadius: "5px",
        fontSize: "16px",
        fontWeight: "bold",
        textAlign: "center",
      }}
      animate={{
        scale: [1, 1.2, 1], // Scale up to 1.2 and back to 1
      }}
      transition={{
        duration: 1.5, // Time for one cycle
        repeat: Infinity, // Repeat forever
        ease: "easeInOut", // Smooth easing
      }}
    >
      Hover Me
    </motion.a>
  );
};

export default ScalingLink;
