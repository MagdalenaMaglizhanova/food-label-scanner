import React from 'react';

const Main: React.FC = () => {
  return (
    <main className="main">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Здравословен начин на живот</h1>
          <div className="hero-buttons">
            <button className="btn btn-secondary">Научи повече</button>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1000" 
            alt="Здравословни храни" 
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Защо е важно да се храните здравословно?</h2>
          <div className="features-grid">
            <div className="feature">
              <i className="fas fa-seedling"></i>
              <h3>Био продукти</h3>
              <p>Подкрепяте устойчивото земеделие и опазването на биоразнообразието</p>
            </div>
            <div className="feature">
              <i className="fas fa-truck"></i>
              <h3>Пакетирани храни</h3>
              <p>Голяма част от пакетираните храни съдържат изкуствени оцветители, ароматизатори и консерванти</p>
            </div>
            <div className="feature">
              <i className="fas fa-medal"></i>
              <h3>Високо качество на биоземеделието</h3>
              <p>Високо качество</p>
            </div>
            <div className="feature">
              <i className="fas fa-heart"></i>
              <h3>Кое е добре за сърцето</h3>
              <p>Поддържат сърдечно-съдовата система</p>
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
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=500" 
                  alt="Суперхрани микс" 
                />
              </div>
              <div className="product-info">
                <h3>Суперхрани микс</h3>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <img 
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=500" 
                  alt="Органичн" 
                />
              </div>
              <div className="product-info">
                <h3>Органични</h3>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <img 
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=500" 
                  alt="Зелен сок" 
                />
              </div>
              <div className="product-info">
                <h3>Зелен сок</h3>
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
              <input type="email" placeholder="Вашият email адрес" />
              <button type="submit" className="btn btn-primary">Абонирай се</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
