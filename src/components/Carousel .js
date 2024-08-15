import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Sample data for the carousel
const slides = [
  {
    id: 1,
    imgSrc: 'https://via.placeholder.com/1200x400',
    link: '#product1',
    alt: 'Product 1',
  },
  {
    id: 2,
    imgSrc: 'https://via.placeholder.com/1200x400',
    link: '#product2',
    alt: 'Product 2',
  },
  {
    id: 3,
    imgSrc: 'https://via.placeholder.com/1200x400',
    link: '#product3',
    alt: 'Product 3',
  },
  // Add more slides as needed
];

const Carousel = () => {
  // Settings for react-slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative w-full overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] flex justify-center items-center">
            <a href={slide.link}>
              <img
                src={slide.imgSrc}
                alt={slide.alt}
                className="w-full h-full object-cover"
                style={{ maxHeight: '100%' }}
              />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
