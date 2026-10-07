"use client";
import { Instagram, Youtube, Twitter, Facebook, ExternalLink } from "lucide-react";

const quickLinks = [
  { label: "About University", href: "#about" },
  { label: "Academic Programs", href: "#programs" },
  { label: "Admissions 2026", href: "#contact" },
  { label: "Campus Life", href: "#campus" },
  { label: "Research", href: "#programs" },
];

const programs = [
  { label: "Engineering (B.Tech / M.Tech)", href: "#programs" },
  { label: "Management (MBA / BBA)", href: "#programs" },
  { label: "Pharmacy (B.Pharm / M.Pharm)", href: "#programs" },
  { label: "Law (BA LLB / LLB / LLM)", href: "#programs" },
  { label: "Sciences & Research", href: "#programs" },
];

const contact = [
  { label: "1800 500 5005 (Toll Free)", href: "tel:18005005005" },
  { label: "admissions@cgcuniversity.in", href: "mailto:admissions@cgcuniversity.in" },
  { label: "Sirhind Road, 12A, Mohali, Punjab 140307", href: "https://maps.google.com" },
  { label: "www.cgcuniversity.in", href: "https://www.cgcuniversity.in" },
];

const socials = [
  { icon: <Instagram size={14} />, href: "https://www.instagram.com/cgcjhanjeri/", label: "Instagram" },
  { icon: <Youtube size={14} />, href: "https://www.youtube.com/channel/UCRCS9TpYMzpvHDd9NebKTpw", label: "YouTube" },
  { icon: <Twitter size={14} />, href: "https://twitter.com/cgcjhanjeri", label: "Twitter" },
  { icon: <Facebook size={14} />, href: "https://www.facebook.com/CollegesJhanjeri", label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="nav-logo" style={{ marginBottom: "0.5rem" }}>
              <div className="nav-logo-icon">CGC</div>
              <div className="nav-logo-text">
                <span className="nav-logo-title">CGC University</span>
                <span className="nav-logo-subtitle">Mohali, Punjab</span>
              </div>
            </div>
            <p>
              One of the best universities in North India, CGC University provides high-quality
              education across Engineering, Management, Pharmacy, Law, Design, and Sciences.
              UGC recognized. Est. 2025.
            </p>
            <div className="footer-social">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="footer-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  id={`footer-social-${s.label.toLowerCase()}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="footer-col-title">Programs</h4>
            <ul className="footer-links">
              {programs.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer-col-title">Contact Us</h4>
            <ul className="footer-links">
              {contact.map((l) => (
                <li key={l.label}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <span className="footer-bottom-text">
            © {new Date().getFullYear()} CGC University, Mohali. All rights reserved.
          </span>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">NIRF Ranking</a>
            <a href="https://www.ugc.ac.in" target="_blank" rel="noopener noreferrer">
              UGC
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
