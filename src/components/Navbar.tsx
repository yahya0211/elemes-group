import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__image">
        <img src="/image55.png" alt="logo-image" />
      </div>
      <div>
        <div className="navbar__content">
          <div className="navbar__content--badge">HOT</div>
        </div>
        <div className="navbar__menu">
          <a href="/#" className="menu__item">
            Home
          </a>
          <a href="/#" className="menu__item">
            About
          </a>
          <a href="/#" className="menu__item ">
            Promotion
          </a>
          <a href="/#" className="menu__item ">
            Blogs
          </a>
          <a href="/#" className="menu__item ">
            Contact Us
          </a>
        </div>
      </div>
      <div className="navbar__auth">
        <div className="navbar__auth--login">Masuk</div>
        <div className="navbar__auth--register">Daftar Sekarang</div>
      </div>
    </div>
  );
};

export default Navbar;
