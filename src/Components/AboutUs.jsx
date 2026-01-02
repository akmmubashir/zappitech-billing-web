import React, { useEffect } from "react";
import About from "../Images/about.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function AboutUs() {
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
    <div className="row align-items-center secpad reverse">
      <motion.div
        className="col-lg-5 col-md-12 col-12"
        ref={ref}
        variants={anime1}
        initial="hidden"
        animate={control1}
      >
        <img src={About} alt="about" className="w-100" />
      </motion.div>
      <motion.div
        className="col-lg-7 col-md-12 col-12 aboutushome1"
        ref={ref}
        variants={anime2}
        initial="hidden"
        animate={control}
      >
        <h2>
          About <span>Z Market LLP</span>
        </h2>
        <p>
          Z Market LLP is a Limited Liability Partnership firm incorporated on
          02 March 2021. It is registered at Registrar of Companies,Ernakulam.
          Designed partners of Z Market LLP is Ramsad Kakkattummal. Z Market
          LLP's last financial year end date for which Statement of Accounts and
          Solvency were filed is N/A and as per records from Ministry of
          Corporate Affairs (MCA), date of last financial year end date for
          which Annual Return were filed is N/A.
        </p>
        <p>
          Z Market LLP's LLP Identification Number is (LLPIN) AAW-1162. Its
          Email address is kmscaoffice@gmail.com and its registered address is
          2/287, C/O Abdul Nasar Pengattiri House, Panamanna Po, Kothakurussi
          Palakkad, KL 679501 IN.
        </p>
      </motion.div>
    </div>
  );
}

export default AboutUs;
