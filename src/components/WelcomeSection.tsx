import React from "react";
import { FaStar } from "react-icons/fa";

const WelcomeSection = () => {
  return (
    <>
      <div className="welcome-section">
        <div className="welcome-section__items">
          <div className="welcome-section__items--text">
            <h1 className="welcome-section__items--title">
              Good Food Us <span>Good Mood</span>
            </h1>
            <h1 className="welcome-section__items--description">I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.</h1>
            <div className="welcome-section__items--button">
              <button className="navbar__auth--register">Daftar Sekarang</button>
              <button className="welcome-section__items--button">About Us</button>
            </div>
          </div>
        </div>
        <div className="welcome-section__items welcome-section__items--image">
          <img src="/image(1).png" alt="welcome-image" className="welcome-section__items--image1" />
          <div className="welcome-section__items--border">
            <img src="/image(1).png" alt="info-image" className="welcome-section__items--text-green" />
            <div className="welcome-section__items--subborder">
              <div className="welcome-section__items--bold">Green Salad Tomato</div>
              <div className="welcome-section__items-rating1">Tomato</div>
              <div className="navbar__content welcome-section__items-rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar className="welcome-section__items-rating1" />
              </div>
            </div>
          </div>
        </div>
        <h1 className="welcome-section__items--description2">I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.</h1>
            <div className="welcome-section__items--button2">
              <button className="navbar__auth--register">Daftar Sekarang</button>
              <button className="welcome-section__items--button2">About Us</button>
            </div>
      </div>
    </>
  );
};

export default WelcomeSection;
