/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 27/10/2025 - 05:48:21
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 27/10/2025
    * - Author          : fortu
    * - Modification    : 
**/
/**
 * @description : NonaSieh Kicks — Blog Page (Editorial + Street Luxury)
 * @author      : fortu
 * @version     : 1.0.0
 * @date        : 27/10/2025
 */

import React from "react";
import "../pages/styles/Blog.css";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTelegramPlane,
  FaArrowRight,
} from "react-icons/fa";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "How the Air Jordan 1 Redefined Street Prestige",
      excerpt:
        "Before the collabs and chaos, it was just leather, laces, and rebellion. Here’s how one silhouette became the blueprint for modern culture.",
      image: "https://i.pinimg.com/736x/0f/1b/0c/0f1b0cd5ca79d6694fa727e91733b10a.jpg",
      link: "",
    },
    {
      id: 2,
      title: "The Rise of Silent Luxury in Sneaker Culture",
      excerpt:
        "Flash is dead. Minimalism is the new flex. We dive into how understated designs now speak louder than logos ever did.",
      image: "https://cdn.wallpapersafari.com/14/15/Rf4ytn.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "Inside the Collector Mindset: Why We Hunt, Not Hoard",
      excerpt:
        "It’s not about owning the rarest pair — it’s about understanding why it matters. A look inside the psychology of true collectors.",
      image: "https://i.pinimg.com/736x/89/c9/9d/89c99d9e01b3d259cf725fe22bfbaacb.jpg",
      link: "#",
    },
    {
      id: 4,
      title: "From Bronx Blocks to Global Runways",
      excerpt:
        "How streetwear’s raw beginnings transformed into billion-dollar statements — without losing its pulse.",
      image: "https://c0.wallpaperflare.com/preview/943/148/889/nike-air-jordan-1-shoes-near-chain-link-fence.jpg",
      link: "#",
    },
  ];

  return (
    <section className="blog">
      {/* ===== FEATURED POST ===== */}
      <div className="featured">
        <div className="featured-text">
          <h1>The Drop Journal</h1>
          <p>
            Stories, style, and sneaker culture — straight from the underground
            to your screen. No clickbait, just craft.
          </p>
          <a href="#posts" className="btn-read">
            Read Articles <FaArrowRight />
          </a>
        </div>
        <div className="featured-image">
          <img src="https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c25lYWtlcnN8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000" alt="Featured Sneaker Story" />
        </div>
      </div>

      {/* ===== BLOG GRID ===== */}
      <div id="posts" className="blog-grid">
        {posts.map((post) => (
          <div key={post.id} className="blog-card">
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <a href={post.link} className="read-more">
                Read More <FaArrowRight />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* ===== FOOTER ===== */}
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
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaTelegramPlane /></a>
        </div>

        <p>© {new Date().getFullYear()} NonaSieh Kicks</p>
      </footer>
    </section>
  );
};

export default Blog;
