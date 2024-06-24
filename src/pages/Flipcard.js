import React, { useState } from 'react';
import '../flipcard.css';

const FlipCard = ({ frontTextTop, frontImage, frontTextBottom, backText, backParagraph, button1Text, button2Text }) => {
    const [isFlipped, setIsFlipped] = useState(false);
  
    const handleClick = () => {
      setIsFlipped(!isFlipped);
    };
  
    return (
      <div className="flip-card card" onClick={handleClick}>
        <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
          <div className="flip-card-front ">
            <div className="flip-card-content ">
              <p className="flip-card-text-left ">{frontTextTop}</p>
              <img src={frontImage} alt="front" className="flip-card-image w-[230px] my-10" />
              <p className="flip-card-text-left ">{frontTextBottom}</p>
            </div>
          </div>
          <div className="flip-card-back">
            <div className="flip-card-content">
              <p className="flip-card-text-left">{backText}</p>
              <p className="flip-card-paragraph">{backParagraph}</p>
              <div className='d-flex justify-around'>
              <div className='cardContainer mx-2'>
              <button className="flip-card-button ">{button1Text}</button>
              </div>
              <div className='cardContainer mx-2'>
              <button className="flip-card-button">{button2Text}</button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FlipCard;
