import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import AboutSection from './AboutPage/AboutSection'
import FarmerSection from './FarmerPage/FarmerSection'
import CommunitySection from './CommunityPage/CommunitySection'
import FrenchiseSection from './FrenchisePage/FrenchiseSection'
import ServiceSection from './ServicePage/ServiceSection'
import ContactPage from './ContactPage/ContactPage'
import ProductSection from './ProductPage/ProductSection'
import Cart from './Cart'
import Checkout from './Checkout'

const Routing = () => {
  return (
    <>
       <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutSection />} />
          <Route path="farmer" element={<FarmerSection />} />
          <Route path="community" element={<CommunitySection />} />
          <Route path="franchise" element={<FrenchiseSection />} />
          <Route path="service" element={<ServiceSection />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="product" element={<ProductSection />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />

        </Route>
      </Routes>
    </>
  )
}

export default Routing;
