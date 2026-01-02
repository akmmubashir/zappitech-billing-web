import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Form } from "react-bootstrap";

function Contact() {
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
      transition: { ease: "easeInOut", duration: 1.1 },
    },
    hidden: { opacity: 0, x: 100 },
  };
  const anime3 = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeInOut", duration: 0 },
    },
    hidden: { opacity: 0, y: -100 },
  };

  const control = useAnimation();
  const control1 = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  useEffect(() => {
    if (inView) {
      control1.start("visible");
    }
  }, [control1, inView]);

  // onscrollanimation end
  return (
    <motion.div className="row secpad contact pb-0"  ref={ref}
    variants={anime3}
    initial="hidden"
    animate={control1}>
      <motion.div
        className="col-lg-6 col-12 pe-lg-5 pe-0 mb-lg-0 mb-4"
        ref={ref}
        variants={anime1}
        initial="hidden"
        animate={control1}
      >
        <h2>
          Let’s <span>Talk</span>
        </h2>
        <p>
          Have some big idea or brand to develop and need help? Then reach out
          we'd love to hear about your project and provide help
        </p>
        <div className="mt-4">
          <h4>Email</h4>
          <p>info@zappitech.com</p>
          <p>kmscaoffice@gmail.com</p>
          <h4>Phone</h4>
          <p>+91 7510 488 050</p>
          <h4>Socials</h4>
          <p>Instagram</p>
          <p>Twitter</p>
          <p>Facebook</p>
        </div>
      </motion.div>
      <motion.div className="col-lg-6 col-12" ref={ref}
      variants={anime2}
      initial="hidden"
      animate={control}>
        <Form className="ps-lg-5 ps-0 contact-form">
          <Form.Group className="mb-3">
            <Form.Label>Full Name *</Form.Label>
            <Form.Control />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Phone *</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email *</Form.Label>
            <Form.Control type="email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Message *</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <div className="mt-4 text-end">
            <button className="inner-btn">Submit</button>
          </div>
        </Form>
      </motion.div>
    </motion.div>
  );
}

export default Contact;
