import React from "react";
import { Helmet } from "react-helmet";
import AboutUs from "../Components/AboutUs";
import DownloadSec from "../Components/DownloadSec";
import Mission from "../Components/Mission";
import Vision from "../Components/Vision";
import {motion} from "framer-motion"
import InnerBanner from "../Components/InnerBanner";

function About() {
  return (
    <motion.div  initial={{ width: 0 }}
    animate={{ width: "100%" }}
    exit={{ x: window.innerWidth, transition: { duration: 0.6 } }}>
      <Helmet>
        <meta name="description" content="Custom meta description in about" />
        <meta name="keyword" content="Custom meta keyword in about" />
        <title>Zappitech Billing | About</title>
      </Helmet>
      <InnerBanner/>
      <AboutUs/>
      <Mission/>
      <Vision/>
      <DownloadSec/>
    </motion.div>
  );
}

export default About;
