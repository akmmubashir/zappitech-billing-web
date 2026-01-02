import React from 'react'
import { Helmet } from "react-helmet";
import DownloadSec from "../Components/DownloadSec";
import { motion } from "framer-motion";
import InnerBanner from '../Components/InnerBanner';

function PrivacyPolicy() {
  return (
    <motion.div
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    exit={{ x: window.innerWidth, transition: { duration: 0.6 } }}
  >
    <Helmet>
      <meta name="description" content="Custom meta description in Pricing" />
      <meta name="keyword" content="Custom meta keyword in Pricing" />
      <title>Zappitech Billing | Privacy Policy</title>
    </Helmet>
    <InnerBanner />
   <div className='align-items-center secpad pb-0'>
    <h2 className='fw-bold'>Privacy Policy for Zappitech Billing Software Application - Z Market LLP</h2>
    <p className='fw-bolder'>Effective Date: 02 March 2022 </p>
    <p>At Z Market LLP, we are committed to protecting the privacy and security of our users' personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard the data collected through our Zappitech Billing Software Application ("the Application"). By accessing or using our Application, you consent to the terms of this Privacy Policy. Please read this document carefully to understand our practices regarding your personal information.</p>
    <ol type='number'>
      <li className='mb-3'>Information We Collect:
        <p>We may collect certain personal information when you use our Zappitech Billing Software Application. The types of information we collect include:</p>
        <ul>
          <li>Contact information (such as name, email address, phone number, and company name)</li>
          <li>Billing and payment details</li>
<li>User preferences and settings</li>
<li>Usage data and analytics related to your interaction with the Application</li>
<li>Device information (including IP address, browser type, operating system, and device identifiers)</li>
<li>Any other information you voluntarily provide to us when using the Application
</li>
        </ul>
      </li>
      <li className='mb-3'>
      Use of Information:
<p>We use the collected information for the following purposes:</p>
<ul>
<li>Providing and improving the functionality and features of the Zappitech Billing Software Application</li>
<li>Personalizing and customizing user experience</li>
<li>Processing payments and managing billing activities</li>
<li>Communicating with users, including responding to inquiries and providing support</li>
<li>Analyzing usage patterns and trends to enhance the Application's performance</li>
<li>Sending updates, promotional materials, and other relevant communications related to the Application</li>
<li>Enforcing our terms and conditions, and protecting the rights and safety of Z Market LLP, our users, and others</li>
</ul>
      </li>
      <li className='pb-3'>
Data Sharing and Disclosure:
<p>We may share your personal information in the following circumstances:</p>
<ul>
  <li>With third-party service providers who assist us in operating and managing the Application (e.g., hosting providers, payment processors) in accordance with contractual obligations and applicable data protection laws.</li>
  <li>When required by law, such as responding to legal requests or complying with legal obligations.</li>
  <li>In connection with a merger, acquisition, or other business transaction involving Z Market LLP, where personal information may be transferred as part of the assets.</li>
</ul>
      </li>
      <li className='mb-3'>
    Data Security:
<p>We prioritize the security of your personal information and implement appropriate measures to safeguard it. However, please be aware that no transmission over the internet or electronic storage method is 100% secure, and we cannot guarantee absolute security. We recommend using strong passwords and taking necessary precautions when accessing the Application.</p>
      </li>
      <li className='mb-3'>
      Data Retention:
<p>We retain personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Upon request or termination of your account, we will delete or anonymize your personal information, subject to any legal obligations.</p>
      </li>
      <li className='mb-3'>
      Your Rights:
<p>You have certain rights regarding your personal information. You may access, update, correct, or request the deletion of your personal information by contacting us using the information provided below. Please note that we may require certain information to verify your identity before processing such requests.</p>
      </li>
      <li className='mb-3'>
      Updates to this Privacy Policy:
<p>We may update this Privacy Policy from time to time. Any changes will be posted on our website or communicated through the Application. Your continued use of the Zappitech Billing Software Application following the posting of changes constitutes your acceptance of such changes.
</p>
      </li>
      <li className='mb-3'>
      Contact Us:
<p>If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:
  <br />
  <br />
Z Market LLP
<br />
kmscaoffice@gmail.com
<br />
+91 7510 488 050
</p>
      </li>
    </ol>
    <p className='fw-bolder'>
Please note that any communications regarding privacy matters should be directed to the provided contact information.
</p>
<p>
<span className='fw-bolder'>Conclusion:</span><br/>
At Z Market LLP, we value your privacy and strive to protect your personal information. By using our Zappitech Billing Software Application, you acknowledge and consent to the collection, use, and disclosure practices described</p>
   </div>
    <DownloadSec />
  </motion.div>
  )
}

export default PrivacyPolicy