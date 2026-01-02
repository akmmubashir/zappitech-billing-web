import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import Testimonial from "../Images/testimonials.png";
import Quote from "../Images/Eclipse/quote.png";

function Testimonials() {
  const settings = {
    // dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    arrows: true,
    // lazyLoad: 'ondemand',
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
  const control1 = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      control.start("visible");
    }else {
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
    <motion.div className="row align-items-center secpad pt-0" ref={ref}>
      <motion.div className="col-lg-7 col-md-12 col-12 testimonials"  ref={ref}
        variants={anime1}
        initial="hidden"
        animate={control}>
        <h2>
          What our users have been <span>saying</span>
        </h2>
        <div>
          <div>
            <img src={Quote} alt="quote" />
          </div>
          <Slider {...settings}>
            <div className="slider-div">
              <div>
                <p>
                  “ Zappitech's billing app has made my life so much easier! I love how it sends me instant notifications for payments and invoices. It keeps me organized and ensures I never miss a deadline “
                </p>
                <h6>Ajmal Fawas</h6>
              </div>
            </div>
            <div className="slider-div">
              <div>
                <p>
                  “ As a small business owner, I needed a billing app that was user-friendly and hassle-free. Zappitech's app fits the bill perfectly! It's so easy to use, and their easy billing feature has saved me valuable time “
                </p>
                <h6>Subeesh</h6>
              </div>
            </div>
            <div className="slider-div">
              <div>
                <p>
                  “ Zappitech's item library feature has made my invoicing process so much more efficient. I can easily access my products and services, add them to invoices, and send them out in no time. It's a true time-saver! “
                </p>
                <h6>Aslam Sha</h6>
              </div>
            </div>
            <div className="slider-div">
              <div>
                <p>
                  “ I love how Zappitech's billing app comes with an item library. It makes creating invoices a breeze! I can easily access my products or services and add them to invoices with just a few clicks. “
                </p>
                <h6>Jeevan Joseph</h6>
              </div>
            </div>
          </Slider>
        </div>
      </motion.div>
      <motion.div className="col-lg-5 col-md-12 col-12"  ref={ref}
        variants={anime2}
        initial="hidden"
        animate={control1}>
        <img src={Testimonial} alt="testimonials" className="w-100" />
      </motion.div>
    </motion.div>
  );
}

export default Testimonials;
