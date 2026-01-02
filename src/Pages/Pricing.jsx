import React from "react";
import { Helmet } from "react-helmet";
import DownloadSec from "../Components/DownloadSec";
import { motion } from "framer-motion";
import InnerBanner from "../Components/InnerBanner";
import Plans from "../Components/Plans";

function Pricing() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.6 } }}
    >
      <Helmet>
        <meta name="description" content="Custom meta description in Pricing" />
        <meta name="keyword" content="Custom meta keyword in Pricing" />
        <title>Zappitech Billing | Pricing</title>
      </Helmet>
      <InnerBanner />
      <Plans/>
      <DownloadSec />
    </motion.div>
  );
}

export default Pricing;
