import React from "react";
import Logo from "../Images/logo.png";
import windows from "../Images/windowsf.png";
import playstore from "../Images/playstoref.png";
import apple from "../Images/applef.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

function FooterMain() {
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
  return (
    <div className="footer row text-white">
      <div className="col-lg-3 col-md-6 col-sm-12 col-12">
        <img src={Logo} alt="logo" className="w-50 mb-4" />
        <ul type="none" className="p-0 d-flex social-i">
          <Link
            to="https://instagram.com/zappitech?igshid=YmMyMTA2M2Y="
            target="_blank"
          >
            <li>
              <FaInstagram />
            </li>
          </Link>
          <Link to="/" target="_blank">
            <li>
              <FaLinkedinIn />
            </li>
          </Link>
          <Link to="https://www.facebook.com/zappitech" target="_blank">
            <li>
              <FaFacebookF />
            </li>
          </Link>
        </ul>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 col-12">
        <h6>Quick Links</h6>
        <ul className="p-0 footer-links" type="none">
          <li className="">
            <Link to="/"
            onClick={()=>window.scrollTo({
              top: 0,
              behavior: 'smooth'
              })}>Home</Link>
          </li>
          <li className="">
            <Link to="/pricing"
            onClick={()=>window.scrollTo({
              top: 0,
              behavior: 'smooth'
              })}>Pricing</Link>
          </li>
          <li className="">
            <Link to="/features"
            onClick={()=>window.scrollTo({
              top: 0,
              behavior: 'smooth'
              })}>Features</Link>
          </li>
          <li className="">
            <Link to="/about"
            onClick={()=>window.scrollTo({
              top: 0,
              behavior: 'smooth'
              })}>About</Link>
          </li>
          <li className="">
            <Link to="/support"
            onClick={()=>window.scrollTo({
              top: 0,
              behavior: 'smooth'
              })}>Support</Link>
          </li>
        </ul>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 col-12">
        <h6>Reach Us</h6>
        <ul className="p-0 footer-links" type="none">
          <li className="">
            <HashLink  smooth to="/#hiw"
            onClick={()=>window.scrollTo({
              behavior: 'smooth'
              })}>How it Works</HashLink>
          </li>
          <li className="">
            <Link to="/privacypolicy"
            onClick={()=>window.scrollTo({
              top: 0,
              behavior: 'smooth'
              })}>Prvacy Policy</Link>
          </li>
          <li className="">
            <Link to="/termsandconditions"
            onClick={()=>window.scrollTo({
              top: 0,
              behavior: 'smooth'
              })}>Terms & Conditions</Link>
          </li>
        </ul>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 col-12">
        <h6>Downloads</h6>
        <div className="row">
          <div className="col-6 mb-4">
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
              <img src={playstore} alt="playstore" className="w-100" />
            </motion.button>
          </div>
          <div className="col-6 mb-4">
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
              <img src={apple} alt="apple" className="w-100" />
            </motion.button>
          </div>
          <div className="col-12">
            <motion.button
              onClick={WindowsAppDownload}
              className="window-btn"
              initial={{ opacity: 0.6 }}
              whileHover={{
                scale: 1.04,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.9 }}
              whileInView={{ opacity: 1 }}
            >
              <img src={windows} alt="windows" className="w-100" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterMain;
