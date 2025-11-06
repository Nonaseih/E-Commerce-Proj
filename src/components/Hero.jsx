/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 24/10/2025 - 05:05:44
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 24/10/2025
    * - Author          : fortu
    * - Modification    : 
**/
/**
 * @description : NonaSieh Kicks — Modern Sneaker Homepage (modular & humane)
 * @author      : fortu
 * @version     : 2.0.0
 */

import React, { useState } from "react";
import styles from "./styles/Hero.css";

export default function Home() {
  const [email, setEmail] = useState("");

  const featured = [
    { name: "Nebula Runner", price: "$179", img: "/images/runner.jpg" },
    { name: "Vortex High", price: "$199", img: "/images/high.jpg" },
    { name: "Aurora Low", price: "$159", img: "/images/low.jpg" },
  ];

  const services = [
    {
      id: "shipping",
      title: "Worldwide Shipping",
      text: "Fast, secure delivery to over 100+ countries.",
      color: "#3b82f6",
    },
    {
      id: "auth",
      title: "100% Authentic",
      text: "Verified by in-house experts.",
      color: "#10b981",
    },
    {
      id: "custom",
      title: "Custom Orders",
      text: "Design your dream pair — your colors, your story.",
      color: "#8b5cf6",
    },
    {
      id: "vip",
      title: "VIP Club",
      text: "30% off + early drops for loyal collectors.",
      color: "#f59e0b",
    },
  ];

  const testimonials = [
    { name: "Alex K.", text: "Best custom sneakers I’ve ever owned. 10/10." },
    { name: "Maya L.", text: "Authenticity guaranteed. Worth every penny." },
    { name: "Jordan P.", text: "Fast shipping, perfect packaging. Will buy again." },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks! We'll email ${email}`);
    setEmail("");
  };

  return (
    <main className={styles.home}>
      {/* === HERO === */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>
            <span className={styles.brand}>NonaSieh</span> Kicks
          </h1>
          <p className={styles.tagline}>Premium sneaker experiences — crafted for collectors, creators, and enthusiasts worldwide.</p>
          <div className={styles.cta}>
            <a href="/shop" className={styles.primaryBtn}>Shop Now</a>
            <a href="/custom" className={styles.secondaryBtn}>Design Yours</a>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img src="/images/sneaker-hero.png" alt="Hero Sneaker" />
        </div>
      </section>

      {/* === FEATURED === */}
      <section className={styles.featured}>
        <h2>Featured Drops</h2>
        <div className={styles.featureGrid}>
          {featured.map((shoe, i) => (
            <div key={i} className={styles.shoeCard}>
              <img src={shoe.img} alt={shoe.name} />
              <h3>{shoe.name}</h3>
              <p className={styles.price}>{shoe.price}</p>
              <a href="/shop" className={styles.shopNow}>Shop Now</a>
            </div>
          ))}
        </div>
      </section>

      {/* === SERVICES === */}
      <section className={styles.services}>
        <h2>Why Choose Us</h2>
        <div className={styles.serviceGrid}>
          {services.map((s) => (
            <div key={s.id} className={styles.serviceCard} style={{ borderTopColor: s.color }}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* === TESTIMONIALS === */}
      <section className={styles.testimonials}>
        <h2>What They Say</h2>
        <div className={styles.testimonialGrid}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles.testimonialCard}>
              <p>“{t.text}”</p>
              <span>— {t.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* === NEWSLETTER === */}
      <section className={styles.newsletter}>
        <h2>Be the First to Know</h2>
        <p>Early access. Private drops. Exclusive discounts.</p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      {/* === FOOTER === */}
      <footer className={styles.footer}>
        <p>© 2025 NonaSieh Kicks. All rights reserved.</p>
        <div className={styles.social}>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
          <a href="#">TikTok</a>
        </div>
      </footer>
    </main>
  );
}
