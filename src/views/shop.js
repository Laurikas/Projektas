import React from "react";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet";
import PastedImg from '../playground_assets/pastedimage-f4k4-200h.png'

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
                                    src={PastedImg}
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
                            <img
                                alt="iconsbxscart3271299"
                                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTIxLjgyMiA3LjQzMUMyMS42MzUgNy4xNjEgMjEuMzI4IDcgMjEgN0g3LjMzM0w2LjE3OSA0LjIzQzUuODY3IDMuNDgyIDUuMTQzIDMgNC4zMzMgM0gyVjVINC4zMzNMOS4wNzcgMTYuMzg1QzkuMjMyIDE2Ljc1NyA5LjU5NiAxNyAxMCAxN0gxOEMxOC40MTcgMTcgMTguNzkgMTYuNzQxIDE4LjkzNyAxNi4zNTJMMjEuOTM3IDguMzUyQzIyLjA1MiA4LjA0NCAyMi4wMDkgNy43IDIxLjgyMiA3LjQzMVonIGZpbGw9JyMxNjE2MTYnLz4KPHBhdGggZD0nTTEwLjUgMjFDMTEuMzI4NCAyMSAxMiAyMC4zMjg0IDEyIDE5LjVDMTIgMTguNjcxNiAxMS4zMjg0IDE4IDEwLjUgMThDOS42NzE1NyAxOCA5IDE4LjY3MTYgOSAxOS41QzkgMjAuMzI4NCA5LjY3MTU3IDIxIDEwLjUgMjFaJyBmaWxsPScjMTYxNjE2Jy8+CjxwYXRoIGQ9J00xNy41IDIxQzE4LjMyODQgMjEgMTkgMjAuMzI4NCAxOSAxOS41QzE5IDE4LjY3MTYgMTguMzI4NCAxOCAxNy41IDE4QzE2LjY3MTYgMTggMTYgMTguNjcxNiAxNiAxOS41QzE2IDIwLjMyODQgMTYuNjcxNiAyMSAxNy41IDIxWicgZmlsbD0nIzE2MTYxNicvPgo8L3N2Zz4K"
                                className="shop-image1"
                            />
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
