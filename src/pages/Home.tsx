import { useState, useEffect } from 'react'
// @ts-ignore
import slideImage1 from '@/assets/images/slide_image_1.jpg'
// @ts-ignore
import slideImage2 from '@/assets/images/slider_image_2.jpg'
// @ts-ignore
import slideImage3 from '@/assets/images/slider_image_3.jpg'
import './Home.css'

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: slideImage1,
      text: 'Premium Handcrafted Lures for the Serious Angler',
    },
    {
      image: slideImage2,
      text: 'Custom Designs That Catch More Fish',
    },
    {
      image: slideImage3,
      text: 'Made in the USA with Passion and Precision',
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
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
              <h2 className="slide-text">{slide.text}</h2>
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
    </div>
  )
}

export default Home
