import React from 'react';

const Main: React.FC = () => {
  return (
    <main className="main">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Здравословен начин на живот</h1>
              <p>Открийте силата на природните храни и подобрете здравето си с нашите продукти и съвети</p>
              <div className="hero-buttons">
                <button className="btn btn-primary">Разгледай продукти</button>
                <button className="btn btn-secondary">Научи повече</button>
              </div>
            </div>
            <div className="hero-image">
              <img 
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1000" 
                alt="Здравословни храни" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Защо е важно да се храните здравословно?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="#4CAF50">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 5.5V7H9V5.5L3 7V9L5 9.5V15.5L3 16V18L5 18.5L12 21L19 18.5L21 18V16L19 15.5V9.5L21 9Z"/>
                </svg>
              </div>
              <h3>Био продукти</h3>
              <p>Подкрепяте устойчивото земеделие и опазването на биоразнообразието</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="#4CAF50">
                  <path d="M19 7H5V5H19V7M19 11H5V9H19V11M19 15H5V13H19V15M19 19H5V17H19V19Z"/>
                </svg>
              </div>
              <h3>Пакетирани храни</h3>
              <p>Голяма част от пакетираните храни съдържат изкуствени оцветители, ароматизатори и консерванти</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="#4CAF50">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
              </div>
              <h3>Високо качество</h3>
              <p>Биоземеделските продукти са с гарантирано високо качество и питателна стойност</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="#4CAF50">
                  <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"/>
                </svg>
              </div>
              <h3>Добро за сърцето</h3>
              <p>Поддържат сърдечно-съдовата система и намаляват риска от заболявания</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="features" style={{background: '#f8f9fa'}}>
        <div className="container">
          <h2 className="section-title">Ние предлагаме иновативни решения за здравословен начин на живот</h2>
          <p style={{textAlign: 'center', marginBottom: '3rem', fontSize: '1.1rem', color: '#666'}}>
            Включително разпознаване на храни и анализ на хранителната им стойност
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="#4CAF50">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3>Разпознаване на храни</h3>
              <p>Интелигентно разпознаване на храни чрез камера на смартфона</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="#4CAF50">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                </svg>
              </div>
              <h3>Анализ на хранителна стойност</h3>
              <p>Подробна информация за калории, протеини, въглехидрати и мазнини</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="#4CAF50">
                  <path d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"/>
                </svg>
              </div>
              <h3>Персонализирани препоръки</h3>
              <p>Съвети за хранене според вашите нужди и цели</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="#4CAF50">
                  <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"/>
                </svg>
              </div>
              <h3>Дневник на храненето</h3>
              <p>Проследявайте прием на храна и постигайте здравословни цели</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products">
        <div className="container">
          <h2 className="section-title">Нашите популярни продукти</h2>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image">
                <img 
                  src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=500" 
                  alt="Суперхрани микс" 
                />
              </div>
              <div className="product-info">
                <h3>Суперхрани микс</h3>
                <p>Богата смес от суперхрани за ежедневна употреба</p>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <img 
                  src="https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&q=80&w=500" 
                  alt="Органични зеленчуци" 
                />
              </div>
              <div className="product-info">
                <h3>Органични зеленчуци</h3>
                <p>Пресни био зеленчуки от местни производители</p>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <img 
                  src="https://images.pexels.com/photos/4113830/pexels-photo-4113830.jpeg?auto=compress&cs=tinysrgb&w=500" 
                  alt="Зелен сок" 
                />
              </div>
              <div className="product-info">
                <h3>Зелен сок</h3>
                <p>Енергизиращ зелен сок от спанак, киви и лимон</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h2>Абонирай се за нашия бюлетин</h2>
            <p>Получавай ексклузивни оферти и здравословни съвети</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Вашият email адрес" required />
              <button type="submit" className="btn btn-primary">Абонирай се</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
