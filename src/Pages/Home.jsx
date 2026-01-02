import React from "react";
import { Helmet } from "react-helmet";
import AboutUsHome from "../Components/AboutUsHome";
import Banner from "../Components/Banner";
import DownloadSec from "../Components/DownloadSec";
import FeaturesHome from "../Components/FeaturesHome";
import HowItWorksHome from "../Components/HowItWorksHome";
import Testimonials from "../Components/Testimonials";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{width:"100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.6 } }}
    >
      <Helmet>
        <meta name="description" content="Custom meta description in home" />
        <meta name="keyword" content="Custom meta keyword in home" />
        <title>Zappitech Billing | Home</title>
      </Helmet>
      <Banner />
      <FeaturesHome />
      <HowItWorksHome />
      <AboutUsHome />
      <DownloadSec />
      <Testimonials />
    </motion.div>
  );
}

export default Home;
