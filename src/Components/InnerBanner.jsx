import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";

function InnerBanner() {
  const anime1 = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeInOut", duration: 0.9 },
    },
    hidden: { opacity: 0, y: -100 },
  };

  const anime2 = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeInOut", duration: 1.2 },
    },
    hidden: { opacity: 0, y: 100 },
  };

  const control = useAnimation();
  const control1 = useAnimation();

  const [ref, inView] = useInView();
  const location = useLocation();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  useEffect(() => {
    if (inView) {
      control1.start("visible");
    } else {
      control1.start("hidden");
    }
  }, [control1, inView]);

  //   banner heading path start
  
  const [currentpage, setcurrentpage] = useState("");
  useEffect(() => {
    const path = location.pathname;

    if (path === "/features") {
      setcurrentpage("Features");
    } else if (path === "/about") {
      setcurrentpage("About");
    } else if (path === "/about") {
      setcurrentpage("About");
    } else if (path === "/support") {
      setcurrentpage("Support");
    } else if (path === "/pricing") {
      setcurrentpage("Pricing");
    } else if (path === "/termsandconditions") {
      setcurrentpage("Terms & Conditions");
    } else if (path === "/privacypolicy") {
      setcurrentpage("Privacy Policy");
    }
  }, [location.pathname]);

  //   banner heading path end

  return (
    <motion.div
      className="inner-banner algn-items-center"
      ref={ref}
      variants={anime1}
      initial="hidden"
      animate={control}
    >
      <motion.h1
        ref={ref}
        variants={anime2}
        initial="hidden"
        animate={control1}
      >
        {currentpage}
      </motion.h1>
    </motion.div>
  );
}

export default InnerBanner;
