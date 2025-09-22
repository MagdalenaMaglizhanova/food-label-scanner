import React, { useState } from "react";

const Scanner: React.FC = () => {
  const [isFrameVisible, setIsFrameVisible] = useState(false);

  const toggleFrameVisibility = () => {
    setIsFrameVisible(!isFrameVisible);
  };

  return (
    <div className="scanner-container">
      <div className="scanner-card">
        <h2 className="scanner-title">
          <i className="fas fa-camera"></i> Засичане на вредни съставки
        </h2>
        <p className="scanner-description">
          Натиснете бутона по-долу, за да отворите анализатора на хранителни продукти.
        </p>

        <button
          onClick={toggleFrameVisibility}
          className="scan-button"
        >
          {isFrameVisible ? (
            <>
              <i className="fas fa-times"></i> Затвори анализатора
            </>
          ) : (
            <>
              <i className="fas fa-search"></i> Отвори анализатора
            </>
          )}
        </button>

        {isFrameVisible && (
          <div className="frame-container">
            <iframe
              src="https://healthy-food-app-c96vfmo4qmcxqzymtel3sb.streamlit.app/"
              width="100%"
              height="600"
              frameBorder="0"
              allowFullScreen
              title="Анализатор на хранителни продукти"
              className="streamlit-frame"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Scanner;
