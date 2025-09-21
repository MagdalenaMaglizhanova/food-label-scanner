import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Scanner from './components/Scanner';
import './App.css';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Routes>
          {/* Начална страница */}
          <Route path="/" element={<Main />} />

          {/* Страница за сканиране на съставки */}
          <Route path="/scanner" element={<Scanner />} />

          {/* Други страници */}
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Страница за грешка 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

// Компоненти за другите страници
const RecipesPage: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Рецепти</h1>
      <p>Тук ще намерите здравословни и вкусни рецепти.</p>
      <div className="placeholder-content">
        <p>Страницата е в процес на разработка...</p>
      </div>
    </div>
  );
};

const AboutPage: React.FC = () => {
  return (
    <div className="page-container">
      <h1>За нас</h1>
      <p>Ние сме платформа за здравословно хранене и живот.</p>
      <div className="placeholder-content">
        <p>Страницата е в процес на разработка...</p>
      </div>
    </div>
  );
};

const ContactPage: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Контакти</h1>
      <p>Свържете се с нас за повече информация.</p>
      <div className="placeholder-content">
        <p>Страницата е в процес на разработка...</p>
      </div>
    </div>
  );
};

const NotFoundPage: React.FC = () => {
  return (
    <div className="page-container">
      <h1>404 - Страницата не е намерена</h1>
      <p>За съжаление, страницата която търсите не съществува.</p>
      <a href="/" className="btn btn-primary">Върни се към началната страница</a>
    </div>
  );
};

export default App;
