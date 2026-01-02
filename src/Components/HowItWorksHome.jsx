import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HIW1 from "../Images/hiw1.png";
import HIW2 from "../Images/hiw2.png";
import HIW3 from "../Images/hiw3.png";

function HowItWorksHome() {
  // onscrollanimation start

  // const anime = {
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: { ease: "easeInOut", duration: 0.5 },
  //   },
  //   hidden: { opacity: 0, y: -100 },
  // };
  const anime1 = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeInOut", duration: 0.9 },
    },
    hidden: { opacity: 0, y: 100 },
  };
  const anime2 = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeInOut", duration: 1.2 },
    },
    hidden: { opacity: 0, y: 100 },
  };
  const anime3 = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeInOut", duration: 1.4 },
    },
    hidden: { opacity: 0, y: 100 },
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
    <motion.div className="hiw" id="hiw" ref={ref}>
      <div className="hiw1 secpad">
        <h2>How it Works</h2>
      </div>
      <div className="hiw2 row">
        <motion.div
          className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 "
          ref={ref}
          variants={anime1}
          initial="hidden"
          animate={control}
        >
          <div className="box m-auto">
            <p className="norm-p-head">Track Inventory</p>
            <p className="norm-p">
              Our app enables clients to simply and rapidly track and change
              inventories and transactions.
            </p>
            <img src={HIW1} alt="hiw1" className="w-100" />
          </div>
        </motion.div>
        <motion.div
          className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 "
          ref={ref}
          variants={anime2}
          initial="hidden"
          animate={control}
        >
          <div className="box m-auto">
            <img src={HIW2} alt="hiw2" className="w-100" />
            <p className="spc-p-head">Instant Notifications</p>
            <p className="spc-p">
              You can better manage your cash flow if you know when an invoice
              is seen, when it is due or paid.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 "
          ref={ref}
          variants={anime3}
          initial="hidden"
          animate={control}
        >
          <div className="box m-auto">
            <p className="norm-p-head">GST Bill Made Friendly</p>
            <p className="norm-p">
              We have a user-friendly invoicing system that takes the stress and
              worry out of GST billing and filing.
              {/* There is no longer any need to be worried about GST billing. We
              have a customer-friendly invoicing system that eliminates the
              stress and worry associated with GST billing and filing... */}
            </p>

            <img src={HIW3} alt="hiw3" className="w-100" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default HowItWorksHome;
