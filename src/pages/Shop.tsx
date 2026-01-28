import { useState } from 'react'
import FilterItem from '@/components/FilterItem'
import ProductCard from '@/components/ProductCard'
// @ts-ignore
import oilSlick from '@/assets/images/oil_Slick.jpg'
// @ts-ignore
import orangeMamba from '@/assets/images/orange_Mamba.jpg'
// @ts-ignore
import blueSilver from '@/assets/images/blue_Sliver.jpg'
// @ts-ignore
import fireTiger from '@/assets/images/fire_Tiger.jpg'
// @ts-ignore
import rasta from '@/assets/images/rasta.jpg'
// @ts-ignore
import purpleFaze from '@/assets/images/purple_Faze.jpg'
// @ts-ignore
import purpleSilver from '@/assets/images/purple_Silver.jpg'
// @ts-ignore
import purpleTiger from '@/assets/images/purple_tiger.jpg'
// @ts-ignore
import blackBlue from '@/assets/images/black_&_Blue.jpg'
import './Shop.css'

const Shop = () => {
  const [sortBy, setSortBy] = useState('latest')

  const products = [
    { name: 'Oil Slick', price: '$12.00', image: oilSlick },
    { name: 'Orange Mamba', price: '$12.00', image: orangeMamba },
    { name: 'Blue Silver', price: '$12.00', image: blueSilver },
    { name: 'Fire Tiger', price: '$12.00', image: fireTiger },
    { name: 'Rasta', price: '$12.00', image: rasta },
    { name: 'Purple Faze', price: '$12.00', image: purpleFaze },
    { name: 'Purple Silver', price: '$12.00', image: purpleSilver },
    { name: 'Purple Tiger', price: '$12.00', image: purpleTiger },
    { name: 'Black & Blue', price: '$12.00', image: blackBlue },
  ]

  return (
    <div className="shop-page">
      <div className="shop-sidebar">
        <h2>Filters</h2>
        <FilterItem title="Filter by category">
          <div className="filter-options">
            <label className="filter-option">
              <input type="checkbox" />
              <span>All Categories</span>
            </label>
          </div>
        </FilterItem>
        <FilterItem title="Price">
          <div className="filter-options">
            <label className="filter-option">
              <input type="checkbox" />
              <span>Under $25</span>
            </label>
            <label className="filter-option">
              <input type="checkbox" />
              <span>$25 - $50</span>
            </label>
            <label className="filter-option">
              <input type="checkbox" />
              <span>$50 - $100</span>
            </label>
            <label className="filter-option">
              <input type="checkbox" />
              <span>Over $100</span>
            </label>
          </div>
        </FilterItem>
        <FilterItem title="Rating">
          <div className="filter-options">
            <label className="filter-option">
              <input type="checkbox" />
              <span>5 Stars</span>
            </label>
            <label className="filter-option">
              <input type="checkbox" />
              <span>4 Stars & Up</span>
            </label>
            <label className="filter-option">
              <input type="checkbox" />
              <span>3 Stars & Up</span>
            </label>
          </div>
        </FilterItem>
      </div>
      <div className="shop-content">
        <div className="shop-header">
          <p className="shop-results">Showing all {products.length} results</p>
          <div className="shop-sort">
            <span>Sorted by latest</span>
            <select
              className="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="latest">Sort by latest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
        </div>
        <div className="products-grid">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Shop
