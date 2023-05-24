import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Amber Us</title>
        <meta property="og:title" content="Contact - Amber Us" />
      </Helmet>
      <div className="contact-navbar">
        <header
          data-role="Header"
          className="contact-header max-width-container"
        >
          <script>
          window.onload = function() {
          window.scrollTo(0,0)
          }
          </script>
          <div className="contact-navbar1">
            <div className="contact-container1">
            </div>
            <div className="contact-middle">
              <div className="contact-left">
              <Link to="/shop" className="contact-text01 navbar-link">
                  <span>SHOP</span>
                </Link>
                <Link to="/shipping" className="contact-text02 navbar-link">
                  <span>SHIPPING</span>
                </Link>
              </div>
              <Link to="/" className="contact-navlink">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-f4k4-200h.png"
                  className="contact-pasted-image navbar-logo-title"
                />
              </Link>
              <div className="contact-right">
                <Link to="/about-us" className="contact-text04 navbar-link">
                  ABOUT
                </Link>
                <Link to="/contact" className="contact-text05 navbar-link">
                  CONTACT
                </Link>
              </div>
            </div>
            <div className="contact-icons">
              

              
            </div>
          </div>
        </header>
      </div>
      <div className="contact-container3">
        <div className="contact-container4">
          <h3 className="contact-text12">
            <span className="Heading-3">Contacts</span>
            <br/>
          </h3>
        </div>
        <span className="contact-text15">
            Our company offers custom orders as well. We are able to brand the
            business gifts with your company logo engraved next to the amber
            mosaic.
          <br/>
          <br/>
            What is more, we can make special size or length amber jewelry which
            would suit your needs.
          <br/>
          <br/>
          <br/>
            If you are interested in wholesale prices or have any questions
            about the products please do not hesitate to contact us.
          <br/>
          <br/>
          Our email:
          <br/>
          &nbsp; &nbsp;info@amber-us.com
          <br/>
          Our address:
          <br/>
          &nbsp; &nbsp;J. Janonio 3
          <br/>
          &nbsp; &nbsp;Palanga, 00133
          <br/>
          &nbsp; &nbsp;Lithuania
        </span>
      </div>
      <div className="contact-footer">
        <div className="max-width-container">
          <footer className="contact-footer1">
            <div className="contact-container5">
              <h3 className="contact-text35 Heading-3">Amber Us</h3>
              <span className="contact-text36">
                <span>J. Janonio 3</span>
                <br></br>
                <span>Palanga, 00133</span>
                <br></br>
                <span>Lithuania</span>
              </span>
              <span className="contact-text42">
                <span>info@amber-us.com</span>
                <br></br>
              </span>
            </div>
            <div className="contact-links-container">
              <div className="contact-container6">
                <span className="contact-text45">Categories</span>
                <span className="contact-text46">Amber With Insects</span>
                <span className="contact-text47">Prayer Beads</span>
                <span className="contact-text48">Pendants</span>
                <span className="contact-text49">Pendants With Insects</span>
                <span className="contact-text50">Spheres With Insects</span>
                <span className="contact-text51">Stones</span>
              </div>
              <div className="contact-container7">
                                <span className="contact-text52">
                                    Company
                                </span>
                                <Link
                                    to="/shop"
                                    className="contact-navlink1"
                                >
                                    <span>Shop</span>
                                </Link>
                                <Link
                                    to="/about-us"
                                    className="contact-navlink2"
                                >
                                    <span>About Us</span>
                                </Link>
                                <Link
                                    to="/contact"
                                    className="contact-navlink3"
                                >
                                    <span>Contacts</span>
                                </Link>
                            </div>
                            <div className="contact-container8">
                                <span className="contact-text56">
                                    Policies
                                </span>
                                <Link
                                    to="/shipping"
                                    className="contact-navlink4"
                                >
                                    <span>Shipping</span>
                                </Link>
                                <Link
                                    to="/return-policy"
                                    className="contact-navlink5"
                                >
                                    <span>Return Policy</span>
                                </Link>
                                <Link
                                    to="/Terms_Of_Service"
                                    className="contact-navlink6"
                                >
                                    <span>Terms Of Services</span>
                                </Link>
                            </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Contact
