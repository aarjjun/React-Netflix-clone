import React from 'react';
import YouTube from 'react-youtube';
import './TrailerOverlay.css';

function TrailerOverlay({ videoId, onClose }) {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="trailer-overlay">
      <div className="trailer-content">
        <YouTube opts={opts} videoId={videoId} />
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default TrailerOverlay;