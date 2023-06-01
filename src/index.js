import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Shipping from './views/shipping'
import Home from './views/home'
import AboutUs from './views/about-us'
import Contact from './views/contact'
import Shop from './views/shop'
import Return from './views/return-policy'
import Terms_Of_Service from './views/Terms_Of_Service'

console.log('test')
const App = () => {
  return (
    <Router>
      <div>
        <Route component={Shipping} exact path="/shipping" />
        <Route component={Home} exact path="/" />
        <Route component={AboutUs} exact path="/about-us" />
        <Route component={Contact} exact path="/contact" />
        <Route component={Shop} exact path="/shop" />
        <Route component={Return} exact path="/return-policy" />
        <Route component={Terms_Of_Service} exact path="/Terms_Of_Service" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
