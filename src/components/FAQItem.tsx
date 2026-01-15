import { useState } from 'react'
import './FAQItem.css'

interface FAQItemProps {
  question: string
  answer: string
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}>
      <button
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <span className={`faq-icon ${isOpen ? 'faq-icon-open' : ''}`}>
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div className={`faq-answer ${isOpen ? 'faq-answer-open' : 'faq-answer-closed'}`}>
        <p>{answer}</p>
      </div>
    </div>
  )
}

export default FAQItem
