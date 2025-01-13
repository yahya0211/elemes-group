"use client";
import React, { useRef } from "react";
import { ITEM_MOCKUP } from "./carouselItems";
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";

const Category = () => {
  const items = ITEM_MOCKUP as { name: string; count: number; img: string, bg: string }[];
  const carouselRef = useRef<HTMLDivElement>(null);
  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
    }
  };
  const handleScroll = (event: React.WheelEvent) => {
    if (carouselRef.current) {
      event.preventDefault();
      carouselRef.current.scrollLeft += event.deltaY;
    }
  };
  return (
    <>
      <div>
        <div className="category">
          <h1 className="welcome-section__items--bold welcome-section__items-rating">Browser Our Category</h1>
          <h1 className="welcome-section__items--image2 welcome-section__items--2xl">Receipt</h1>
          <div className="category__items" ref={carouselRef} onWheel={handleScroll}>
            {items.map((item, index) => (
              <div className="" key={index}>
                <div className={`category__items--border ${item.bg}`}>
                  <div>
                    <img src={item.img} alt={item.name} className="category__items--images" />
                  </div>
                  <div>{item.name}</div>
                  <div>{item.count}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="category__items--button">
            <div className="navbar__auth--register" onClick={handlePrev}>
              <img src="Group391(2).png" alt="left-button" className="category__items--carousel" /> PREV
            </div>
            <div className="navbar__auth--register" onClick={handleNext}>
              NEXT
              <img src="Group391(1).png" alt="left-button" className="category__items--carousel" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;