import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer category__items--bgclr4">
        <div className="footer__items1">
          <div className="navbar__image">
            <img src="/image55.png" alt="logo-image" />
          </div>{" "}
          <div>Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950</div>
          <img src="/Frame442.png" alt="contact-image" className="footer__items--image" />
        </div>
        <div className="footer__items2">
          <div className="welcome-section__items--bold">Categories</div>
          <div className="footer__items2--font">
            <div>Cupcake</div>
            <div>Pizza</div>
            <div>Kebab</div>
            <div>Salmon</div>
            <div>Doughnut</div>
          </div>
        </div>
        <div className="footer__items2">
          <div className="welcome-section__items--bold">About Us</div>
          <div className="footer__items2--font">
            <div>About Us</div>
            <div>FAQ</div>
            <div>Report Problem</div>
          </div>
        </div>
        <div className="footer__items2">
          <div className="welcome-section__items--bold">Newsletter</div>
          <div className="footer__items2--font">
            <div>Get now free 50% discount for alll products on your first order</div>
            <div className="footer__items--email">
              <input type="email" placeholder="Your email address" className="footer__items--email1" />
              <button className="footer__items--button">SEND</button>
            </div>{" "}
            <div className="footer__items3">
              <img src="/Vector.png" alt="" />
              elemesid@gmail.com
            </div>
            <div className="footer__items3">
              <img src="/Vector(1).png" alt="" />
              0888 1111 2222{" "}
            </div>
          </div>
        </div>
      </div>
      <h4 className="footer__text">© 2021 Elemes id. All rights reserved</h4>
    </>
  );
};

export default Footer;
