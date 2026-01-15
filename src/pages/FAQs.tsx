import { Link } from 'react-router-dom'
import FAQItem from '@/components/FAQItem'
// @ts-ignore
import boatImage from '@/assets/images/boat-scaled.jpg'
import './FAQs.css'

const FAQs = () => {
  const faqData = [
    {
      question: 'WHAT MAKES YOUR LURES "CUSTOM"?',
      answer:
        'Each lure is hand-designed with unique colorways and finishes that cater to specific water conditions and fish behavior. While it’s one signature lure shape, the variety in styles gives anglers options to match their fishing environment',
    },
    {
      question: 'DO YOU OFFER BULK OR WHOLESALE ORDERS?',
      answer:
        'Yes! Whether you’re stocking up for a tournament, outfitting your charter, or reselling in your shop, we offer bulk pricing on larger orders. Just shoot us a message through our contact form and we’ll hook you up with the details.',
    },
    {
      question: 'HOW LONG DOES SHIPPING TAKE?',
      answer:
        'Orders are typically processed within 1-3 business days. Shipping times depend on your location, but most customers in the U.S. receive their lures within 3-7 business days. You’ll get tracking info as soon as your order ships.',
    },
    {
      question: 'CAN I REQUEST A CUSTOM COLOR OR PATTERN?',
      answer:
        'Right now, we’re focused on perfecting our core lineup—but we’re always experimenting behind the scenes. If you have a killer idea or a color combo you swear by, let us know! We love hearing from fellow anglers.',
    },
    {
      question: 'ARE YOUR LURES MADE IN THE USA?',
      answer:
        'Absolutely. Each Sig Specials lure is handmade right here in the USA. Every detail—from paint to assembly—is crafted with care, passion, and precision to make sure you’re fishing with a lure that’s truly one of a kind.',
    },
  ]

  return (
    <div className="faqs-page">
      <div className="faqs-container">
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      <div
        className="faqs-cta"
        style={{ backgroundImage: `url(${boatImage})` }}
      >
        <h2>READY TO HOOK THE BIG ONE?</h2>
        <p>Check out our custom, handcrafted lures—made to perform and<br />
          built with passion.</p>
        <Link to="/shop" className="shop-now-button">
          SHOP NOW
        </Link>
      </div>
    </div>
  );
};

export default FAQs;
