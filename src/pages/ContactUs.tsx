import { Link } from 'react-router-dom'
import './ContactUs.css'

const ContactUs = () => {
  return (
    <div className="contact-page">
      <div className="contact-page-top">
        <div className="contact-left">
          <h1 className="contact-title">GET IN TOUCH</h1>
          <p className="contact-description">
            We'd love to hear from you! Whether you have a question about our custom lures, want to share your latest catch, or just want to say hello, feel free to reach out. Fill out the form below and we'll get back to you as soon as we can—usually within 1-2 business days. Your feedback, stories, and questions help us make Sig Specials even better.
          </p>
        </div>
        <div className="contact-right">
          <div className="contact-details-header">
            <div className="contact-icon-circle">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
            </div>
            <h2 className="contact-details-title">CONTACT DETAILS</h2>
          </div>
          <p className="contact-email">contactus@sigspecials.com</p>
        </div>
      </div>
      <div className="contact-form-grid">
        <div className="contact-form-box">
          <div className="contact-form-label-wrapper">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <input type="text" className="contact-form-input" placeholder="Name" />
          </div>
        </div>
        <div className="contact-form-box">
          <div className="contact-form-label-wrapper">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <input type="email" className="contact-form-input" placeholder="Email Address" />
          </div>
        </div>
        <div className="contact-form-box">
          <div className="contact-form-label-wrapper">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <input type="tel" className="contact-form-input" placeholder="Phone" />
          </div>
        </div>
        <div className="contact-form-box">
          <div className="contact-form-label-wrapper">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <input type="text" className="contact-form-input" placeholder="Order Number" />
          </div>
        </div>
      </div>
      <div className="contact-message-box">
        <div className="contact-form-label-wrapper">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 20h9"></path>
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
          </svg>
          <textarea
            className="contact-message-input"
            placeholder="How can we help you? Feel free to get in touch!"
            rows={4}
          />
        </div>
      </div>
      <div className="contact-form-footer">
        <label className="contact-privacy-checkbox">
          <input type="checkbox" />
          <span>I agree with the site's <Link to="/privacy-policy" className="privacy-policy-link">privacy policy</Link>.</span>
        </label>
        <button type="submit" className="contact-submit-button">Submit</button>
      </div>
    </div>
  )
}

export default ContactUs
