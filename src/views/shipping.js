import React from "react";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet";

import "./shipping.css";

const Shipping = (props) => {
    return (
        <div className="shipping-container">
            <Helmet>
                <title>Shipping - Amber Us</title>
                <meta property="og:title" content="Shipping - Amber Us" />
            </Helmet>
            <div className="shipping-navbar">
                <header
                    data-role="Header"
                    className="shipping-header max-width-container"
                >
                    <script>
                        window.onload = function() {window.scrollTo(0, 0)}
                    </script>
                    <div className="shipping-navbar1">
                        <div className="shipping-container1"></div>
                        <div className="shipping-middle">
                            <div className="shipping-left">
                                <Link
                                    to="/shop"
                                    className="shipping-text01 navbar-link"
                                >
                                    <span>SHOP</span>
                                </Link>
                                <Link
                                    to="/shipping"
                                    className="shipping-text02 navbar-link"
                                >
                                    <span>SHIPPING</span>
                                </Link>
                            </div>
                            <Link to="/" className="shipping-navlink">
                                <img
                                    alt="pastedImage"
                                    src="/playground_assets/pastedimage-f4k4-200h.png"
                                    className="shipping-pasted-image navbar-logo-title"
                                />
                            </Link>
                            <div className="shipping-right">
                                <Link
                                    to="/about-us"
                                    className="shipping-text04 navbar-link"
                                >
                                    ABOUT
                                </Link>
                                <Link
                                    to="/contact"
                                    className="shipping-text05 navbar-link"
                                >
                                    CONTACT
                                </Link>
                            </div>
                        </div>
                        <div className="shipping-icons">
                            

                            
                        </div>
                    </div>
                </header>
            </div>
            <div className="shipping-container3">
                <div className="shipping-container4">
                    <h3 className="shipping-text12">
                        <span className="Heading-3">Shipping</span>
                        <br></br>
                    </h3>
                </div>
                <span className="shipping-text15">
                        Amber-Us provides FREE standard worldwide shipping for
                        dog necklaces with a next business day dispatch using
                        Lithuanian postal service.
                        <br/>
                        <br/>
                        Estimated delivery to EU countries*: 5 – 7 working days
                        from shipment
                        <br/>
                        Estimated worldwide delivery*: 10 – 14 working days from
                        shipment
                        <br/>
                        <br/>
                        You will receive a tracking number when the order is
                        dispatched.
                        <br/>
                        <br/>
                        <em>
                            These estimates do not account for delays caused by
                            unexpected deliveryservice disruptions or force
                            major events.
                        </em>
                        <br/>
                        <br/>
                        For larger orders we use UPS as fast worldwide delivery
                        for additional fee.
                        <br/>
                        &nbsp; &nbsp; * Estimated fast worldwide delivery: up to 3 working days
                        from shipment
                </span>
            </div>
            <div className="shipping-footer">
                <div className="max-width-container">
                    <footer className="shipping-footer1">
                        <div className="shipping-container5">
                            <h3 className="shipping-text35 Heading-3">
                                Amber Us
                            </h3>
                            <span className="shipping-text36">
                                <span>J. Janonio 3</span>
                                <br></br>
                                <span>Palanga, 00133</span>
                                <br></br>
                                <span>Lithuania</span>
                            </span>
                            <span className="shipping-text42">
                                <span>info@amber-us.com</span>
                                <br></br>
                            </span>
                        </div>
                        <div className="shipping-links-container">
                            <div className="shipping-container6">
                                <span className="shipping-text45">
                                    Categories
                                </span>
                                <span className="shipping-text46">
                                    Amber With Insects
                                </span>
                                <span className="shipping-text47">
                                    Prayer Beads
                                </span>
                                <span className="shipping-text48">
                                    Pendants
                                </span>
                                <span className="shipping-text49">
                                    Pendants With Insects
                                </span>
                                <span className="shipping-text50">
                                    Spheres With Insects
                                </span>
                                <span className="shipping-text51">Stones</span>
                            </div>
                            <div className="shipping-container7">
                                <span className="shipping-text52">Company</span>
                                <Link to="/shop" className="shipping-navlink1">
                                    Shop
                                </Link>
                                <Link
                                    to="/about-us"
                                    className="shipping-navlink2"
                                >
                                    About Us
                                </Link>
                                <Link
                                    to="/contact"
                                    className="shipping-navlink3"
                                >
                                    Contacts
                                </Link>
                            </div>
                            <div className="shipping-container8">
                                <span className="shipping-text54">
                                    Policies
                                </span>
                                <span className="shipping-text55">
                                    <Link
                                        to="/shipping"
                                        className="shipping-navlink4"
                                    >
                                        Shipping
                                    </Link>
                                </span>
                                <span className="shipping-text58">
                                    <Link
                                        to="/return-policy"
                                        className="shipping-navlink5"
                                    >
                                        Return Policy
                                    </Link>
                                </span>
                                <span className="shipping-text64">
                                    <Link
                                        to="/Terms_Of_Service"
                                        className="shipping-navlink6"
                                    >
                                        Terms Of Services
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Shipping;
