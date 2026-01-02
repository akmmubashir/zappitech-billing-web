import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import sandc from "../Images/Feature/sandc.svg";
import fimage from "../Images/feature-inner.png"

function FeaturesSec() {
  // onscrollanimation start

  const anime = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeInOut", duration: 0.9 },
    },
    hidden: { opacity: 0, y: 100 },
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);
  // onscrollanimation end
  return (
    <motion.div
      className="row secpad pb-0"
      ref={ref}
      variants={anime}
      initial="hidden"
      animate={control}
    >
      <div className="col-lg-4 col-12 pe-lg-5 pe-0">
        <img src={sandc} alt="" />
        <h2 className="features-head mt-3">
          Safe and <span>Secure</span>
        </h2>
        <p>
        Our feature-packed app is designed with your safety and security in mind, ensuring that your sensitive financial information remains protected at all times.
        </p>
        <img src={fimage} alt="feature" className="w-100 mt-lg-5 mt-3"/>
      </div>
      <div className="col-lg-8 col-12 mt-lg-0 mt-md-5 mt-4">
        <div className="row ">
        <div className="col-xl-6 col-lg-12 col-12">
         <div className="featurs-inner-sec"> <img src={sandc} alt="" />
          <h3>Friendly Billing</h3>
          <p>Our billing application places a strong emphasis on user-friendliness. With a clean and intuitive interface, even users with limited technical expertise can navigate the system effortlessly. Easily create and customize professional-looking invoices, set up recurring billing schedules, and manage your client database seamlessly.
             {/* Enjoy a hassle-free billing experience that saves you time and boosts productivity. */}
             </p></div>
        </div>
        <div className="col-xl-6 col-lg-12 col-12">
         <div className="featurs-inner-sec"> <img src={sandc} alt="" />
          <h3>Payroll Management</h3>
          <p>Efficiently handle payroll processes within the same billing application. Simplify the complexities of calculating wages, deducting taxes, and managing employee records. Seamlessly integrate your billing and payroll systems to streamline financial operations and ensure accurate and timely payments to your team.</p></div>
        </div>
        <div className="col-xl-6 col-lg-12 col-12">
         <div className="featurs-inner-sec"> <img src={sandc} alt="" />
          <h3>Attendance Control</h3>
          <p>Monitor employee attendance and integrate it directly into the billing application. Keep track of work hours, leave requests, and absences in real-time. Gain valuable insights into attendance patterns and use this information to optimize scheduling and resource allocation.</p></div>
        </div>
        <div className="col-xl-6 col-lg-12 col-12">
         <div className="featurs-inner-sec"> <img src={sandc} alt="" />
          <h3>Instant Notification</h3>
          <p>Stay on top of your billing activities with instant notifications. Receive alerts for overdue payments, payment confirmations, and other critical billing events. Never miss a payment deadline or an important update, ensuring a smooth cash flow and improved client satisfaction.</p></div>
        </div>
        <div className="col-xl-12 col-lg-12 col-12">
         <div className="featurs-inner-sec"> <img src={sandc} alt="" />
          <h3>Tracking Income and Expenses</h3>
          <p>Our billing application provides comprehensive tools for tracking income and expenses. Easily record all financial transactions, categorize expenses, and generate insightful reports. Gain a clear understanding of your business's financial health, identify cost-saving opportunities, and make informed decisions.</p></div>
        </div>
        <div className="col-xl-6 col-lg-12 col-12">
         <div className="featurs-inner-sec"> <img src={sandc} alt="" />
          <h3>Automated Backup</h3>
          <p>Protect your valuable billing data with automated backup functionality. Our application securely stores your financial information and performs regular backups to ensure data integrity. Gain peace of mind knowing that your data is safe from unexpected hardware failures or system crashes.</p></div>
        </div>
        <div className="col-xl-6 col-lg-12 col-12">
         <div className="featurs-inner-sec"> <img src={sandc} alt="" />
          <h3>Billing Themes</h3>
          <p>Personalize your invoices and billing documents with customizable themes. Showcase your brand identity by selecting from a range of professionally designed templates or create your own. Enhance customer experience by delivering invoices that reflect your unique style and professionalism.</p></div>
        </div>
        <div className="col-xl-12 col-lg-12 col-12">
         <div className="featurs-inner-sec"> <img src={sandc} alt="" />
          <h3>Item Library</h3>
          <p>Simplify your billing process by creating an item library within the application. Store product or service information, including descriptions, pricing, and stock levels. Quickly add items to invoices, eliminating the need for manual data entry and reducing errors.</p></div>
        </div>
        </div>
        
      </div>
    </motion.div>
  );
}

export default FeaturesSec;
