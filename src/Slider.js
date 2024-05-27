import React from 'react';
import './Slider.css'; // Import the CSS file

const ScrollingContent = () => {
  return (
    <div className="scroll-container">
      <div className="scroll-content">
        <span className="item">
          <img className='h-100' src="https://cdn.pixabay.com/photo/2022/07/06/03/14/earth-7304233_1280.png" alt="Item 1" />
        </span>
        <span className="item">
          <img className='h-100' src="https://cdn.pixabay.com/photo/2022/07/06/03/14/earth-7304233_1280.png" alt="Item 2" />
        </span>
        <span className="item">
          <img className='h-100' src="https://cdn.pixabay.com/photo/2022/07/06/03/14/earth-7304233_1280.png" alt="Item 3" />
        </span>
        <span className="item">
          <img className='h-100' src="https://cdn.pixabay.com/photo/2022/07/06/03/14/earth-7304233_1280.png" alt="Item 4" />
        </span>
        {/* Repeat the same content for continuous scrolling */}
        <span className="item">
          <img className='h-100' src="https://cdn.pixabay.com/photo/2022/07/06/03/14/earth-7304233_1280.png" alt="Item 1" />
        </span>
        <span className="item">
          <img className='h-100' src="https://cdn.pixabay.com/photo/2022/07/06/03/14/earth-7304233_1280.png" alt="Item 2" />
        </span>
        <span className="item">
          <img className='h-100' src="https://cdn.pixabay.com/photo/2022/07/06/03/14/earth-7304233_1280.png" alt="Item 3" />
        </span>
        <span className="item">
          <img className='h-100' src="https://cdn.pixabay.com/photo/2022/07/06/03/14/earth-7304233_1280.png" alt="Item 4" />
        </span>
      </div>
    </div>
  );
};

export default ScrollingContent;
