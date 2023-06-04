import React from 'react';
import "./Card.scss"

const Card = ({ cardImg,cardTitile,cardPrise,cardText, link1, link2, link3, link4, link5 }) => {
  return (
    <>
      <div className="card">
        <div className="card_img">
          <img src={cardImg} alt="card" />
        </div>
        <div className="card_body">
          <span className="card_body_title">
            <h3>{cardTitile}</h3>
            <p>{cardPrise}</p>
          </span>
          <p className="card_body_text">{cardText}</p>
          <div className="card_body_btns">
            <div className="card_body_btns_right">
              <img src={link1} alt="" />
              <img src={link2} alt="" />
              <img src={link3} alt="" />
            </div>
            <div className="card_body_btns_left">
              <span>
                <img src={link4} alt="" />
              </span>
              <div className="d-flex card_body_btns_left-get">
                <p>Get</p>
                <img src={link5} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;