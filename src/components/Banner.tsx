import { NavLink } from 'react-router-dom'
import logo from '@/assets/images/SigSpecials_Logo.png'
import './Banner.css'

interface BannerProps {
  backgroundColor?: string
  textColor?: string
  isVisible?: boolean
}

const Banner = ({
  backgroundColor = '#ffffff',
  textColor = '#000000',
  isVisible = true,
}: BannerProps) => {
  if (!isVisible) return null

  return (
    <div
      className="banner"
      style={{
        backgroundColor,
        color: textColor,
      }}
    >
      <div className="banner-content">
        <div className="banner-logo">
          <img src={logo} alt="SigSpecials Logo" />
        </div>
        <nav className="banner-nav">
          <NavLink to="/" className="banner-button">
            Home
          </NavLink>
          <NavLink to="/faqs" className="banner-button">
            FAQs
          </NavLink>
          <NavLink to="/shop" className="banner-button">
            Shop
          </NavLink>
          <NavLink to="/contact-us" className="banner-button">
            Contact Us
          </NavLink>
        </nav>
        <div className="banner-tagline">
          CATCH THE NEXT BIG ONE
        </div>
      </div>
    </div>
  )
}

export default Banner
