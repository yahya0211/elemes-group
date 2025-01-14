import React from "react";
import { TRENDING_ITEMS } from "./data/trendingItems";
import { FaStar } from "react-icons/fa";

const Trending = () => {
  const items = TRENDING_ITEMS as { image: string; title: string; name: string; rating: number; bg: string }[];
  const maxRating = 5;
  return (
    <>
      <div className="trending">
        <div>
          <h1 className="welcome-section__items--bold welcome-section__items-rating">Browser Our Trending</h1>
          <h1 className="welcome-section__items--text-green welcome-section__items--2xl">Receipt</h1>
        </div>
        <div className="trending__items">
          {items.map((item, index) => (
            <div className={`category__items--border trending__items--border ${item.bg}`} key={index}>
              <img src={item.image} alt="item-image" className="category__items--images" />
              <h1 className="trending__items--item--title welcome-section__items--bold ">{item.name}</h1>
              <h1 className="trending__items--item--name welcome-section__items--text-green ">{item.title}</h1>
              <div className="welcome-section__items-rating">
                {Array.from({ length: maxRating }, (_, index) => (
                  <FaStar key={index} className={index < item.rating ? "welcome-section__items-rating" : "welcome-section__items-rating1"} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="navbar__auth--register trending__button">
            <div>ALL Recipes</div>
        </div>
      </div>
    </>
  );
};

export default Trending;
