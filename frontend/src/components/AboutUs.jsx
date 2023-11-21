import React from 'react';
import './css/AboutUs.css'; // Import the CSS file
import NavBar from "./NavBar";
const AboutUs = () => {
  return (
    <>
      <NavBar home="Home" status="Status" aboutus="About Us" login="Login"/>
      <div className="about-us section">
        <h2 className="heading-primary">About Us</h2>
        <p className="paragraph">
          Welcome to our Variable Rate Irrigation (VRI) system! We are dedicated to providing innovative
          solutions for optimizing irrigation practices to enhance crop yields and conserve water resources.
        </p>
        <p className="paragraph">
          Our VRI system leverages cutting-edge technology to dynamically adjust irrigation rates based on
          field variability, ensuring that each area of your field receives the right amount of water.
        </p>
        <h3 className="heading-secondary">Key Features</h3>
        <ul className="list">
          <li className="list-item">Smart Sensors: Our system utilizes advanced sensors to collect real-time data on soil moisture, weather conditions, and crop health.</li>
          <li className="list-item">Precision Control: Achieve precise control over irrigation rates at a granular level, maximizing efficiency and minimizing water wastage.</li>
          <li className="list-item">Data Analytics: Harness the power of data analytics to make informed decisions, optimize resource allocation, and improve overall farm management.</li>
          <li className="list-item">User-Friendly Interface: Our intuitive interface allows users to easily monitor and control the VRI system, ensuring a seamless user experience.</li>
        </ul>
        <h3 className="heading-secondary">Our Mission</h3>
        <p className="paragraph">
          Our mission is to revolutionize agriculture by providing farmers with sustainable and efficient irrigation solutions.
          We are committed to helping farmers increase their productivity while promoting responsible water usage and environmental stewardship.
        </p>
        <h3 className="heading-secondary">Contact Us</h3>
        <p className="paragraph contact-info">
          Have questions or need support? Feel free to reach out to us at <a href="mailto:support@vri.com" className="link">support@vri.com</a>.
        </p>
      </div>
    </>
  );
};

export default AboutUs;
