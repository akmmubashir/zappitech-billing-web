import React, { useState } from "react";
// import React, { useEffect, useState } from "react";
import { Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../Images/logo.png";
import { MdApps, MdDownloadForOffline } from "react-icons/md";
import { HiDownload } from "react-icons/hi";
import { motion } from "framer-motion";
// import { useLocation } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";

function NavbarMain() {
  const navto = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const location = useLocation();
  // const [active, setactive] = useState("Home");
  // useEffect(() => {
  //   const path = location.pathname;
  //   if (path === "/features") {
  //     setactive("Features");
  //   } else if (path === "/about") {
  //     setactive("About");
  //   } else if (path === "/") {
  //     setactive("Home");
  //   } else if (path === "/support") {
  //     setactive("Support");
  //   } else if (path === "/pricing") {
  //     setactive("Pricing");
  //   } else if (path === "/termsandconditions") {
  //     setactive("Terms & Conditions");
  //   } else if (path === "/privacypolicy") {
  //     setactive("Privacy Policy");
  //   }
  // }, [location.pathname]);
  return (
    <React.Fragment>
      <Navbar
        bg="white"
        sticky="top"
        className="py-md-4 py-2 main-sec align-items-center"
      >
        <Navbar.Brand className="logo">
          <Link to="/">
          <img src={Logo} className="logo" alt="logo" />
          </Link>
        </Navbar.Brand>
        {/* <Nav className="me-auto nav-main">
          <a
            className={active === "Home" ? "nav-link active" : "nav-link"}
            href="/"
          >
            Home
          </a>
          <a
            className={active === "Features" ? "nav-link active" : "nav-link"}
            href="/features"
          >
            Features
          </a>
          <a
            className={active === "Pricing" ? "nav-link active" : "nav-link"}
            href="/pricing"
          >
            Pricing
          </a>
          <a
            className={active === "About" ? "nav-link active" : "nav-link"}
            href="/about"
          >
            About
          </a>
          <a
            className={active === "Support" ? "nav-link active" : "nav-link"}
            href="/support"
          >
            Support
          </a>
        </Nav> */}
        <Nav className="me-auto nav-main">
          <NavLink className="nav-link" to="/" 
          onClick={()=>window.scrollTo({
            top: 0,
            behavior: 'smooth'
            })}>
            Home
          </NavLink>
          <NavLink className="nav-link" to="/features"
          onClick={()=>window.scrollTo({
            top: 0,
            behavior: 'smooth'
            })}>
            Features
          </NavLink>
          <NavLink className="nav-link" to="/pricing"
          onClick={()=>window.scrollTo({
            top: 0,
            behavior: 'smooth'
            })}>
            Pricing
          </NavLink>
          <NavLink className="nav-link" to="/about"
          onClick={()=>window.scrollTo({
            top: 0,
            behavior: 'smooth'
            })}>
            About
          </NavLink>
          <NavLink className="nav-link" to="/support"
          onClick={()=>window.scrollTo({
            top: 0,
            behavior: 'smooth'
            })}>
            Support
          </NavLink>
        </Nav>
        <div className="ms-auto">
          <a href="#getstarted">
            <motion.button
              className="nav-btn"
              initial={{ opacity: 0.6 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.9 }}
              whileInView={{ opacity: 1 }}
            >
              <span>Get Now</span>
              <HiDownload />
            </motion.button>
          </a>
        </div>
        <div className="ms-3  nav-d">
          <a href="#getstarted">
            <motion.button
              className="nav-d-btn"
              initial={{ opacity: 0.6 }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.9 }}
              whileInView={{ opacity: 1 }}
            >
              <MdDownloadForOffline />
            </motion.button>
          </a>
        </div>
        <div className="ms-3 menu">
          <motion.button
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
            className="menu-btn"
            onClick={handleShow}
          >
            <MdApps />
          </motion.button>
          <Offcanvas
            show={show}
            onHide={handleClose}
            placement="top"
            className="align-items-center text-center"
          >
            <Offcanvas.Header className="text-center">
              <Offcanvas.Title>
                <Link to="/"  onClick={() => {
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                        })
                      setShow(false);
                    }}>
                  <img src={Logo} className="logo" alt="logo" />
                </Link>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {/* <ul className="toggle-menu p-0" type="none">
                <li>
                  <motion.a
                    initial={{ opacity: 0.6 }}
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    whileInView={{ opacity: 1 }}
                    href="/"
                  >
                    Home
                  </motion.a>
                </li>

                <li>
                  <motion.a
                    initial={{ opacity: 0.6 }}
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    whileInView={{ opacity: 1 }}
                    href="/features"
                  >
                    Features
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    initial={{ opacity: 0.6 }}
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    whileInView={{ opacity: 1 }}
                    href="/pricing"
                  >
                    Pricing
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    initial={{ opacity: 0.6 }}
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    whileInView={{ opacity: 1 }}
                    href="/about"
                  >
                    About
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    initial={{ opacity: 0.6 }}
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    whileInView={{ opacity: 1 }}
                    href="/support"
                  >
                    Support
                  </motion.a>
                </li>
              </ul> */}
              <ul className="toggle-menu p-0" type="none">
                <li>
                  <motion.button
                    initial={{ opacity: 0.6 }}
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    whileInView={{ opacity: 1 }}
                    onClick={() => {
                      navto("/");
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                        })
                      setShow(false);
                    }}
                  >
                    Home
                  </motion.button>
                </li>

                <li>
                  <motion.button
                    initial={{ opacity: 0.6 }}
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    whileInView={{ opacity: 1 }}
                    onClick={() => {
                      navto("/features");
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                        })
                      setShow(false);
                    }}
                  >
                    Features
                  </motion.button>
                </li>
                <li>
                  <motion.button
                    initial={{ opacity: 0.6 }}
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    whileInView={{ opacity: 1 }}
                    onClick={() => {
                      navto("/pricing");
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                        })
                      setShow(false);
                    }}
                  >
                    Pricing
                  </motion.button>
                </li>
                <li>
                  <motion.button
                    initial={{ opacity: 0.6 }}
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    whileInView={{ opacity: 1 }}
                    onClick={() => {
                      navto("/about");
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                        })
                      setShow(false);
                    }}
                  >
                    About
                  </motion.button>
                </li>
                <li>
                  <motion.button
                    initial={{ opacity: 0.6 }}
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    whileInView={{ opacity: 1 }}
                    onClick={() => {
                      navto("/support");
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                        })
                      setShow(false);
                    }}
                  >
                    Support
                  </motion.button>
                </li>
              </ul>
            </Offcanvas.Body>
            <Offcanvas.Header>
              <div className="">
                <motion.button
                  className="close-btn"
                  onClick={() => setShow(false)}
                  initial={{ opacity: 0.6 }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 1 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  whileInView={{ opacity: 1 }}
                >
                  Close
                </motion.button>
              </div>
            </Offcanvas.Header>
          </Offcanvas>
        </div>
      </Navbar>
    </React.Fragment>
  );
}

export default NavbarMain;
