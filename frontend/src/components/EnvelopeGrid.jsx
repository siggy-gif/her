import React, { useState, useEffect } from 'react';
import { letters } from '../data/mockLetters';
import './EnvelopeGrid.css';

const EnvelopeGrid = ({ onLetterSelect }) => {
  const [openingEnvelope, setOpeningEnvelope] = useState(null);

  const handleEnvelopeClick = (letter) => {
    setOpeningEnvelope(letter.id);
    
    // Delay opening to show animation
    setTimeout(() => {
      setOpeningEnvelope(null);
      onLetterSelect(letter);
    }, 800);
  };

  return (
    <div className="envelope-container">
      <header className="app-header">
        <h1 className="app-title">Open When...</h1>
        <p className="app-subtitle">A Box of Us</p>
        <img 
          src="https://images.unsplash.com/photo-1650355648600-7dc00fed292e" 
          alt="white lily" 
          className="header-lily"
        />
      </header>

      <div className="envelopes-grid">
        {letters.map((letter) => (
          <div
            key={letter.id}
            className={`envelope ${openingEnvelope === letter.id ? 'opening' : ''}`}
            onClick={() => handleEnvelopeClick(letter)}
          >
            <div className="envelope-front">
              <div className="envelope-flap"></div>
              <div className="envelope-body">
                <div className="envelope-title">
                  {letter.title}
                </div>
                <div className="envelope-decoration">
                  <img 
                    src="https://images.unsplash.com/photo-1721275690341-d236f5946c3a" 
                    alt="lily decoration" 
                    className="envelope-lily"
                  />
                </div>
              </div>
            </div>
            
            {openingEnvelope === letter.id && (
              <div className="envelope-opening-animation">
                <div className="letter-peek">
                  <div className="letter-content-preview">
                    {letter.content.substring(0, 50)}...
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnvelopeGrid;