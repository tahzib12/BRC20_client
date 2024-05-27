// src/Accordion.js

import React, { useState } from 'react';
import './Accordion.css';

const Accordion = ({ questions }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {questions.map((question, index) => (
        <div key={index} className="accordion-item">
          <div className="accordion-title" onClick={() => handleToggle(index)}>
            <h3>{question.title}</h3>
            <span>{activeIndex === index ? '-' : '+'}</span>
          </div>
          <div className={`accordion-content ${activeIndex === index ? 'active' : ''}`}>
            <p>{question.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
