import React, { useState } from "react";
import "./Responsive.scss";

const Responsive = () => {
  const [width, setWidth] = useState(1440);

  const handleDesktopClick = () => {
    setWidth(1440);
  };
  const handleTabletClick = () => {
    setWidth(882);
  };
  const handleMobileClick = () => {
    setWidth(390);
  };

  return (
    <div className="res__wrap" style={{ width }}>
      <div className="res__btns">
        <button
          className="res__btn"
          onMouseEnter={() => setHovered("Desktop")}
          onClick={handleDesktopClick}>
          <i className="fa-solid fa-display"></i>
          <span className="res__btn-text">Desktop</span>
        </button>
        <button
          className="res__btn"
          onMouseEnter={() => setHovered("Tablet")}
          onClick={handleTabletClick}>
          <i className="fa-solid fa-tablet-screen-button"></i>
          <span className="res__btn-text">Tablet</span>
        </button>
        <button
          className="res__btn"
          onMouseEnter={() => setHovered("Mobile")}
          onClick={handleMobileClick}>
          <i className="fa-solid fa-mobile-screen-button"></i>
          <span className="res__btn-text">Mobile</span>
        </button>
      </div>
      <ul className="res__list">
        <li>Home</li>
        <li>About</li>
        <li>How It Works</li>
        <li>Blog</li>
        <li>Pages</li>
        <li>Contact</li>
      </ul>
      {/* <div className="res__box"></div> */}
      <iframe
        className="res__iframe"
        src="https://cvv-elmurod-ziyovuddinov.netlify.app"
        frameborder="0"
        width="100%"
        height="100%"></iframe>
    </div>
  );
};

export default Responsive;
