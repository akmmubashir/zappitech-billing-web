import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import avlbl from "../Images/Eclipse/available.png";
import navlbl from "../Images/Eclipse/notavailable.png";

function Plans() {
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
      y: 0,
      transition: { ease: "easeInOut", duration: 0.9 },
    },
    hidden: { opacity: 0, y: 100 },
  };
  const anime3 = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { ease: "easeInOut", duration: 0.9 },
    },
    hidden: { opacity: 0, x: 100 },
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  // onscrollanimation end
  return (
    <motion.div className="row secpad align-items-center plans pb-0" ref={ref}>
      <motion.div
        className="col-lg-4 col-12 plansec"
        ref={ref}
        variants={anime1}
        initial="hidden"
        animate={control}
      >
        <h2>Freebie</h2>
        <p>
          Ideal for businesses who need personalized services and security for
          large teams.
        </p>
        <h3 className="align-items-center">
          <span>₹0</span>
          <span>/Month</span>
        </h3>
       
        <ul type="none" className="p-0">
          <li className="d-flex align-items-center my-lg-3 my-2">
            <div className="me-2">
              <img src={avlbl} alt="available" />
            </div>
            <div>Lorem ipsum</div>
          </li>
          <li className="d-flex align-items-center my-lg-3 my-2">
            <div className="me-2">
              <img src={avlbl} alt="available" />
            </div>
            <div>Lorem ipsum</div>
          </li>
          <li className="d-flex align-items-center my-lg-3 my-2">
            <div className="me-2">
              <img src={navlbl} alt="available" />
            </div>
            <div>Lorem ipsum</div>
          </li>
          <li className="d-flex align-items-center my-lg-3 my-2">
            <div className="me-2">
              <img src={navlbl} alt="available" />
            </div>
            <div>Lorem ipsum</div>
          </li>
          <li className="d-flex align-items-center my-lg-3 my-2">
            <div className="me-2">
              <img src={navlbl} alt="available" />
            </div>
            <div>Lorem ipsum</div>
          </li>
          <li className="d-flex align-items-center my-lg-3 my-2">
            <div className="me-2">
              <img src={navlbl} alt="available" />
            </div>
            <div>Lorem ipsum</div>
          </li>
        </ul>
      </motion.div>
      <motion.div
        className="col-lg-4 col-12 plansec"
        variants={anime2}
        initial="hidden"
        animate={control}
      >
        <h2>Professional</h2>
        <p>
          Ideal for businesses who need personalized services and security for
          large teams.
        </p>
        <h3 className="align-items-center">
          <span>₹599</span>
          <span>/Month</span>
        </h3>
        <ul type="none" className="p-0">
          <li className="d-flex align-items-center my-lg-3 my-2">
            <div className="me-2">
              <img src={avlbl} alt="available" />
            </div>
            <div>Lorem ipsum</div>
          </li>
          <li className="d-flex align-items-center my-lg-3 my-2">
            <div className="me-2">
              <img src={avlbl} alt="available" />
            </div>
            <div>Lorem ipsum</div>
          </li>
          <li className="d-flex align-items-center my-lg-3 my-2">
            <div className="me-2">
              <img src={avlbl} alt="available" />
            </div>
            <div>Lorem ipsum</div>
          </li>
          <li className="d-flex align-items-center my-lg-3 my-2">
            <div className="me-2">
              <img src={avlbl} alt="available" />
            </div>
            <div>Lorem ipsum</div>
          </li>
          <li className="d-flex align-items-center my-lg-3 my-2">
            <div className="me-2">
              <img src={navlbl} alt="available" />
            </div>
            <div>Lorem ipsum</div>
          </li>
          <li className="d-flex align-items-center my-lg-3 my-2">
            <div className="me-2">
              <img src={navlbl} alt="available" />
            </div>
            <div>Lorem ipsum</div>
          </li>
        </ul>
      </motion.div>
      <motion.div
        className="col-lg-4 col-12 plansec"
        variants={anime3}
        initial="hidden"
        animate={control}
      >
        <h2>Enterprise</h2>
        <p>
          Ideal for businesses who need personalized services and security for
          large teams.
        </p>
        <h3 className="align-items-center">
          <span>₹1199</span>
          <span>/Month</span>
        </h3>
        <ul type="none" className="p-0">
          <li className="d-flex align-items-center my-lg-3 my-2">
            <div className="me-2">
              <img src={avlbl} alt="available" />
            </div>
            <div>Lorem ipsum</div>
          </li>
          <li className="d-flex align-items-center my-lg-3 my-2">
            <div className="me-2">
              <img src={avlbl} alt="available" />
            </div>
            <div>Lorem ipsum</div>
          </li>
          <li className="d-flex align-items-center my-lg-3 my-2">
            <div className="me-2">
              <img src={avlbl} alt="available" />
            </div>
            <div>Lorem ipsum</div>
          </li>
          <li className="d-flex align-items-center my-lg-3 my-2">
            <div className="me-2">
              <img src={avlbl} alt="available" />
            </div>
            <div>Lorem ipsum</div>
          </li>
          <li className="d-flex align-items-center my-lg-3 my-2">
            <div className="me-2">
              <img src={avlbl} alt="available" />
            </div>
            <div>Lorem ipsum</div>
          </li>
          <li className="d-flex align-items-center my-lg-3 my-2 mb-lg-auto mb-0">
            <div className="me-2">
              <img src={avlbl} alt="available" />
            </div>
            <div>Lorem ipsum</div>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
}

export default Plans;
