import React from 'react';
import './Hero.css';
import homeImage2 from './home-img-2.jpg'; // Adjust the path accordingly

const Hero = () => {
  return (
    <div className="home-hero">
      <div className="hero-container">
        <div className="content">
          <div className="text-content">
            <h1 className="heading">Connecting you with local job opportunities</h1>
            <div className="card-container">
              <div className="card">
                <div className="card-body">
                  <p className="card-text">
                    A platform dedicated to helping individuals in need find employment opportunities nearby.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <p className="card-text">
                    Whether you are looking for full-time, part-time, or temporary work, we are here to assist you.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <p className="card-text">
                    Our mission is to bridge the gap between job seekers and employers.
                  </p>
                </div>
              </div>
            </div>
            <div className="button-container">
              <button className="button" onClick={() => window.location.href = 'green.html'}>
                Start your journey now!
              </button>
            </div>
          </div>
          <div className="image-content">
            <img src={homeImage2} alt="Home" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
