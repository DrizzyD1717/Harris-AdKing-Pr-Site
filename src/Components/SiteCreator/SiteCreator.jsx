import React from "react";
import "./siteCreator.css";
import { motion } from "framer-motion";

const SiteCreator = () => {
  return (
    <div className="creator">
      This site was made by
      <motion.a
        animate={{
          scale: [1, 1.2, 1], // Scale up to 1.2 and back to 1
        }}
        transition={{
          duration: 1.5, // Time for one cycle
          repeat: Infinity, // Repeat forever
          ease: "easeInOut", // Smooth easing
        }}
        href="https://dariolulana.netlify.app/"
      >
        Olulana Oluwadarimisire
      </motion.a>
    </div>
  );
};

export default SiteCreator;
