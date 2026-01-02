import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Feature from "../Images/feature-inner.png";
import svg1 from "../Images/Feature/svg1.svg";
// import ecl1 from "../Images/Eclipse/eclipse1.png"
// import ecl2 from "../Images/Eclipse/eclipse2.png"
import ecl1 from "../Images/Eclipse/eclipse3.png"

function FeaturesLine() {
     // onscrollanimation start


  const anime = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeInOut", duration: 0.9 },
    },
    hidden: { opacity: 0, y: 100 },
  };


  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } 
  }, [control, inView]);
  // onscrollanimation end
  return (
    <motion.div className="row secpad align-items-center  pb-0"  ref={ref}
    variants={anime}
    initial="hidden"
    animate={control}>
        <img src={ecl1} alt="ecl1" className="ecl1" />
        <img src={ecl1} alt="ecl2" className="ecl2" />
        <img src={ecl1} alt="ecl3" className="ecl3" />
      <div className="col-xl-3 col-md-12 feature-inner-1">
        <div className="col-12 circle">
          <div className="inner-circle circle-1">
            <div className="text-center ">
              <img src={svg1} alt="svg1" />
              <p className="pt-md-3 pt-2">Make GST invoices with app to avoid penalties</p>
            </div>
          </div>
        </div>
        <div className="col-12 circle">
          <div className="inner-circle circle-2">
            <div className="text-center ">
              <img src={svg1} alt="svg1" />
              <p className="pt-md-3 pt-2">Make GST invoices with app to avoid penalties</p>
            </div>
          </div>
        </div>
        <div className="col-12 circle">
          <div className="inner-circle circle-3">
            <div className="text-center ">
              <img src={svg1} alt="svg1" />
              <p className="pt-md-3 pt-2">Make GST invoices with app to avoid penalties</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6 align-items-center text-center">
        <img src={Feature} alt="festure" className="w-75" />
      </div>
      <div className="col-xl-3 col-md-12 feature-inner-2">
        <div className="col-12 circle">
          <div className="inner-circle circle-4">
            <div className="text-center ">
              <img src={svg1} alt="svg1" />
              <p className="pt-md-3 pt-2">Make GST invoices with app to avoid penalties</p>
            </div>
          </div>
        </div>
        <div className="col-12 circle">
          <div className="inner-circle circle-5">
            <div className="text-center ">
              <img src={svg1} alt="svg1" />
              <p className="pt-md-3 pt-2">Make GST invoices with app to avoid penalties</p>
            </div>
          </div>
        </div>
        <div className="col-12 circle">
          <div className="inner-circle circle-6">
            <div className="text-center ">
              <img src={svg1} alt="svg1" />
              <p className="pt-md-3 pt-2">Make GST invoices with app to avoid penalties</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default FeaturesLine;
