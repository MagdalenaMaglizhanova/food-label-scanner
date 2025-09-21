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
              Ние предлагаме решения за здравословен начин на живот.
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
            <h4 className="footer-subtitle">Връзки</h4>
            <ul className="footer-links">
              <li><Link to="/">Начало</Link></li>
              <li><Link to="/scanner">Проверка на съставки</Link></li>
              <li><Link to="/recipes">Рецепти</Link></li>
              <li><Link to="/about">За нас</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Контакти</h4>
            <div className="contact-info">
              <p><i className="fas fa-map-marker-alt"></i> гр. Пловдив</p>
              <p><i className="fas fa-envelope"></i> info@healthylife.bg</p>
              <p><i className="fas fa-phone"></i> +359 88 123 4567</p>
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