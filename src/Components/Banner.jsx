import React, { useEffect } from "react";
import Banner1 from "../Images/banner1.png";
import Banner3 from "../Images/banner3.png";
import Eclipse1 from "../Images/Eclipse/eclipse1.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

function Banner() {
  const navto=useNavigate()
  const anime1 = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { ease: "easeIn", duration: 0.9 },
    },
    hidden: { opacity: 0, x: -100 },
  };
  const anime2 = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { ease: "easeInOut", duration: 0.9 },
    },
    hidden: { opacity: 0, x: 100 },
  };

  const control = useAnimation();
  const control1 = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  useEffect(() => {
    if (inView) {
      control1.start("visible");
    }
  }, [control1, inView]);
  // onscrollanimation end
  return (
    <div className="row banner-secpad reverse">
      <div className="col-lg-5 col-md-12 col-12 text-center">
        <img src={Banner1} className="banner1" alt="banner1" />
        <motion.img
          src={Banner3}
          className="banner3"
          alt="banner3"
          ref={ref}
          variants={anime1}
          initial="hidden"
          animate={control1}
        />
      </div>
      <div className="col-lg-7 col-md-12 col-12 ">
        <motion.div
          className="banner-content"
          ref={ref}
          variants={anime2}
          initial="hidden"
          animate={control}
        >
          <h1>
            Make Your <span>Billing Process</span> More Easy And Friendly
          </h1>
          <p>
            Zappitech is an invoicing mobile and desktop app provider with the goal of
            making billing processes simpler and more convenient for Indian MSME
            business teams.
          </p>
          <button className="inner-btn" 
          onClick={() => {
            navto("/pricing");
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
              })}}>Get Started</button>

          <img src={Eclipse1} className="eclipse1" alt="Eclipse1" />
        </motion.div>
      </div>
      {/* <img src={Banner2} className="banner2" alt="banner2" /> */}
      <div className="banner2"></div>
    </div>
  );
}

export default Banner;
