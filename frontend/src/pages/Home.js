import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
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

const products = [
  {
    id: 1,
    image: 'https://via.placeholder.com/300x300?text=Product+1',
    name: 'Product 1',
    description: 'This is a description for Product 1',
    rating: 4,
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/300x300?text=Product+2',
    name: 'Product 2',
    description: 'This is a description for Product 2',
    rating: 4,
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/300x300?text=Product+3',
    name: 'Product 3',
    description: 'This is a description for Product 3',
    rating: 5,
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/300x300?text=Product+4',
    name: 'Product 4',
    description: 'This is a description for Product 4',
    rating: 5,
  },
];

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    feedback: 'The sweets are absolutely delightful! I can taste the love and care in every bite. Highly recommend!',
    image: 'https://via.placeholder.com/100?text=John+Doe'
  },
  {
    id: 2,
    name: 'Jane Smith',
    feedback: 'A wonderful experience! The farsan is crispy and delicious. It’s like a taste of home every time.',
    image: 'https://via.placeholder.com/100?text=Jane+Smith'
  },
  {
    id: 3,
    name: 'Michael Johnson',
    feedback: 'Incredible quality and flavor! Every product is crafted with perfection. I’ll definitely be coming back.',
    image: 'https://via.placeholder.com/100?text=Michael+Johnson'
  }
];

const userGrowthData = [
  { month: 'Jan', users: 0 },
  { month: 'Feb', users: 7 },
  { month: 'Mar', users: 4 },
  { month: 'Apr', users: 15 },
  { month: 'May', users: 17 },
  { month: 'Jun', users: 25 },
  { month: 'Jul', users: 19 },
  { month: 'Aug', users: 30 },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
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

      <section className="popular-products">
        <h2>Popular Products</h2>
        <div className="product-carousel">
          <div className="product-carousel-inner">
            {products.map((product, index) => (
              <div className="product-card" key={index}>
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-info">
                  <div className="product-name">{product.name}</div>
                  <div className="product-description">{product.description}</div>
                  <div className="product-rating">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`star ${i < Math.floor(product.rating) ? 'filled' : ''} ${i === Math.floor(product.rating) && product.rating % 1 !== 0 ? 'half' : ''}`}
                      >
                        ★
                      </span>
                    ))}
                    <span className="rating-value">{product.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="story-section">
      <div className="story-image">
        <img src="https://via.placeholder.com/600x400?text=Business+Start" alt="Business Start" />
      </div>
      <div className="story-content">
        <h2>Our Story</h2>
        <p>
          My mom's journey began with a passion for creating delicious sweets and farsan items. What started as a small kitchen experiment soon blossomed into a thriving business. Her dedication and love for quality have always been the driving force behind our success.
        </p>
        <p>
          The idea to showcase these products online came from the realization that our unique offerings deserved a wider audience. By sharing her creations through this platform, we aim to bring a taste of home to many more people.
        </p>
        <p>
          Starting this project was not just about expanding the business but also about honoring the hard work and love that has gone into every product. Our goal is to keep the tradition alive and make our beloved sweets accessible to everyone.
        </p>
      </div>
    </section>

    <section className="user-growth-section">
        <div className="user-growth-info">
          <h2>User Growth Over Time</h2>
          <p>
            Our platform has seen significant user growth over the past few months. This graph illustrates the 
            steady increase in users, highlighting the success and expansion of our services. The data 
            represents active users who have engaged with the platform, showcasing our ability to 
            attract and retain a growing community.
          </p>
        </div>
        <div className="user-growth-chart">
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={userGrowthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="users" 
                stroke="#8884d8" 
                activeDot={{ r: 8 }} 
                animationBegin={0} 
                animationDuration={4000} 
                animationEasing="ease-in-out"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-cards">
        {testimonials.map(testimonial => (
          <div className="testimonial-card" key={testimonial.id}>
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <div className="testimonial-info">
              <p className="testimonial-feedback">"{testimonial.feedback}"</p>
              <p className="testimonial-name">- {testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Home;
