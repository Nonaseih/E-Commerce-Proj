/**
 * @description      : 
 * @author           : fortu
 * @group            : 
 * @created          : 28/10/2025 - 10:55:24
 * 
 * MODIFICATION LOG
 * - Version         : 1.1.0
 * - Date            : 30/10/2025
 * - Author          : fortu
 * - Modification    : Added Formspree JS submission (no redirect, success/error feedback)
 **/
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Home.css";
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTelegramPlane,
  FaShoppingBag,
  FaStar,
  FaUsers,
  FaArrowRight,
  FaTimes,
} from "react-icons/fa";

const Home = () => {
  const [activeService, setActiveService] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://formspree.io/f/xqaglyvq", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus({ ok: true, message: "Message sent successfully ✅" });
        e.target.reset();
      } else {
        setStatus({ ok: false, message: "Failed to send. Try again later." });
      }
    } catch (err) {
      setStatus({ ok: false, message: "Network error. Please retry." });
    } finally {
      setIsSending(false);
    }
  };

  const services = [
    {
      id: "custom-orders",
      icon: <FaShoppingBag className="icon" />,
      title: "Custom Orders",
      desc: "Bespoke sneakers engineered to embody your identity.",
      details:
        "Every pair is tailored from the ground up — from material selection to final finish. Whether it’s rare leather, bold soles, or discreet branding, your sneakers tell your story.",
      img: "https://images.squarespace-cdn.com/content/v1/559d30e7e4b0da2e9da84a1a/1753994974568-WUWO4S32PZ0O18WV2YT2/NikeAirJordan4RareAirJoseAngelFilms%C2%A9.jpg?format=1000w",
    },
    {
      id: "exclusive-releases",
      icon: <FaStar className="icon" />,
      title: "Exclusive Releases",
      desc: "Early access to limited drops — discretion guaranteed.",
      details:
        "Gain early access to ultra-limited collabs and drops. Each release is vetted for rarity, craftsmanship, and street influence — only the elite get in.",
      img: "https://wallpaperaccess.com/full/851652.jpg",
    },
    {
      id: "community",
      icon: <FaUsers className="icon" />,
      title: "Community",
      desc: "Connect with a global circle redefining street luxury.",
      details:
        "Join a global network of collectors, designers, and culture shapers. Exchange ideas, drops, and opportunities — all under one creative roof.",
      img: "https://t4.ftcdn.net/jpg/04/76/34/19/360_F_476341901_UpK0t46wLrlVdlp60ZjxRmIyuA9Npby3.jpg",
    },
  ];

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="overlay" />
        <div className="hero-content">
          <h1 className="brand">NonaSieh Kicks</h1>
          <p className="tagline">
            Curated sneaker experiences for the refined collector.
          </p>
          <div className="cta">
            <a href="/shop" className="btn solid">
              Shop Now
            </a>
            <a href="/blog" className="btn outline">
              Discover
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <h2>Our Offerings</h2>
        <div className="grid">
          {services.map((s) => (
            <div key={s.id} className="card">
              {s.icon}
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <button className="learn" onClick={() => setActiveService(s)}>
                Learn More <FaArrowRight />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICE MODAL */}
      {activeService && (
        <div className="service-modal">
          <div className="service-content">
            <button className="close-btn" onClick={() => setActiveService(null)}>
              <FaTimes />
            </button>
            <img src={activeService.img} alt={activeService.title} />
            <h2>{activeService.title}</h2>
            <p>{activeService.details}</p>
          </div>
          <div
            className="modal-backdrop"
            onClick={() => setActiveService(null)}
          />
        </div>
      )}

      {/* TESTIMONIALS */}
      <section id="testimonials" className="section testimonials">
        <h2>Voices of the Culture</h2>
        <div className="grid">
          <div className="testimonial">
            <p className="quote">
              “Every piece feels like an artifact — silent, confident, eternal.”
            </p>
            <p className="author">— Dre, Designer</p>
          </div>
          <div className="testimonial">
            <p className="quote">
              “Luxury has never looked this understated. It’s elegance with bite.”
            </p>
            <p className="author">— Kai, Collector</p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact section">
        <h2>Get in Touch</h2>
        <p className="contact-subtext">
          Questions, collaborations, or custom requests — let’s talk.
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>

          <button type="submit" className="btn solid" disabled={isSending}>
            {isSending ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p className={`form-status ${status.ok ? "success" : "error"}`}>
              {status.message}
            </p>
          )}
        </form>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <h2>NS Kicks</h2>

        <nav className="footer-links">
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="social">
          <a href="https://www.instagram.com/nona_sieh?igsh=MXYxaXJtM3dkNjUxZg==">
            <FaInstagram />
          </a>
          <a href="https://x.com/Mr_ANONVII?t=fcl-traXEKM-O27tMsfpLA&s=09">
            <FaTwitter />
          </a>
          <a href="https://youtube.com/@nonasieh?si=U3VCDpK_NkIM0phc">
            <FaYoutube />
          </a>
          <a href="t.me/Iamanonymously001">
            <FaTelegramPlane />
          </a>
        </div>

        <p>© {new Date().getFullYear()} NonaSieh Kicks</p>
      </footer>
    </div>
  );
};

export default Home;
