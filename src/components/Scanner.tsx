import React from 'react';

const Scanner: React.FC = () => {
  return (
    <section className="features" style={{background: '#fff'}}>
      <div className="container">
        <h2 className="section-title">Интелигентен анализатор на храни</h2>
        <p style={{textAlign: 'center', marginBottom: '3rem', fontSize: '1.1rem', color: '#666'}}>
          Използвайте нашия инструмент за разпознаване и анализ на хранителната стойност
        </p>
        
        <div style={{
          width: '95%', // Променено от 100% на 95% за по-добро центриране
          maxWidth: '1200px', // Увеличена максимална ширина
          margin: '0 auto',
          height: '800px', // Увеличена височина
          borderRadius: '10px',
          overflow: 'hidden',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e0e0e0'
        }}>
          <iframe
            src="https://healthy-food-app-c96vfmo4qmcxqzymtel3sb.streamlit.app/?embed=true"
            title="Healthy Food App"
            style={{
              width: '100%',
              height: '100%',
              border: 'none'
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="eager" // Добавено за по-бързо зареждане
            onError={(e) => {
              console.error('Грешка при зареждане на iframe:', e);
              // Можете да добавите fallback съдържание тук
            }}
          />
        </div>

        <div style={{
          textAlign: 'center',
          marginTop: '1rem',
          padding: '1rem',
          color: '#666',
          fontSize: '0.9rem'
        }}>
          <p style={{margin: 0}}>
            Ако приложението не се зареди, моля изчакайте или{' '}
            <a 
              href="https://healthy-food-app-c96vfmo4qmcxqzymtel3sb.streamlit.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: '#4CAF50',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
            >
              отворете в нов прозорец
            </a>
          </p>
        </div>

        <div className="features-grid" style={{marginTop: '3rem'}}>
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="#4CAF50">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3>Автоматично разпознаване</h3>
            <p>Качете снимка и нашият алгоритъм ще разпознае храната автоматично</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="#4CAF50">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
              </svg>
            </div>
            <h3>Подробен анализ</h3>
            <p>Получете подробна информация за хранителната стойност на всяка храна</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="#4CAF50">
                <path d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"/>
              </svg>
            </div>
            <h3>Персонализирани съвети</h3>
            <p>Получавайте препоръки според вашите хранителни нужди</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scanner;
