import React from "react";
import { Helmet } from "react-helmet";
import DownloadSec from "../Components/DownloadSec";
import {motion} from "framer-motion"
import InnerBanner from "../Components/InnerBanner";
import Contact from "../Components/Contact";
function Support() {
  return (
    <motion.div  initial={{ width: 0 }}
    animate={{ width: "100%" }}
    exit={{ x: window.innerWidth, transition: { duration: 0.6 } }}>
      <Helmet>
        <meta name="description" content="Custom meta description in support" />
        <meta name="keyword" content="Custom meta keyword in support" />
        <title>Zappitech Billing | Support</title>
      </Helmet>
      <InnerBanner/>
      <Contact/>
      <DownloadSec />
    </motion.div>
  );
}

export default Support;
