import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import Navbar from './components/header/header'
import LandingNavbar from './components/header/LandingNav'
import Footer from './components/footer/footer'

import HomePage from './pages/home/Home';
import AboutPage from './pages/about/About';
import NotFoundPage from './pages/error/404';
import SignInPage from './pages/signin/SignIn';
import SignUpPage from './pages/signup/SignUp';
import SupportPage from './pages/support/Support';
import ContactPage from './pages/support/contact';
import PricingPage from './pages/marketing/pricing';

function App() {
  return (
    <Router>
      <>
        <LandingNavbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="*" element={<NotFoundPage />} />
          {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
