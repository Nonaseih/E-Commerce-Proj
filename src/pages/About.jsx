/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 24/10/2025 - 00:20:29
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 24/10/2025
    * - Author          : fortu
    * - Modification    : 
**/
/**
 * @description : NonaSieh Kicks — About Page (Pure CSS version)
 * @author      : fortu
 * @version     : 3.0.0
 * @date        : 24/10/2025
 */

import React from "react";
import "../pages/styles/About.css";
import {NotebookTabs} from 'lucide-react';
import Header from '../components/Header';

export default function About() {
  return (
    <section className="about">
    <div>
    <h1 className="text-gold font-weigh:500;">About NSK</h1>
      </div>
        {/* ===== ORIGIN STORY ===== */}
        <div className="origin">
          <div className="origin-text"> 
            <h2>Born in the Streets, Built for the Culture</h2>
            <p>
              Founded in 2023 by a crew of sneakerheads, DJs, and street artists
              in the heart of <strong>Brooklyn</strong>, NonaSieh Kicks started
              as a late-night Discord group trading heat for passion.
            </p>
            <p>
              We saw the gap — hypebeasts paying 10× retail while real collectors
              couldn’t find clean pairs. So we said: <em>no more.</em>
            </p>
            <p>
              Today, we’re your plug for <strong>verified authentic</strong> kicks:
              grail-level Jordans to underground collabs — all at prices that don’t
              require a loan.
            </p>
          </div>
    <div className="origin-image">
  <img 
    src="/images/jrdbkg.jpg" 
    alt="Wall of exclusive sneakers" 
    className="origin-img"
  />
</div>
        </div>

        {/* ===== VALUES ===== */}
        <div className="values">
          <h2>We Stand On This</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="icon">✔</div>
              <h3>100% Authentic</h3>
              <p>
                Every pair triple-checked. Legit Check certified or your money
                back — no questions.
              </p>
            </div>

            <div className="value-card">
              <div className="icon">⚡</div>
              <h3>Lightning Drops</h3>
              <p>
                First access to limited releases. We move fast so you don’t miss out.
              </p>
            </div>

            <div className="value-card">
              <div className="icon">❤️</div>
              <h3>Community First</h3>
              <p>
                10% of profits fund local youth sneaker-design programs in NYC.
              </p>
            </div>
          </div>
        </div>

        {/* ===== STATS ===== */}
        <div className="stats">
          <div className="stat">
            <span className="number">12K+</span>
            <span className="label">Pairs Sold</span>
          </div>
          <div className="stat">
            <span className="number">9.8/10</span>
            <span className="label">Happy Collectors</span>
          </div>
          <div className="stat">
            <span className="number">30+</span>
            <span className="label">Countries Shipped</span>
          </div>
          <div className="stat">
            <span className="number">100%</span>
            <span className="label">Authenticity Rate</span>
          </div>
        </div>

        {/* ===== CALL TO ACTION ===== */}
        <div className="cta">
          <h2>Ready to Step Up Your Game?</h2>
          <p>
            Join thousands of collectors who’ve already secured their grails with
            us.
          </p>
          <div className="cta-buttons">
            <a href="/shop" className="btn primary">Shop New Drops</a>
            <a href="/contact" className="btn secondary">Join the Waitlist</a>
          </div>
        </div>

        {/* ===== FOOTER ===== */}
        <footer className="footer">
          <p>
            <span className="brand">NSK</span> — Sierra Leonean Creole for{" "}
            <em>“See it, want it.”</em>
          </p>
          <p>We don’t just sell kicks. We live this.</p>
        </footer>
    </section>
  );
}
