import React from "react";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet";
import PastedImg from '../playground_assets/pastedimage-f4k4-200h.png'

import "./return-policy.css";

const Return = (props) => {
    return (
        <div className="return-policy-container">
            <Helmet>
                <title>Return Policy - Amber Us</title>
                <meta property="og:title" content="Contact - Amber Us" />
            </Helmet>
            <div className="return-policy-navbar">
                <header
                    data-role="Header"
                    className="return-policy-header max-width-container"
                >
                    <script>
                        window.onload = function() {window.scrollTo(0, 0)}
                    </script>
                    <div className="return-policy-navbar1">
                        <div className="return-policy-container1"></div>
                        <div className="return-policy-middle">
                            <div className="return-policy-left">
                                <Link
                                    to="/shop"
                                    className="return-policy-text01 navbar-link"
                                >
                                    <span>SHOP</span>
                                </Link>
                                <Link
                                    to="/shipping"
                                    className="return-policy-text02 navbar-link"
                                >
                                    <span>SHIPPING</span>
                                </Link>
                            </div>
                            <Link to="/" className="return-policy-navlink">
                                <img
                                    alt="pastedImage"
                                    src={PastedImg}
                                    className="return-policy-pasted-image navbar-logo-title"
                                />
                            </Link>
                            <div className="return-policy-right">
                                <Link
                                    to="/about-us"
                                    className="return-policy-text04 navbar-link"
                                >
                                    ABOUT
                                </Link>
                                <Link
                                    to="/contact"
                                    className="return-policy-text05 navbar-link"
                                >
                                    CONTACT
                                </Link>
                            </div>
                        </div>
                        <div className="return-policy-icons">
                            <img
                                alt="iconsbxscart3271299"
                                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTIxLjgyMiA3LjQzMUMyMS42MzUgNy4xNjEgMjEuMzI4IDcgMjEgN0g3LjMzM0w2LjE3OSA0LjIzQzUuODY3IDMuNDgyIDUuMTQzIDMgNC4zMzMgM0gyVjVINC4zMzNMOS4wNzcgMTYuMzg1QzkuMjMyIDE2Ljc1NyA5LjU5NiAxNyAxMCAxN0gxOEMxOC40MTcgMTcgMTguNzkgMTYuNzQxIDE4LjkzNyAxNi4zNTJMMjEuOTM3IDguMzUyQzIyLjA1MiA4LjA0NCAyMi4wMDkgNy43IDIxLjgyMiA3LjQzMVonIGZpbGw9JyMxNjE2MTYnLz4KPHBhdGggZD0nTTEwLjUgMjFDMTEuMzI4NCAyMSAxMiAyMC4zMjg0IDEyIDE5LjVDMTIgMTguNjcxNiAxMS4zMjg0IDE4IDEwLjUgMThDOS42NzE1NyAxOCA5IDE4LjY3MTYgOSAxOS41QzkgMjAuMzI4NCA5LjY3MTU3IDIxIDEwLjUgMjFaJyBmaWxsPScjMTYxNjE2Jy8+CjxwYXRoIGQ9J00xNy41IDIxQzE4LjMyODQgMjEgMTkgMjAuMzI4NCAxOSAxOS41QzE5IDE4LjY3MTYgMTguMzI4NCAxOCAxNy41IDE4QzE2LjY3MTYgMTggMTYgMTguNjcxNiAxNiAxOS41QzE2IDIwLjMyODQgMTYuNjcxNiAyMSAxNy41IDIxWicgZmlsbD0nIzE2MTYxNicvPgo8L3N2Zz4K"
                                className="return-policy-image1"
                            />
                        </div>
                    </div>
                </header>
            </div>
            <div className="return-policy-container3">
                <div className="return-policy-container4">
                    <h3 className="return-policy-text12">
                        <span className="Heading-3">Shipping and Return</span>
                    </h3>
                </div>
                <span className="return-policy-text15">
                    <span>
                        <strong>Shipping</strong>
                        <br/>
                        <br/>
                        Our goal is to offer you the best shipping options, no matter where you live. Every day, we deliver to many customers across the world, ensuring that we provide the very highest levels of responsiveness to you at all times.
                        <br/>
                        <br/>
                        The time frame for order delivery is divided into two parts:
                        <br/>
                        Processing time: Order verification, tailoring, quality check and packaging. All orders are sent within 24 hours after the order is placed. The Lithuanian Post process the orders, which takes an additional 1–2 days. Shipping time: This refers to the time it takes for items to be hipped from our warehouse to the destination. All orders are shipped by Lithuanian Postal Service. European delivery usually takes about 5–14 business days depending on the season. The rest of International orders takes between 10 and 30 days to arrive at their destination but can take longer from time to time. If you have any question regarding the delivery, please contact us info@amber-us.com.
                        <br/>
                        <br/>
                        <br/>
                        <strong>Return Policy</strong>
                        <br/>
                        <br/>
                        Our policy lasts 14 days. If 14 days have gone by since your purchase, unfortunately we can’t offer you a refund or exchange.
                        <br/>
                        <br/>
                        To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.
                        <br/>
                        <br/>
                        To complete your return, we require a receipt or proof of purchase.
                        <br/>
                        <br/>
                        There are certain situations where only partial refunds are granted: (if applicable)
                        <br/>
                        <br/>
                        * Product with obvious signs of use
                        <br/>
                        <br/>
                        * Any item not in its original condition, is damaged or missing parts for reasons not due to our error.
                        <br/>
                        <br/>
                        * Any item that is returned more than 14 days after delivery
                        <br/>
                        <br/>
                        <br/>
                        <strong>Refunds (if applicable)</strong>
                        <br/>
                        <br/>
                        Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.
                        <br/>
                        <br/>
                        If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.
                        <br/>
                        <br/>
                        <br/>
                        <strong>Late or missing refunds (if applicable)</strong>
                        <br/>
                        <br/>
                        If you haven’t received a refund yet, first check your bank account again.
                        <br/>
                        <br/>
                        Then contact your credit card company, it may take some time before your refund is officially posted.
                        <br/>
                        <br/>
                        Next contact your bank. There is often some processing time before a refund is posted.
                        <br/>
                        <br/>
                        If you’ve done all of this and you still have not received your refund yet, please contact us at info@amber-us.com.
                        <br/>
                        <br/>
                        <br/>
                        <strong>Sale items (if applicable)</strong>
                        <br/>
                        <br/>
                        Only regular priced items may be refunded, unfortunately sale items cannot be refunded.
                        <br/>
                        <br/>
                        <br/>
                        <strong>Exchanges (if applicable)</strong>
                        <br/>
                        <br/>
                        We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at info@amber-us.com and send your item to: J.Janonio 3, Palanga, 00133, Lithuania.
                        <br/>
                        <br/>
                        <br/>
                        <strong>Gifts</strong>
                        <br/>
                        <br/>
                        If the item was marked as a gift when purchased and shipped directly to you, you’ll receive a gift credit for the value of your return. Once the returned item is received, a gift certificate will be mailed to you.
                        <br/>
                        <br/>
                        If the item wasn’t marked as a gift when purchased, or the gift giver had the order shipped to themselves to give to you later, we will send a refund to the gift giver and he will find out about your return.
                        <br/>
                        <br/>
                        <br/>
                        <strong>Return</strong>
                        <br/>
                        <br/>
                        To return your product, you should mail your product to: J.Janonio 3, Palanga, 00133, Lithuania.
                        <br/>
                        <br/>
                        You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
                        <br/>
                        <br/>
                        Depending on where you live, the time it may take for your exchanged product to reach you, may vary.
                        <br/>
                        <br/>
                        If you are shipping an item over 50 EUR, you should consider using a trackable shipping service or purchasing shipping insurance. We don’t guarantee that we will receive your returned item.
                    </span>
                </span>
            </div>
            <div className="return-policy-footer">
                <div className="max-width-container">
                    <footer className="return-policy-footer1">
                        <div className="return-policy-container5">
                            <h3 className="return-policy-text35 Heading-3">
                                Amber Us
                            </h3>
                            <span className="return-policy-text36">
                                <span>J. Janonio 3</span>
                                <br></br>
                                <span>Palanga, 00133</span>
                                <br></br>
                                <span>Lithuania</span>
                            </span>
                            <span className="return-policy-text42">
                                <span>info@amber-us.com</span>
                                <br></br>
                            </span>
                        </div>
                        <div className="return-policy-links-container">
                            <div className="return-policy-container6">
                                <span className="return-policy-text45">
                                    Categories
                                </span>
                                <span className="return-policy-text46">
                                    Amber With Insects
                                </span>
                                <span className="return-policy-text47">
                                    Prayer Beads
                                </span>
                                <span className="return-policy-text48">
                                    Pendants
                                </span>
                                <span className="return-policy-text49">
                                    Pendants With Insects
                                </span>
                                <span className="return-policy-text50">
                                    Spheres With Insects
                                </span>
                                <span className="return-policy-text51">
                                    Stones
                                </span>
                            </div>
                            <div className="return-policy-container7">
                                <span className="return-policy-text52">
                                    Company
                                </span>
                                <Link
                                    to="/shop"
                                    className="return-policy-navlink1"
                                >
                                    <span>Shop</span>
                                </Link>
                                <Link
                                    to="/about-us"
                                    className="return-policy-navlink2"
                                >
                                    <span>About Us</span>
                                </Link>
                                <Link
                                    to="/contact"
                                    className="return-policy-navlink3"
                                >
                                    <span>Contacts</span>
                                </Link>
                            </div>
                            <div className="return-policy-container8">
                                <span className="return-policy-text56">
                                    Policies
                                </span>
                                <Link
                                    to="/shipping"
                                    className="return-policy-navlink4"
                                >
                                    <span>Shipping</span>
                                </Link>
                                <Link
                                    to="/return-policy"
                                    className="return-policy-navlink5"
                                >
                                    <span>Return Policy</span>
                                </Link>
                                <Link
                                    to="/Terms_Of_Service"
                                    className="return-policy-navlink6"
                                >
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

export default Return;
