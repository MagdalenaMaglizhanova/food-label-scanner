import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      closeMenu();
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <i className="fas fa-utensils"></i>
          <span className="logo-text">HealthyLife</span>
        </div>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={closeMenu}>Начало</Link>
            </li>
            <li className="nav-item">
              <Link to="/scanner" className="nav-link" onClick={closeMenu}>Проверка на съставки</Link>
            </li>
            <li className="nav-item">
              <a
                href="https://magdalenamaglizhanova.github.io/food_recognition/"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
                onClick={closeMenu}
              >
                Разпознаване
              </a>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" onClick={closeMenu}>За нас</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" onClick={closeMenu}>Контакти</Link>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <form className="search-form" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Търсене..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="btn-search">
              <i className="fas fa-search"></i>
            </button>
          </form>
          <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
