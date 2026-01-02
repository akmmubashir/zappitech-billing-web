import React, { useEffect } from "react";
import About from "../Images/aboutus.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

function AboutUsHome() {
  const navto =useNavigate()
  // onscrollanimation start
  const anime1 = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { ease: "easeInOut", duration: 0.9 },
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
    <div className="row align-items-center secpad reverse pb-0">
      <motion.div
        className="col-lg-5 col-md-12 col-12"
        ref={ref}
        variants={anime1}
        initial="hidden"
        animate={control1}
      >
        <img src={About} alt="aboutus" className="w-100" />
      </motion.div>
      <motion.div
        className="col-lg-7 col-md-12 col-12 aboutushome1"
        ref={ref}
        variants={anime2}
        initial="hidden"
        animate={control}
      >
        <h6>About Us</h6>
        <h2>
          Get to Know More About <span>Zappitech</span>
        </h2>
        <p>
          Zappitech is a provider of invoicing mobile and desktop apps with the
          purpose of making billing procedures easier and more easy for Indian
          MSME company teams. Clients may use our software to easily track and
          alter inventories and transactions. We offer an easy-to-use invoicing
          solution that alleviates the burden and bother associated with GST
          billing and filing.
        </p>
        <button className="inner-btn"
        onClick={() => {
          navto("/about");
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
            })}}>About Us</button>
      </motion.div>
    </div>
  );
}

export default AboutUsHome;
