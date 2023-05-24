import React from "react";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet";

import "./shop.css";
import ShopifyStore from "../components/shopify-store"

const Shop = (props) => {
    return (
        <div className="shop-container">
            <Helmet>
                <title>Shop - Amber Us</title>
                <meta property="og:title" content="Shop - Amber Us" />
            </Helmet>
            <div className="shop-navbar">
                <header
                    data-role="Header"
                    className="shop-header max-width-container"
                >
                    <script>
                        window.onload = function() {window.scrollTo(0, 0)}
                    </script>
                    <div className="shop-navbar1">
                        <div className="shop-container1"></div>
                        <div className="shop-middle">
                            <div className="shop-left">
                                <Link
                                    to="/shop"
                                    className="shop-text01 navbar-link"
                                >
                                    <span>SHOP</span>
                                </Link>
                                <Link
                                    to="/shipping"
                                    className="shop-text02 navbar-link"
                                >
                                    <span>SHIPPING</span>
                                </Link>
                            </div>
                            <Link to="/" className="shop-navlink">
                                <img
                                    alt="pastedImage"
                                    src="/playground_assets/pastedimage-f4k4-200h.png"
                                    className="shop-pasted-image navbar-logo-title"
                                />
                            </Link>
                            <div className="shop-right">
                                <Link
                                    to="/about-us"
                                    className="shop-text04 navbar-link"
                                >
                                    ABOUT
                                </Link>
                                <Link
                                    to="/contact"
                                    className="shop-text05 navbar-link"
                                >
                                    CONTACT
                                </Link>
                            </div>
                        </div>
                        <div className="shop-icons">
                            

                            
                        </div>
                    </div>
                </header>
            </div>
            <div className="shop-container3">
                <div className="shop-container4">
                    <h3 className="shop-text12">
                        <span className="Heading-3">Store</span>
                        <br></br>
                    </h3>
                </div>

                <div className="shop-text15"><ShopifyStore /></div>
            </div>
            <div className="shop-footer">
                <div className="max-width-container">
                    <footer className="shop-footer1">
                        <div className="shop-container5">
                            <h3 className="shop-text35 Heading-3">Amber Us</h3>
                            <span className="shop-text36">
                                <span>J. Janonio 3</span>
                                <br></br>
                                <span>Palanga, 00133</span>
                                <br></br>
                                <span>Lithuania</span>
                            </span>
                            <span className="shop-text42">
                                <span>info@amber-us.com</span>
                                <br></br>
                            </span>
                        </div>
                        <div className="shop-links-container">
                            <div className="shop-container6">
                                <span className="shop-text45">Categories</span>
                                <span className="shop-text46">Amber With Insects</span>
                                <span className="shop-text47">Prayer Beads</span>
                                <span className="shop-text48">Pendants</span>
                                <span className="shop-text49">Pendants With Insects</span>
                                <span className="shop-text50">Spheres With Insects</span>
                                <span className="shop-text51">Stones</span>
                            </div>
                            <div className="shop-container7">
                                <span className="shop-text52">Company</span>
                                <Link to="/shop" className="shop-navlink1">
                                    Shop
                                </Link>
                                <Link to="/about-us" className="shop-navlink2">
                                    About Us
                                </Link>
                                <Link to="/contact" className="shop-navlink3">
                                    Contacts
                                </Link>
                            </div>
                            <div className="shop-container8">
                                <span className="shop-text54">Policies</span>
                                <span className="shop-text55">
                                    <Link
                                        to="/shipping"
                                        className="shop-navlink4"
                                    >
                                        Shipping
                                    </Link>
                                </span>
                                <span className="shop-text58">
                                    <Link
                                        to="/return-policy"
                                        className="shop-navlink5"
                                    >
                                        Return Policy
                                    </Link>
                                </span>
                                <span className="shop-text64">
                                    <Link to="/Terms_Of_Service" className="shop-navlink6">
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

export default Shop;
