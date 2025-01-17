"use client";
import React, { useRef } from "react";
import { ITEM_MOCKUP } from "./data/carouselItems";
import Image from "next/image";

const Category = () => {
  const items = ITEM_MOCKUP as { name: string; count: string; img: string; bg: string }[];
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

  let isDown = false;
  let startX: number;
  let scrollLeft: number;

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isDown = true;
    if (carouselRef.current) {
      startX = e.pageX - carouselRef.current.offsetLeft;
      scrollLeft = carouselRef.current.scrollLeft;
      carouselRef.current.style.cursor = 'grabbing';
    }
  };

  const handleMouseLeave = () => {
    isDown = false;
    if (carouselRef.current) {
      carouselRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseUp = () => {
    isDown = false;
    if (carouselRef.current) {
      carouselRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDown) return;
    e.preventDefault();
    if (carouselRef.current) {
      const x = e.pageX - carouselRef.current.offsetLeft;
      const walk = (x - startX) * 2; // Adjust the scroll speed
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };


  return (
    <>
      <div>
        <div className="category">
          <h1 className="welcome-section__items--bold welcome-section__items-rating">Browser Our Category</h1>
          <h1 className="welcome-section__items--text-green welcome-section__items--2xl">Receipt</h1>

          <div className="category__items" ref={carouselRef} onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}>
            {items.map((item, index) => (
              <div className="" key={index}>
                <div className={`category__items--border ${item.bg}`}>
                  <div>
                    <Image src={item.img} alt={item.name} height={50} width={50} className="category__items--images" />
                  </div>
                  <div>{item.name}</div>
                  <div>{item.count}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="category__items--button category__button--hidden">
            <div className="navbar__auth--register" onClick={handlePrev}>
              <Image src="/Group391(2).png" height={50} width={50} alt="left-button" className="category__items--carousel" /> PREV
            </div>
            <div className="navbar__auth--register" onClick={handleNext}>
              NEXT
              <Image src="/Group391(1).png" height={50} width={50} alt="left-button" className="category__items--carousel" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
