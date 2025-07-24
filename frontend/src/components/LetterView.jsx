import React, { useEffect, useState } from 'react';
import './LetterView.css';

const LetterView = ({ letter, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <div className={`letter-overlay ${isVisible ? 'visible' : ''}`}>
      <div className="letter-container">
        <button className="close-btn" onClick={handleClose}>
          ✕
        </button>
        
        <div className="letter-paper">
          <div className="letter-header">
            <img 
              src="https://images.unsplash.com/photo-1650355648600-7dc00fed292e" 
              alt="lily decoration" 
              className="letter-lily-decoration"
            />
            <h2 className="letter-title">{letter.title}</h2>
          </div>
          
          <div className="letter-content">
            {letter.content.split('\n').map((paragraph, index) => (
              <p key={index} className="letter-paragraph">
                {paragraph}
              </p>
            ))}
          </div>
          
          <div className="letter-footer">
            <img 
              src="https://images.unsplash.com/photo-1522248053824-07f955114b0f" 
              alt="lily decoration" 
              className="letter-lily-footer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetterView;