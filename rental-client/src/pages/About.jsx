import React from "react";
import { SectionTitle } from "../components";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <SectionTitle title="About Us" path="Home | About" />
      <div className="about-content text-center max-w-2xl mx-auto mt-5">
      <h2 className="text-6xl text-center mb-10 max-sm:text-3xl text-accent-content">We love our customers!</h2>
      <p className="text-lg text-center max-sm:text-sm max-sm:px-2 text-accent-content">
      Welcome to IM Tools Rental, where our passion lies in serving you, our valued customer. We understand the importance of reliable tools for your projects, and that's why we're dedicated to providing top-notch equipment and exceptional service.
      <br></br><br></br>
At IM Tools Rental, we strive to make your rental experience as seamless as possible. Whether you're a seasoned professional or a DIY enthusiast, we have the perfect tools to meet your needs. Our commitment to quality means you can trust in the performance and reliability of every item in our inventory.
<br></br><br></br>
We believe in building lasting relationships with our customers, which is why your satisfaction is our top priority. From start to finish, we're here to support you every step of the way. Discover the difference with IM Tools Rental and let us help you bring your projects to life."
      </p>
      <Link to="/contact" className="btn btn-wide bg-blue-600 hover:bg-blue-500 text-white mt-5">Contact Us</Link>
      </div>
    </div>
  );
};

export default About;
