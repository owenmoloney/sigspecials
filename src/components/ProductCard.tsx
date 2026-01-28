import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './ProductCard.css'

interface ProductCardProps {
  name: string
  price: string
  image: string
}

const ProductCard = ({ name, price, image }: ProductCardProps) => {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false)

  const openQuickView = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    // Use setTimeout to ensure the click event doesn't interfere with modal opening
    setTimeout(() => {
      setIsQuickViewOpen(true)
      document.body.style.overflow = 'hidden'
    }, 0)
  }

  const closeQuickView = () => {
    setIsQuickViewOpen(false)
    document.body.style.overflow = 'unset'
  }

  // Handle ESC key to close modal
  useEffect(() => {
    if (!isQuickViewOpen) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeQuickView()
      }
    }

    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isQuickViewOpen])

  return (
    <>
      <li className="product type-product post-25430 status-publish instock product_cat-lures has-post-thumbnail taxable shipping-taxable purchasable product-type-simple product_style_creative wishlist_decorated">
        <div className="post_item post_layout_thumbs">
          <div className="post_featured hover_shop" onClick={(e) => e.stopPropagation()}>
            <Link to={`/product/${name.toLowerCase().replace(/\s+/g, '-')}`}>
              <img src={image} alt={name} className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" />
            </Link>
            <div className="mask"></div>
            <div className="top-info">
              <div className="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-loop-button-wrapper tinvwl-woocommerce_before_shop_loop_item_title">
                <div className="tinv-wishlist-clear"></div>
                <button 
                  role="button" 
                  tabIndex={0}
                  name="add-to-wishlist" 
                  aria-label="Add to Wishlist" 
                  className="tinvwl_add_to_wishlist_button tinvwl-icon-heart tinvwl-position-shortcode tinvwl-loop"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                  <span className="tinvwl_add_to_wishlist-text">Add to Wishlist</span>
                  <span className="tinvwl_remove_from_wishlist-text">Remove from Wishlist</span>
                </button>
                <div className="tinv-wishlist-clear"></div>
                <div className="tinvwl-tooltip">Add to Wishlist</div>
              </div>
            </div>
            <div className="bottom-info">
              <div className="woosq_wrap">
                <button 
                  className="woosq-btn" 
                  rel="nofollow" 
                  onClick={openQuickView}
                  type="button"
                >
                  Quick View
                </button>
              </div>
              <div className="add_to_cart_wrap">
                <button 
                  rel="nofollow" 
                  aria-hidden="true" 
                  data-quantity="1" 
                  className="shop_cart icon-shopping-cart button add_to_cart_button product_type_simple product_in_stock ajax_add_to_cart"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div className="post_data">
            <div className="post_data_inner">
              <div className="post_header entry-header">
                <h2 className="woocommerce-loop-product__title">
                  <Link to={`/product/${name.toLowerCase().replace(/\s+/g, '-')}`}>{name}</Link>
                </h2>
              </div>
              <div className="wrap-data-info">
                <div className="price_wrap">
                  <span className="price">
                    <span className="woocommerce-Price-amount amount">
                      <bdi>{price}</bdi>
                    </span>
                  </span>
                </div>
              </div>
              <button 
                className="button product_type_simple add_to_cart_button ajax_add_to_cart" 
                data-quantity="1" 
                aria-label={`Add to cart: "${name}"`} 
                rel="nofollow"
              >
                Buy now
              </button>
              <span className="screen-reader-text"></span>
            </div>
          </div>
        </div>
      </li>

      {/* Quick View Modal */}
      {isQuickViewOpen && (
        <div 
          className="quick-view-modal-overlay" 
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeQuickView()
            }
          }}
        >
          <div className="quick-view-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="quick-view-modal-close" onClick={closeQuickView} aria-label="Close">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="quick-view-modal-body">
              <div className="quick-view-image">
                <img src={image} alt={name} />
              </div>
              <div className="quick-view-info">
                <h2 className="quick-view-title">{name}</h2>
                <div className="quick-view-price-section">
                  <span className="quick-view-price">{price}</span>
                </div>
                <button 
                  className="quick-view-add-to-cart button" 
                  aria-label={`Add to cart: "${name}"`}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProductCard
