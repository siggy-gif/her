import React, { useEffect, useRef } from 'react';
import './MusicToggle.css';

const MusicToggle = ({ isPlaying, onToggle }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(e => {
          console.log('Audio play failed:', e);
          // Fallback for browsers that require user interaction
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div className="music-toggle">
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        {/* Using a royalty-free alternative since we can't include actual Bensound files */}
        <source src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjiR1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmNcBjiR1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjiR1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjiS1/LNdysFJHfH8N+QQAoUXrPp66dVFApGn+PzvmAcBz2a2/LDdCQOLIDN8diPNwgZaLvu559NEAxQqePztWMcBzuR1/LNeSwFJHfH8N6QQAoUXrPq66pUFApDn+TyvmEcBjuR1/LNeywEJHfH8N6QQAoUXrPqq6xUEwlDn+TyvmEcBjuR1/LNeywEJHfH8N6QQAoUXrPqq6xUEwlDn+TyvmEcBjuR1/LNeywEJHfH8N6QQAoUXrPqq6xUEwlDn+TyVmEcBjuS1/LNdCwEJHfH8N+RQAoUX7PpAAvJiK3sTBE8rHAoqRVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZatvt559MEAxAq+PwtmMcBjiRhv7OeisJHHeH8N2QQAoUXbUp66hVFApGn+DvvmMcBjiS1/LP4+xSFApGn+DyNZu0xC" type="audio/wav" />
      </audio>
      
      <button 
        className={`music-btn ${isPlaying ? 'playing' : ''}`}
        onClick={() => onToggle(!isPlaying)}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        <div className="music-icon">
          {isPlaying ? (
            <div className="pause-icon">
              <div className="pause-bar"></div>
              <div className="pause-bar"></div>
            </div>
          ) : (
            <div className="play-icon">
              <div className="play-triangle"></div>
            </div>
          )}
        </div>
        <span className="music-label">
          {isPlaying ? 'Pause' : 'Play'} Music
        </span>
      </button>
    </div>
  );
};

export default MusicToggle;