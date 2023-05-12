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
                            <img
                                alt="iconsbxscart3271299"
                                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTIxLjgyMiA3LjQzMUMyMS42MzUgNy4xNjEgMjEuMzI4IDcgMjEgN0g3LjMzM0w2LjE3OSA0LjIzQzUuODY3IDMuNDgyIDUuMTQzIDMgNC4zMzMgM0gyVjVINC4zMzNMOS4wNzcgMTYuMzg1QzkuMjMyIDE2Ljc1NyA5LjU5NiAxNyAxMCAxN0gxOEMxOC40MTcgMTcgMTguNzkgMTYuNzQxIDE4LjkzNyAxNi4zNTJMMjEuOTM3IDguMzUyQzIyLjA1MiA4LjA0NCAyMi4wMDkgNy43IDIxLjgyMiA3LjQzMVonIGZpbGw9JyMxNjE2MTYnLz4KPHBhdGggZD0nTTEwLjUgMjFDMTEuMzI4NCAyMSAxMiAyMC4zMjg0IDEyIDE5LjVDMTIgMTguNjcxNiAxMS4zMjg0IDE4IDEwLjUgMThDOS42NzE1NyAxOCA5IDE4LjY3MTYgOSAxOS41QzkgMjAuMzI4NCA5LjY3MTU3IDIxIDEwLjUgMjFaJyBmaWxsPScjMTYxNjE2Jy8+CjxwYXRoIGQ9J00xNy41IDIxQzE4LjMyODQgMjEgMTkgMjAuMzI4NCAxOSAxOS41QzE5IDE4LjY3MTYgMTguMzI4NCAxOCAxNy41IDE4QzE2LjY3MTYgMTggMTYgMTguNjcxNiAxNiAxOS41QzE2IDIwLjMyODQgMTYuNjcxNiAyMSAxNy41IDIxWicgZmlsbD0nIzE2MTYxNicvPgo8L3N2Zz4K"
                                className="shipping-image1"
                            />
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
