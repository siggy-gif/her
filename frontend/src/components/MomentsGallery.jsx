import React from 'react';
import { moments } from '../data/mockLetters';
import './MomentsGallery.css';

const MomentsGallery = () => {
  return (
    <div className="moments-container">
      <header className="moments-header">
        <h1 className="moments-title">Our Beautiful Moments</h1>
        <p className="moments-subtitle">Memories wrapped in poetry</p>
        <img 
          src="https://images.unsplash.com/photo-1650355648600-7dc00fed292e" 
          alt="white lily" 
          className="moments-lily"
        />
      </header>

      <div className="moments-gallery">
        {moments.map((moment) => (
          <div key={moment.id} className="moment-card">
            <div className="moment-image-container">
              <img 
                src={moment.image} 
                alt="romantic moment" 
                className="moment-image"
              />
              <div className="moment-overlay">
                <img 
                  src="https://images.unsplash.com/photo-1721275690341-d236f5946c3a" 
                  alt="lily overlay" 
                  className="moment-lily-overlay"
                />
              </div>
            </div>
            <div className="moment-text">
              <p className="moment-quote">{moment.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MomentsGallery;