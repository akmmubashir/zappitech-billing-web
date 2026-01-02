import React, { useEffect } from "react";
import windows from "../Images/windowsd.png";
import apple from "../Images/appled.png";
import playstore from "../Images/playstored.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function DownloadSec() {
  const WindowsAppDownload = () => {
    // using Java Script method to get PDF file
    fetch("zappitech.exe").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "zappitech.exe";
        alink.click();
      });
    });
  };
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
    <div className="row dsec align-items-center" id="getstarted">
      <motion.div
        className="col-lg-7 col-md-12 col-12 dsec1"
        ref={ref}
        variants={anime1}
        initial="hidden"
        animate={control}
      >
        <h2>
          Download The Latest Version Of The App
          {/* Download your App available now */}
        </h2>
        <p>
          You can download the latest version of the Zappitech Invoicing App
          from here. It is now available on...
        </p>
      </motion.div>
      <motion.div
        className="col-lg-5 col-md-12 col-12 dsec2  text-center"
        ref={ref}
        variants={anime2}
        initial="hidden"
        animate={control}
      >
        <motion.button
          target="_blank"
          className="window-btn"
          onClick={() =>
            window.open(
              "https://play.google.com/store/apps/details?id=com.zappitech.zappi_tech",
              "_blank"
            )
          }
          initial={{ opacity: 0.6 }}
          whileHover={{
            scale: 1.04,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
          whileInView={{ opacity: 1 }}
        >
          <img src={playstore} alt="playstore" className="d-img" />
        </motion.button>
        <motion.button
          className="window-btn"
          onClick={() =>
            window.open(
              "https://play.google.com/store/apps/details?id=com.zappitech.zappi_tech",
              "_blank"
            )
          }
          initial={{ opacity: 0.6 }}
          whileHover={{
            scale: 1.04,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
          whileInView={{ opacity: 1 }}
        >
          <img src={apple} alt="applestore" className="d-img " />
        </motion.button>
        <motion.button
          onClick={WindowsAppDownload}
          // onClick={()=> window.open("https://firebasestorage.googleapis.com/v0/b/test-24929.appspot.com/o/zappitech.exe?alt=media&token=e6d2a658-21f3-4169-9ce2-44f7beed6c93")}
          className="window-btn"
          initial={{ opacity: 0.6 }}
          whileHover={{
            scale: 1.04,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
          whileInView={{ opacity: 1 }}
        >
          <img src={windows} alt="microsoftstore" className="d-img" />
        </motion.button>
      </motion.div>
    </div>
  );
}

export default DownloadSec;
