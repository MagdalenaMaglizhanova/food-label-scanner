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
                <i className="fas fa-seedling"></i>
              </div>
              <h3>Био продукти</h3>
              <p>Подкрепяте устойчивото земеделие и опазването на биоразнообразието</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-truck"></i>
              </div>
              <h3>Пакетирани храни</h3>
              <p>Голяма част от пакетираните храни съдържат изкуствени оцветители, ароматизатори и консерванти</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-medal"></i>
              </div>
              <h3>Високо качество</h3>
              <p>Биоземеделските продукти са с гарантирано високо качество и питателна стойност</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Добро за сърцето</h3>
              <p>Поддържат сърдечно-съдовата система и намаляват риска от заболявания</p>
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
                <div className="product-price">24.99 лв.</div>
                <button className="btn btn-primary">Добави в количката</button>
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
                <div className="product-price">18.50 лв.</div>
                <button className="btn btn-primary">Добави в количката</button>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <img 
                  src="https://images.unsplash.com/photo-1610966406800-20b8dae1d456?auto=format&fit=crop&q=80&w=500" 
                  alt="Зелен сок" 
                />
              </div>
              <div className="product-info">
                <h3>Зелен сок</h3>
                <p>Енергизиращ зелен сок от спанак, киви и лимон</p>
                <div className="product-price">12.99 лв.</div>
                <button className="btn btn-primary">Добави в количката</button>
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
