import React from "react";
import { Helmet } from "react-helmet";
import DownloadSec from "../Components/DownloadSec";
import { motion } from "framer-motion";
import InnerBanner from "../Components/InnerBanner";

function TandC() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.6 } }}
    >
      <Helmet>
        <meta name="description" content="Custom meta description in Pricing" />
        <meta name="keyword" content="Custom meta keyword in Pricing" />
        <title>Zappitech Billing | Terms and Conditions</title>
      </Helmet>
      <InnerBanner />
      <div className="align-items-center secpad pb-0">
      <h2>Terms and Conditions for Zappitech Billing Software Application - Z Market LLP</h2>
      <p className='fw-bolder'>Effective Date: 02 March 2022 </p>
      <p>Please read these Terms and Conditions ("Terms") carefully before accessing or using the Zappitech Billing Software Application ("the Application") provided by Z Market LLP. By accessing or using the Application, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you may not access or use the Application.</p>
      <ol type="number">
        <li>License and Usage:
          <p>Z Market LLP grants you a limited, non-exclusive, non-transferable, and revocable license to use the Application for your internal business purposes, subject to these Terms. You may not sublicense, modify, distribute, reproduce, or create derivative works based on the Application without prior written consent from Z Market LLP.</p>
        </li>
        <li>User Responsibilities:
          <p>You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. You agree to use the Application in compliance with applicable laws, regulations, and these Terms. You shall not engage in any unauthorized use, access, or distribution of the Application.</p>
        </li>
        <li>Intellectual Property:
          <p>All intellectual property rights, including but not limited to copyrights, trademarks, and trade secrets, in the Application and its contents belong to Z Market LLP or its licensors. You may not remove or alter any copyright or other proprietary notices displayed in the Application.</p>
        </li>
        <li>Privacy:
          <p>Your privacy is important to us. By using the Application, you consent to the collection, use, and disclosure of your personal information as described in our Privacy Policy.</p>
        </li>
        <li>Payment and Billing:
          <p>If you choose to subscribe to any paid features or services within the Application, you agree to pay all applicable fees and charges as outlined in the pricing terms. Payments are non-refundable, and Z Market LLP reserves the right to modify the pricing or billing terms with prior notice.</p>
        </li>
        <li>Disclaimer of Warranty:
          <p>The Application is provided on an "as is" and "as available" basis, without warranties of any kind, whether expressed or implied. Z Market LLP does not warrant that the Application will be error-free, uninterrupted, or free of viruses or other harmful components. You agree to use the Application at your own risk.</p>
        </li>
        <li>Limitation of Liability:
          <p>To the maximum extent permitted by applicable law, Z Market LLP and its affiliates, directors, employees, agents, or licensors shall not be liable for any indirect, incidental, consequential, or punitive damages arising out of or in connection with the use of the Application, even if advised of the possibility of such damages.</p>
        </li>
        <li>Indemnification:
          <p>You agree to indemnify, defend, and hold Z Market LLP and its affiliates, directors, employees, agents, or licensors harmless from any claims, losses, liabilities, damages, costs, or expenses, including attorneys' fees, arising out of or related to your use or misuse of the Application, violation of these Terms, or infringement of any third-party rights.</p>
        </li>
        <li>Termination:
          <p>Z Market LLP reserves the right, at its sole discretion, to terminate or suspend your access to the Application, without prior notice, for any reason, including but not limited to violation of these Terms or infringement of intellectual property rights.</p>
        </li>
        <li>Governing Law and Dispute Resolution:
          <p>These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction]. Any dispute arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in [Jurisdiction].</p>
        </li>
        <li>Severability:
          <p>If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect.</p>
        </li>
        <li>Entire Agreement:
          <p>These Terms constitute the entire agreement between you and Z Market LLP regarding the use of the Application and supersede any prior or contemporaneous agreements,</p>
        </li>
      </ol>
      </div>
      <DownloadSec />
    </motion.div>
  );
}

export default TandC;
