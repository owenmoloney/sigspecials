import { Link } from 'react-router-dom'
// @ts-ignore
import logo from '@/assets/images/SigSpecials_Logo.png'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-header">
        <div className="footer-left">
          <div className="footer-logo">
            <img src={logo} alt="Sig Specials Logo" />
          </div>
          <div className="footer-section">
            <h4>Newsletter Signup</h4>
            <form className="newsletter-form">
              <div className="newsletter-input-wrapper">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-arrow">→</button>
              </div>
              <label className="privacy-checkbox">
                <input type="checkbox" />
                <span>I agree to the <Link to="/privacy-policy" className="privacy-policy-link">Privacy Policy</Link>.</span>
              </label>
            </form>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-tagline">
            <p>Enjoy every fishing trip
            <br />with our gear!</p>
          </div>
          <div className="footer-right-content">
            <div className="footer-section">
              <h4>Socials</h4>
              <div className="social-links">
                <a href="#" className="social-link">Facebook</a>
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">Instagram</a>
              </div>
            </div>

            <div className="footer-section">
              <h4>Menu</h4>
              <nav className="footer-nav">
                <Link to="/" className="footer-link">Home</Link>
                <Link to="/shop" className="footer-link">Shop</Link>
                <Link to="/contact-us" className="footer-link">Contact Us</Link>
                <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
              </nav>
            </div>

            <div className="footer-section">
              <h4>Say Hello</h4>
              <a href="mailto:contactus@sigspecials.com" className="footer-email">
                contactus@sigspecials.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Sig Specials © 2026. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
