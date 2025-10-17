import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">ishk ✧</div>
        <ul className="nav-links">
          <li><a href="#collections">Collections</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <header className="hero">
        <div className="hero-content">
          <h1>Elevate Your Glow</h1>
          <p>Timeless jewelry handcrafted to tell your story.</p>
          <button className="cta">Shop Now</button>
        </div>
      </header>

      <section id="collections" className="collections">
        <h2>Featured Collections</h2>
        <div className="collection-grid">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1603808033192-082d3d4ef04b?auto=format&fit=crop&w=600&q=80" alt="Gold Necklace" />
            <p>Golden Radiance</p>
          </div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1600180758890-6e91c2a7e0b7?auto=format&fit=crop&w=600&q=80" alt="Silver Earrings" />
            <p>Silver Serenity</p>
          </div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1580910051074-7a1f55d35b3c?auto=format&fit=crop&w=600&q=80" alt="Pearl Bracelet" />
            <p>Pearl Essence</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} ishk jewelry — crafted with love ✧</p>
      </footer>
    </div>
  );
}

export default App;
