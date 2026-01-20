import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import FAQs from './pages/FAQs'
import Shop from './pages/Shop'
import ContactUs from './pages/ContactUs'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Wishlist from './pages/Wishlist'
import './styles/App.css'

function App() {
  // Use basename for GitHub Pages, empty for local development
  const basename = import.meta.env.PROD ? '/sigspecials' : ''
  
  return (
    <Router basename={basename}>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App
