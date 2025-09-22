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
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          
          {/* Links Section */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Бързи връзки</h4>
            <ul className="footer-links">
              <li><Link to="/">Начало</Link></li>
              <li><Link to="/scanner">Проверка на съставки</Link></li>
              <li>
                <a
                  href="https://magdalenamaglizhanova.github.io/food_recognition/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Разпознаване на храни
                </a>
              </li>
              <li><Link to="/about">За нас</Link></li>
              <li><Link to="/contact">Контакти</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Контакти</h4>
            <div className="contact-info">
              <p><i className="fas fa-map-marker-alt"></i> гр. Пловдив, България</p>
              <p><i className="fas fa-envelope"></i> info@healthylife.bg</p>
              <p><i className="fas fa-phone"></i> +359 88 123 4567</p>
              <p><i className="fas fa-clock"></i> Пон-Пет: 9:00 - 18:00</p>
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
