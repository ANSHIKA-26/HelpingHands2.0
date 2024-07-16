import React, { useEffect, useState } from 'react';
import './green.css';
import img1 from './registerpage/img1.jpg';
import img2 from './registerpage/img2.png';
import img3 from './registerpage/img3.jpg';
import img4 from './registerpage/img4.jpg';
import img5 from './registerpage/img5.jpg';
import img6 from './registerpage/img6.jpg';
import img7 from './registerpage/img7.jpg';
import img8 from './registerpage/img8.jpg';
import img9 from './registerpage/img9.jpg';
import img10 from './registerpage/img10.jpg';
import backImage from './registerpage/image.png';

const Register = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="container">
      <div className="left-section">
        <button className="back-button" onClick={() => window.location.href = 'index.html'}>
          <img src={backImage} width="50px" height="50px" alt="Back" />
        </button>
        <h1 className="animated-heading">
          Helping Hands<span className="blinking-cursor">|</span>
        </h1>
        <p className="description">
          Helping Hands is dedicated to providing support and resources to those in need. Our mission is to empower individuals and communities by offering job opportunities, educational resources, and a supportive network.
        </p>
        <div className="buttons">
          <button type="button" onClick={() => window.location.href = 'employer.html'}>Post a Job</button>
          <button type="button" onClick={() => window.location.href = 'form.html'}>Apply for Jobs</button>
          <button type="button" onClick={() => window.location.href = 'box.html'}>Access Educational Resources</button>
        </div>
        <p className="quote">
          "The best way to find yourself is to lose yourself in the service of others."
          <br />
          - Mahatma Gandhi
        </p>
      </div>
      <div className="right-section">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="Slideshow"
            className="transition-image"
            style={{ opacity: index === currentImageIndex ? 1 : 0 }}
          />
        ))}
      </div>
    </div>
  );
};

export default Register;
