import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import SectionHeading from '../components/section-heading'
import CategoryCard from '../components/category-card'
import ItemCard from '../components/item-card'
import './home.css'


const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Amber Us</title>
        <meta property="og:title" content="Amber Us" />
      </Helmet>
      <div className="home-navbar">
        <header data-role="Header" className="home-header max-width-container">
        <script>
        window.onload = function() {
        window.scrollTo(0,0)
        }
        </script>
          <div className="home-container01">
            <div className="home-navbar1">
              <div className="home-container02">
              </div>
              <div className="home-middle">
                <div className="home-left">
                  <Link to="/shop" className="home-text navbar-link">
                    <span>SHOP</span>
                    <br></br>
                  </Link>
                  <Link to="/shipping" className="home-text03 navbar-link">
                    <span>SHIPPING</span>
                    <br></br>
                  </Link>
                </div>
                <Link to="/" className="home-navlink">
                  <img
                    alt="pastedImage"
                    src="/playground_assets/pastedimage-f4k4-200h.png"
                    className="home-pasted-image navbar-logo-title"
                  />
                </Link>
                <div className="home-right">
                  <Link to="/about-us" className="home-text06 navbar-link">
                    ABOUT
                  </Link>
                  <Link to="/contact" className="home-text07 navbar-link">
                    CONTACT
                  </Link>
                </div>
              </div>
              <div className="home-icons">
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className="home-main">
        <div className="home-hero">
          <h1 className="home-text14">
            <span>Natural Baltic Amber Products</span>
            <br></br>
          </h1>
          <button className="home-button button">
            <span>
              <span className="home-text18">Shop Now</span>
              <br></br>
            </span>
          </button>
        </div>
        <div className="section-container column">
          <div className="max-width-container">
            <SectionHeading
              heading="SHOP BY CATEGORIES"
              subtitle="Start shopping based on the categories you are interested in"
            ></SectionHeading>
            <div className="home-cards-container">
              <CategoryCard
                name="Amber With Insects"
                category_img="/playground_assets/amber%20with%20insects-1500w.png"
              ></CategoryCard>
              <CategoryCard
                name="Prayer Beads"
                category_img="/playground_assets/prayer%20beads-1500w.jpg"
              ></CategoryCard>
              <CategoryCard
                name="Pendants"
                category_img="/playground_assets/pendant-1500w.jpg"
              ></CategoryCard>
              <CategoryCard
                name="Pendants With Insects"
                category_img="/playground_assets/pendant%20insect-1500w.jpg"
              ></CategoryCard>
              <CategoryCard
                name="Spheres With Insects"
                category_img="/playground_assets/sphere%20with%20insect-1500w.jpg"
              ></CategoryCard>
              <CategoryCard
                name="Stones"
                category_img="/playground_assets/stone-1500w.jpg"
              ></CategoryCard>
            </div>
          </div>
          <div className="home-banner">
            <div className="home-container04">
              <h3 className="home-text20 Heading-3">Amber Us</h3>
            </div>
          </div>
          <div className="home-container05 max-width-container">
            <div className="home-container06">
              <span className="home-text21">
                <span>
                  Amber-us is manufacturing company from Lithuania. The company
                  was established in 1995 as a family business and since then
                  gained a lot of experience and trust from the clients and
                  partners.
                </span>
                <br></br>
                <span>
                  We offer various product range from amber jewelry to business
                  gifts and every year new products with unique design are added
                  to our product list.
                </span>
              </span>
              <Link to="/about-us" className="home-navlink1 button">
                Read more
              </Link>
            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="max-width-container">
            <SectionHeading
              heading="Recommended Products"
              subtitle="Products recommended by us"
            ></SectionHeading>
            <div className="home-gallery">
              <div className="home-left1">
                <ItemCard
                  name="Amber Heart Pendant"
                  value="10.07"
                  image_src="/playground_assets/pendant2-1500w.jpg"
                  rootClassName="rootClassName4"
                ></ItemCard>
              </div>
              <div className="home-right1">
                <div className="home-top">
                  <div className="home-left2">
                    <ItemCard
                      name="Amber Keychain"
                      value="46.07"
                      image_src="/playground_assets/key%20chain-1500w.jpg"
                      rootClassName="rootClassName2"
                    ></ItemCard>
                  </div>
                  <div className="home-right2">
                    <ItemCard
                      name="Mosaic Bracelet"
                      value="19.07"
                      image_src="/playground_assets/bracelet-1500w.jpg"
                      rootClassName="rootClassName3"
                    ></ItemCard>
                  </div>
                </div>
                <div className="home-bottom">
                  <div className="home-left3">
                    <ItemCard
                      name="Islamic Prayer Bead"
                      value="278.94"
                      image_src="/playground_assets/prayer%20bead%20recommended-1500w.jpg"
                      rootClassName="item-card-root-class-name1"
                    ></ItemCard>
                  </div>
                  <div className="home-right3">
                    <ItemCard
                      name="Amber Cross Pendant"
                      value="12.32"
                      image_src="/playground_assets/cross%20pendant-1500w.jpg"
                      rootClassName="item-card-root-class-name6"
                    ></ItemCard>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <div className="max-width-container">
          <footer className="home-footer1">
            <div className="home-container07">
              <h3 className="home-text25 Heading-3">Amber Us</h3>
              <span className="home-text26">
                <span>J. Janonio 3</span>
                <br></br>
                <span>Palanga, 00133</span>
                <br></br>
                <span>Lithuania</span>
              </span>
              <span className="home-text32">
                <span>info@amber-us.com</span>
                <br></br>
              </span>
            </div>
            <div className="home-links-container">
              <div className="home-container08">
                <span className="home-text35">Categories</span>
                <span className="home-text36">Amber With Insects</span>
                <span className="home-text37">Prayer Beads</span>
                <span className="home-text38">Pendants</span>
                <span className="home-text39">Pendants With Insects</span>
                <span className="home-text40">Spheres With Insects</span>
                <span className="home-text41">Stones</span>
              </div>
              <div className="home-container09">
                <span className="home-text42">Company</span>
                <span className="home-text43">Shop</span>
                <Link to="/about-us" className="home-navlink2">
                  About Us
                </Link>
                <Link to="/contact" className="home-navlink3">
                  Contacts
                </Link>
              </div>
              <div className="home-container10">
                <span className="home-text44">Policies</span>
                <Link to="/shipping" className="home-navlink4">
                  <span>Shipping</span>
                </Link>
                <Link to="/return-policy" className="home-navlink5">
                  <span>Return Policy</span>
                </Link>
                <Link to="/Terms_Of_Service" className="home-navlink6">
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

export default Home
