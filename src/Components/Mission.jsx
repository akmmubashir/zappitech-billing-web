import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Mission() {
  // onscrollanimation start
  const anime1 = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeInOut", duration: 0.9 },
    },
    hidden: { opacity: 0, y: 100 },
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
    <motion.div
      className="mission algn-items-center"
      ref={ref}
      variants={anime1}
      initial="hidden"
      animate={control}
    >
      <h2>Our Mission</h2>
    
      <p>
Z Market LLP is driven by a mission to empower businesses through innovative software solutions. We are committed to delivering customized, efficient, and scalable applications that drive growth and productivity. Our dedication to embracing innovation, providing exceptional customer support, and fostering long-term partnerships sets us apart as a trusted software app company. Join us on this transformative journey as we work together to unlock the full potential of your business through technology.</p>
    </motion.div>
  );
}

export default Mission;
