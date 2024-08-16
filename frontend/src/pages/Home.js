import React, { useState, useEffect } from 'react';
import './Home.css';

const images = [
  {
    src: 'https://via.placeholder.com/1200x400?text=Sweet+1',
    title: 'Delicious Sweets',
    quote: 'Made with love by mom',
    contentPosition: 'left',
  },
  {
    src: 'https://via.placeholder.com/1200x400?text=Sweet+2',
    title: 'Tasty Farsan',
    quote: 'A snack for every occasion',
    contentPosition: 'right',
  },
  {
    src: 'https://via.placeholder.com/1200x400?text=Sweet+3',
    title: 'Traditional Delights',
    quote: 'Authentic flavors of home',
    contentPosition: 'left',
  }
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="carousel-slide" key={index}>
            <img src={image.src} alt={image.title} className="carousel-image" />
            <div className={`carousel-text ${image.contentPosition}`}>
              <h2>{image.title}</h2>
              <p>{image.quote}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default Home;
