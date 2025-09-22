import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* About Section */}
          <div className="footer-section">
            <h3 className="footer-title">HealthyLife</h3>
            <p className="footer-description">
              Ние предлагаме иновативни решения за здравословен начин на живот, 
              включително разпознаване на храни и анализ на хранителната им стойност.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.25 14.816 3.76 13.665 3.76 12.368s.49-2.448 1.366-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.875.875 1.366 2.026 1.366 3.323s-.491 2.448-1.366 3.323c-.875.807-2.026 1.297-3.323 1.297zm8.062-10.966c-.557 0-1.008-.451-1.008-1.008s.451-1.008 1.008-1.008 1.008.451 1.008 1.008-.451 1.008-1.008 1.008zm2.269 10.966c-1.019 0-1.846-.827-1.846-1.846s.827-1.846 1.846-1.846 1.846.827 1.846 1.846-.827 1.846-1.846 1.846z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Links Section */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Бързи връзки</h4>
            <ul className="footer-links">
              <li>
                <Link to="/" className="footer-link">
                  <span className="link-icon">🏠</span>
                  Начало
                </Link>
              </li>
              <li>
                <Link to="/scanner" className="footer-link">
                  <span className="link-icon">🔍</span>
                  Проверка на съставки
                </Link>
              </li>
              <li>
                <a
                  href="https://magdalenamaglizhanova.github.io/food_recognition/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  <span className="link-icon">📷</span>
                  Разпознаване на храни
                </a>
              </li>
              <li>
                <Link to="/about" className="footer-link">
                  <span className="link-icon">👥</span>
                  За нас
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  <span className="link-icon">📞</span>
                  Контакти
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Контакти</h4>
            <div className="contact-info">
              <p>
                <span className="contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </span>
                гр. Пловдив, България
              </p>
              <p>
                <span className="contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </span>
                info@healthylife.bg
              </p>
              <p>
                <span className="contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </span>
                +359 88 123 4567
              </p>
              <p>
                <span className="contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                </span>
                Пон-Пет: 9:00 - 18:00
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; 2025 HealthyLife. Всички права запазени.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
