import React from "react";
import "./works.css";
import { motion } from "framer-motion";

import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";

const Works = () => {
  return (
    <div className="worksOverall" id="work">
      <h2 className="header">My Works</h2>
      <div className="intro">
        <p>
          Here's a glimpse of some of my recent and exciting projects. Each of
          them reflects my focus on user-centered design and my commitment to
          excellence in user experience.
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          y: ["200px", 0],
          transition: {
            duration: 1.5,
          },
        }}
        viewport={{ once: true, amount: 1 }}
        className="work"
      >
        <div className="aboutWork">
          <h2>Nigerian Eu innovation Seminar</h2>
          <p></p>
        </div>
        <div className="actualWork">
          <img src={img1} alt="" />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          y: ["200px", 0],
          transition: {
            duration: 1.5,
          },
        }}
        viewport={{ once: true, amount: 1 }}
        className="work"
      >
        <div className="aboutWork">
          <h2>Game Rush Euro 24 finals</h2>
          <p></p>
        </div>
        <div className="actualWork">
          <img src={img2} alt="" />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          y: ["200px", 0],
          transition: {
            duration: 1.5,
          },
        }}
        viewport={{ once: true, amount: 1 }}
        className="work"
      >
        <div className="aboutWork">
          <h2>The Yard Series ( Summer Rave)</h2>
          <p></p>
        </div>
        <div className="actualWork">
          <img src={img3} alt="" />
        </div>
      </motion.div>
    </div>
  );
};

export default Works;
