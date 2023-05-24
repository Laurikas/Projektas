import React from "react";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet";

import "./about-us.css";

const AboutUs = (props) => {
  return (
    <div className="about-us-container">
      <Helmet>
        <title>About-Us - Amber Us</title>
        <meta property="og:title" content="About-Us - Amber Us" />
      </Helmet>
      <div className="about-us-navbar">
        <header
          data-role="Header"
          className="about-us-header max-width-container"
        >
          <script>window.onload = function() {window.scrollTo(0, 0)}</script>
          <div className="about-us-navbar1">
            <div className="about-us-container1"></div>
            <div className="about-us-middle">
              <div className="about-us-left">
                <Link to="/shop" className="about-us-text01 navbar-link">
                  <span>SHOP</span>
                </Link>
                <Link to="/shipping" className="about-us-text02 navbar-link">
                  <span>SHIPPING</span>
                </Link>
              </div>
              <Link to="/" className="about-us-navlink">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-f4k4-200h.png"
                  className="about-us-pasted-image navbar-logo-title"
                />
              </Link>
              <div className="about-us-right">
                <Link to="/about-us" className="about-us-text04 navbar-link">
                  ABOUT
                </Link>
                <Link to="/contact" className="about-us-text05 navbar-link">
                  CONTACT
                </Link>
              </div>
            </div>
            <div className="about-us-icons">
              

              
            </div>
          </div>
        </header>
      </div>
      <div className="about-us-container3">
        <div className="about-us-container4">
          <h3 className="about-us-text12 Heading-3">About Us</h3>
        </div>
        <span className="about-us-text13">
            Amber-us is manufacturing company from Lithuania. The company was
            established in 1995 as a family business and since then gained a lot
            of experience and trust from the clients and partners.
            <br/>
            <br/>
            We offer various product range from amber jewelry to business gifts
            and every year new products with unique design are added to our
            product list.
            <br/>
            <br/>
            <br/>
            All products on our shop were carefully designed and handcrafted by
            amber-us in our workshop in Palanga right on the edge of the Baltic
            sea.
            <br/>
            <br/>
            All products are made from the highest quality, authentic Baltic
            amber, therefore all of them are certified by Palanga Amber Master’s
            Guild and Klaipeda Chamber of Commerce, Industry and Crafts.
        </span>
      </div>
      <div className="about-us-footer">
        <div className="max-width-container">
          <footer className="about-us-footer1">
            <div className="about-us-container5">
              <h3 className="about-us-text21 Heading-3">Amber Us</h3>
              <span className="about-us-text22">
                <span>J. Janonio 3</span>
                <br></br>
                <span>Palanga, 00133</span>
                <br></br>
                <span>Lithuania</span>
              </span>
              <span className="about-us-text28">
                <span>info@amber-us.com</span>
                <br></br>
              </span>
            </div>
            <div className="about-us-links-container">
              <div className="about-us-container6">
                <span className="about-us-text31">Categories</span>
                <span className="about-us-text32">Amber With Insects</span>
                <span className="about-us-text33">Prayer Beads</span>
                <span className="about-us-text34">Pendants</span>
                <span className="about-us-text35">Pendants With Insects</span>
                <span className="about-us-text36">Spheres With Insects</span>
                <span className="about-us-text37">Stones</span>
              </div>
              <div className="about-us-container7">
                <span className="about-us-text38">Company</span>
                <Link to="/shop" className="about-us-navlink1">
                  <span>Shop</span>
                </Link>
                <Link to="/about-us" className="about-us-navlink2">
                  <span>About Us</span>
                </Link>
                <Link to="/contact" className="about-us-navlink3">
                  <span>Contacts</span>
                </Link>
              </div>
              <div className="about-us-container8">
                <span className="about-us-text42">Policies</span>
                <Link to="/shipping" className="about-us-navlink4">
                  <span>Shipping</span>
                </Link>
                <Link to="/return-policy" className="about-us-navlink5">
                  <span>Return Policy</span>
                </Link>
                <Link to="/Terms_Of_Service" className="about-us-navlink6">
                  <span>Terms Of Services</span>
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
