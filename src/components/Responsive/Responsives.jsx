import React, { useState, useEffect } from "react";
import "./Responsive.scss";

const Responsives = () => {
  const [width, setWidth] = useState(1440);

  useEffect(() => {
    window.innerWidth >= 1440 && setWidth(1440);
    window.innerWidth < 1440 && window.innerWidth >= 882 && setWidth(882);
    window.innerWidth < 882 && setWidth(390);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    window.innerWidth >= 1440 && setWidth(1440);
    window.innerWidth < 1440 && window.innerWidth >= 882 && setWidth(882);
    window.innerWidth < 882 && setWidth(390);
  };

  const handleClickDesktop = () => {
    setWidth(1440);
    document.getElementById("dropdown").innerText = "Desktop";
  };

  const handleClickTablet = () => {
    setWidth(882);
    document.getElementById("dropdown").innerText = "Tablet";
  };

  const handleClickMobile = () => {
    setWidth(390);
    document.getElementById("dropdown").innerText = "Mobile";
  };

  return (
    <div className="res__wrap" style={{ width: width }}>
      <div className="res__btns">
        <button className="res__btn" onClick={handleClickDesktop}>
          <i className="fa-solid fa-display"></i>
          <span className="res__btn-text">Desktop</span>
        </button>
        <button className="res__btn" onClick={handleClickTablet}>
          <i className="fa-solid fa-tablet-screen-button"></i>
          <span className="res__btn-text">Tablet</span>
        </button>
        <button className="res__btn" onClick={handleClickMobile}>
          <i className="fa-solid fa-mobile-screen-button"></i>
          <span className="res__btn-text">Mobile</span>
        </button>
      </div>
      <div className="res__text">
        <span>Browser width: {width}px</span>
        <span>{"=>"}</span>
        <span>
          Selected: <span id="dropdown">Desktop</span>
        </span>
      </div>
      <ul className="res__list">
        <li>Home</li>
        <li>About</li>
        <li>How It Works</li>
        <li>Blog</li>
        <li>Pages</li>
        <li>Contact</li>
      </ul>
      <div className="res__box"></div>
    </div>
  );
};

export default Responsives;
