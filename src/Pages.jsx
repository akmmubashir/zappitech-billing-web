import React from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Features from "./Pages/Features";
import Support from "./Pages/Support";
import Pricing from "./Pages/Pricing";
import TandC from "./Pages/TandC";
import PrivacyPolicy from "./Pages/PrivacyPolicy";

function Pages() {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/features" element={<Features />} />
          <Route path="/support" element={<Support />} />
          <Route path="/termsandconditions" element={<TandC />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default Pages;
