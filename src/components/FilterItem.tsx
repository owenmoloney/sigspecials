import { useState } from 'react'
import './FilterItem.css'

interface FilterItemProps {
  title: string
  children: React.ReactNode
}

const FilterItem = ({ title, children }: FilterItemProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`filter-item ${isOpen ? 'filter-item-open' : ''}`}>
      <button
        className="filter-title"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <span className={`filter-icon ${isOpen ? 'filter-icon-open' : ''}`}>
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div className={`filter-content ${isOpen ? 'filter-content-open' : 'filter-content-closed'}`}>
        {children}
      </div>
    </div>
  )
}

export default FilterItem
