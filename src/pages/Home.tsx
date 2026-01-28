import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '@/components/ProductCard'
// @ts-ignore
import slideImage1 from '@/assets/images/slide_image_1.jpg'
// @ts-ignore
import slideImage2 from '@/assets/images/slider_image_2.jpg'
// @ts-ignore
import slideImage3 from '@/assets/images/slider_image_3.jpg'
// @ts-ignore
import signatureLureImage from '@/assets/images/home_page_2.jpg'
// @ts-ignore
import homePage3Image from '@/assets/images/home_page_3.jpg'
// @ts-ignore
import oilSlick from '@/assets/images/oil_Slick.jpg'
// @ts-ignore
import orangeMamba from '@/assets/images/orange_Mamba.jpg'
// @ts-ignore
import blueSilver from '@/assets/images/blue_Sliver.jpg'
// @ts-ignore
import decorBg1 from '@/assets/images/decor-bg-1.png'
import './Home.css'

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentReviewPage, setCurrentReviewPage] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)

  const reviews = [
    {
      text: "I've tried dozens of lures over the years, but this one's different. First cast landed a bass and I haven't looked back since. You can tell it's made by someone who actually fishes.",
      name: "Mike",
      location: "New York"
    },
    {
      text: "I'm not big on hype, but this lure backs it up. Clean paint, sharp hooks, and the action in the water is killer. Proud to fish with something handmade in the USA.",
      name: "Mark A.",
      location: "Key West, FL"
    },
    {
      text: "Caught three fish on my first trip out with this lure. It's now permanently in my go-to tackle setup. Love supporting small businesses that actually deliver.",
      name: "Eric C.",
      location: "Erie, PA"
    },
    {
      text: "The quality blew me away. You can see the attention to detail in every lure. It feels personal—like it was made just for me. And it catches fish. Period.",
      name: "Ben",
      location: "New York"
    }
  ]

  // Create a looped array of reviews for seamless sliding
  // Duplicate reviews at the beginning and end for infinite loop effect
  const loopedReviews = [
    reviews[reviews.length - 1], // Last review (for prev of first)
    ...reviews,
    reviews[0], // First review (for next of last)
  ]
  
  // Calculate transform to show 3 reviews centered
  // Each slide is 380px (360px width + 20px margin)
  const slideWidth = 380
  const [viewportWidth, setViewportWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200)
  const [isSignatureVisible, setIsSignatureVisible] = useState(false)
  const [isCustomLuresVisible, setIsCustomLuresVisible] = useState(false)
  const [isProductsVisible, setIsProductsVisible] = useState(false)
  const [isReviewsVisible, setIsReviewsVisible] = useState(false)
  const [isCtaVisible, setIsCtaVisible] = useState(false)
  const signatureRef = useRef<HTMLDivElement>(null)
  const customLuresRef = useRef<HTMLDivElement>(null)
  const productsRef = useRef<HTMLDivElement>(null)
  const reviewsRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Scroll animations for all sections
  useEffect(() => {
    const observerOptions = { threshold: 0.1 }
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement
            if (target === signatureRef.current) {
              setIsSignatureVisible(true)
            } else if (target === customLuresRef.current) {
              setIsCustomLuresVisible(true)
            } else if (target === productsRef.current) {
              setIsProductsVisible(true)
            } else if (target === reviewsRef.current) {
              setIsReviewsVisible(true)
            } else if (target === ctaRef.current) {
              setIsCtaVisible(true)
            }
          }
        })
      },
      observerOptions
    )

    const refs = [signatureRef, customLuresRef, productsRef, reviewsRef, ctaRef]
    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current)
      }
    })

    return () => {
      refs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current)
        }
      })
    }
  }, [])
  
  // Center the middle review (at index currentReviewPage + 1 in loopedReviews)
  // We want to show: prev (index currentReviewPage), current (index currentReviewPage + 1), next (index currentReviewPage + 2)
  const centerOffset = viewportWidth / 2 - slideWidth / 2
  const transformX = -(currentReviewPage + 1) * slideWidth + centerOffset + dragOffset

  // Drag handlers
  const handleDragStart = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true)
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    setDragStart(clientX)
    setDragOffset(0)
  }

  const handleDragMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    const offset = clientX - dragStart
    setDragOffset(offset)
  }

  const handleDragEnd = () => {
    if (!isDragging) return
    setIsDragging(false)
    
    // Threshold: if dragged more than 100px, change review
    const threshold = 100
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        // Dragged right - go to previous review
        setCurrentReviewPage((prev) => (prev - 1 + reviews.length) % reviews.length)
      } else {
        // Dragged left - go to next review
        setCurrentReviewPage((prev) => (prev + 1) % reviews.length)
      }
    }
    
    setDragOffset(0)
    setDragStart(0)
  }

  const slides = [
    {
      image: slideImage1,
      title: 'One Lure. Endless Possibilities.',
      description: 'Handcrafted, battle-tested, and trusted by serious anglers.',
      buttonText: 'Shop Now',
      buttonLink: '/shop',
    },
    {
      image: slideImage2,
      title: 'Performance Focus',
      description: 'Our signature lure isn\'t just custom—it\'s dependable where it matters most: on the water.',
      buttonText: 'Get Started',
      buttonLink: '/contact-us',
    },
    {
      image: slideImage3,
      title: 'Made in the USA',
      description: 'Every Sig Specials lure is crafted in the USA by a fisherman who lives it.',
      buttonText: 'Read More',
      buttonLink: '/faqs',
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev: number) => (prev + 1) % slides.length)
    }, 10000) 
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <div className="home">
      <div className="slideshow-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'slide-active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-content">
              <h2 className="slide-text">{slide.title}</h2>
              <p className="slide-description">{slide.description}</p>
              <Link to={slide.buttonLink} className="slide-button">
                {slide.buttonText}
              </Link>
            </div>
          </div>
        ))}
        <div className="slideshow-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'indicator-active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div ref={signatureRef} className="signature-section">
        <div className="signature-image-container">
          <img src={signatureLureImage} alt="Signature Lure" className="signature-image" />
        </div>
        <div className={`signature-content ${isSignatureVisible ? 'animate-in' : ''}`}>
          <h2 className={`signature-heading ${isSignatureVisible ? 'animate-in' : ''}`}>THE SIGNATURE LURE THAT'S CHANGING THE GAME</h2>
          <p className={`signature-text ${isSignatureVisible ? 'animate-in' : ''}`}>
            Built by hand, tested on the water, and trusted by anglers who know the difference. At Sig Specials, we don't sell a hundred types of lures—we focus on perfecting one. Explore our styles and see what makes this lure a must-have in your tackle box.
          </p>
          <Link to="/shop" className={`learn-more-button ${isSignatureVisible ? 'animate-in' : ''}`}>Learn More</Link>
        </div>
      </div>
      <div ref={customLuresRef} className="custom-lures-section">
        <div 
          className="custom-lures-image"
          style={{ backgroundImage: `url(${homePage3Image})` }}
        >
          <div className="custom-lures-overlay">
            <h2 className={`custom-lures-heading ${isCustomLuresVisible ? 'animate-in' : ''}`}>CUSTOM LURES, BUILT TO PERFORM</h2>
            <p className={`custom-lures-text ${isCustomLuresVisible ? 'animate-in' : ''}`}>
              Forget the gimmicks. Our lures are made by a real fisherman who knows what works—because he's out there testing every design himself. Whether you're casting from shore, boat, or pier, Sig Specials delivers the action where it counts.
            </p>
            <Link to="/shop" className={`shop-now-button ${isCustomLuresVisible ? 'animate-in' : ''}`}>Shop Now</Link>
          </div>
        </div>
      </div>
      <div ref={productsRef} className="products-section">
        <h2 className={`products-heading ${isProductsVisible ? 'animate-in' : ''}`}>Our Products</h2>
        <div className="products-grid">
          <div className={isProductsVisible ? 'animate-in' : ''} style={{ transitionDelay: '0.1s' }}>
            <ProductCard name="Oil Slick" price="$12.00" image={oilSlick} />
          </div>
          <div className={isProductsVisible ? 'animate-in' : ''} style={{ transitionDelay: '0.2s' }}>
            <ProductCard name="Orange Mamba" price="$12.00" image={orangeMamba} />
          </div>
          <div className={isProductsVisible ? 'animate-in' : ''} style={{ transitionDelay: '0.3s' }}>
            <ProductCard name="Blue Silver" price="$12.00" image={blueSilver} />
          </div>
        </div>
        <Link to="/shop" className={`view-all-button ${isProductsVisible ? 'animate-in' : ''}`} style={{ transitionDelay: '0.4s' }}>View All Products</Link>
      </div>
      <div ref={reviewsRef} className="reviews-section">
        <h2 className={`reviews-heading ${isReviewsVisible ? 'animate-in' : ''}`}>Customer Reviews</h2>
        <div className="reviews-container">
          <div 
            className={`reviews-grid ${isDragging ? 'dragging' : ''}`}
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
            style={{ 
              cursor: isDragging ? 'grabbing' : 'grab',
              transform: `translate3d(${transformX}px, 0px, 0px)`,
              transitionDuration: isDragging ? '0ms' : '500ms'
            }}
          >
            {loopedReviews.map((review, index) => {
              // Determine if this is the center slide
              // The center slide is at index currentReviewPage + 1 in loopedReviews
              const centerIndex = currentReviewPage + 1
              const isCenter = index === centerIndex
              const isLeft = index === centerIndex - 1
              const isRight = index === centerIndex + 1
              
              // Apply styling based on position - all cards are rendered for seamless transitions
              const cardClass = isCenter 
                ? 'review-card review-card-center' 
                : (isLeft || isRight ? 'review-card review-card-side' : 'review-card review-card-hidden')
              
              return (
                <div key={`${review.name}-${index}`} className={cardClass}>
                  <p className="review-text">"{review.text}"</p>
                  <div className="review-author">
                    <p className="review-name">{review.name}</p>
                    <p className="review-location">{review.location}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="reviews-indicators">
          {reviews.map((_, index) => (
            <button
              key={index}
              className={`review-indicator ${index === currentReviewPage ? 'review-indicator-active' : ''}`}
              onClick={() => setCurrentReviewPage(index)}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div ref={ctaRef} className="cta-section" style={{ backgroundImage: `url(${decorBg1})` }}>
        <div className="cta-container">
          <div className="cta-left">
            <h2 className={`cta-heading ${isCtaVisible ? 'animate-in' : ''}`}>Looking for something special?</h2>
            <p className={`cta-text ${isCtaVisible ? 'animate-in' : ''}`}>Custom styles, bulk orders, or wholesale inquiries—we've got you covered.</p>
          </div>
          <div className="cta-right">
            <Link to="/contact-us" className={`cta-button ${isCtaVisible ? 'animate-in' : ''}`}>
              <span className="cta-button-icon">→</span>
              <span className="cta-button-text">Get Started Today</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
