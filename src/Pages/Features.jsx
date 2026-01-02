import React from "react";
import { Helmet } from "react-helmet";
import DownloadSec from "../Components/DownloadSec";
import { motion } from "framer-motion";
// import FeaturesLine from "../Components/FeaturesLine";
import InnerBanner from "../Components/InnerBanner";
import FeaturesSec from "../Components/FeaturesSec";

function Features() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.6 } }}
    >
      <Helmet>
        <meta name="description" content="Custom meta description in about" />
        <meta name="keyword" content="Custom meta keyword in about" />
        <title>Zappitech Billing | Features</title>
      </Helmet>
      <InnerBanner />
      <FeaturesSec />
      <DownloadSec />
    </motion.div>
  );
}

export default Features;
