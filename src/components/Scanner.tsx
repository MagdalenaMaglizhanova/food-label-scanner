import React from 'react';

const StreamlitFrame = () => {
  return (
    <div className="streamlit-container">
      <div className="frame-header">
        <h2>Healthy Food App</h2>
        <p>Вградено приложение за здравословно хранене</p>
      </div>
      
      <div className="frame-wrapper">
        <iframe
          src="https://healthy-food-app-c96vfmo4qmcxqzymtel3sb.streamlit.app/"
          title="Healthy Food App"
          className="streamlit-iframe"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        
        <div className="loading-message">
          Ако приложението не се зареди, моля изчакайте или 
          <a 
            href="https://healthy-food-app-c96vfmo4qmcxqzymtel3sb.streamlit.app/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            отворете в нов прозорец
          </a>
        </div>
      </div>
    </div>
  );
};

export default StreamlitFrame;
