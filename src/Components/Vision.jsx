import React, { useEffect } from "react";
import VisionImg from "../Images/vision.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Vision() {
  // onscrollanimation start
  const anime1 = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { ease: "easeInOut", duration: 0.9 },
    },
    hidden: { opacity: 0, x: 100 },
  };
  const anime2 = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { ease: "easeInOut", duration: 0.9 },
    },
    hidden: { opacity: 0, x: -100 },
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
    <div className="row align-items-center secpad pb-0">
      
      <motion.div
        className="col-lg-7 col-md-12 col-12 aboutushome1"
        ref={ref}
        variants={anime2}
        initial="hidden"
        animate={control}
      >
        <h2>
        Our <span>Vision</span>
        </h2>
        <p>
        At Z Market LLP, we have a clear vision of driving positive change and empowering growth across industries. As a dynamic and forward-thinking company, we strive to revolutionize the market landscape through our innovative solutions and unwavering commitment to excellence. Our vision sets the course for our endeavors, guiding us to deliver exceptional value to our clients and stakeholders. Join us as we unveil our vision for a brighter future.
        </p>
      </motion.div>
      <motion.div
        className="col-lg-5 col-md-12 col-12"
        ref={ref}
        variants={anime1}
        initial="hidden"
        animate={control1}
      >
        <img src={VisionImg} alt="Vision" className="w-100" />
      </motion.div>
    </div>
  );
}

export default Vision;
