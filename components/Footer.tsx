import Link from "next/link";
import {
  InstagramIcon,
  YouTubeIcon,
  TwitterXIcon,
  FacebookIcon,
  WhatsAppIcon,
  MailIcon,
  MapPinIcon,
  SparkleIcon,
  TrendingUpIcon,
  CheckCircleIcon,
} from "@/components/Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Top Highlights Banner */}
      <div className="footer-highlights">
        <div className="footer-hl-item">
          <TrendingUpIcon size={16} className="footer-hl-icon" />
          <span><strong>2M+</strong> All-Time Reach</span>
        </div>
        <div className="footer-hl-dot" />
        <div className="footer-hl-item">
          <SparkleIcon size={14} className="footer-hl-icon" />
          <span><strong>340K</strong> Avg. Reel Views</span>
        </div>
        <div className="footer-hl-dot" />
        <div className="footer-hl-item">
          <CheckCircleIcon size={16} className="footer-hl-icon" />
          <span><strong>5+</strong> Brand Collaborations</span>
        </div>
        <div className="footer-hl-dot" />
        <div className="footer-hl-item">
          <MapPinIcon size={15} className="footer-hl-icon" />
          <span>Hathras, Uttar Pradesh, India</span>
        </div>
      </div>

      <div className="footer-inner">
        {/* Brand Column */}
        <div className="footer-brand-col">
          <Link href="/" className="footer-brand-name">
            APOORVA KAUSHAL
          </Link>
          <p className="footer-brand-desc">
            Social Media Creator &amp; Digital Content Creator based in Hathras, Uttar Pradesh, India. Specializing in authentic Hindi comedy, parody skits, educational explainers, and devotional Krishna content.
          </p>
          <div className="footer-socials">
            <a
              href="https://instagram.com/apoorva__kaushal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram (@apoorva__kaushal)"
              className="social-btn"
              title="Instagram"
            >
              <InstagramIcon size={16} />
            </a>
            <a
              href="https://youtube.com/@_apoorva7__"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube (@_apoorva7__)"
              className="social-btn"
              title="YouTube"
            >
              <YouTubeIcon size={16} />
            </a>
            <a
              href="https://twitter.com/apoorva_kaushal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="social-btn"
              title="X (Twitter)"
            >
              <TwitterXIcon size={15} />
            </a>
            <a
              href="https://facebook.com/apoorva_kaushal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="social-btn"
              title="Facebook"
            >
              <FacebookIcon size={16} />
            </a>
            <a
              href="https://wa.me/919368153189?text=Hi%20Apoorva%2C%20I%20visited%20your%20website%20and%20would%20love%20to%20collaborate!"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp (+91 9368153189)"
              className="social-btn"
              title="WhatsApp"
            >
              <WhatsAppIcon size={16} />
            </a>
            <a
              href="mailto:apoorva@hmorix.in"
              aria-label="Email (apoorva@hmorix.in)"
              className="social-btn"
              title="Email"
            >
              <MailIcon size={16} />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-col">
          <div className="footer-col-title">Navigation</div>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Apoorva</Link></li>
            <li><Link href="/#work">Portfolio &amp; Work</Link></li>
            <li><Link href="/services">Services &amp; Pricing</Link></li>
            <li><Link href="/case-studies">Case Studies</Link></li>
            <li><Link href="/dashboard">Account Dashboard</Link></li>
            <li><Link href="/#gallery">Interactive Gallery</Link></li>

          </ul>
        </div>

        {/* Services Column */}
        <div className="footer-col">
          <div className="footer-col-title">Services</div>
          <ul>
            <li><Link href="/services">Social Media Management</Link></li>
            <li><Link href="/services">Content Creation &amp; UGC</Link></li>
            <li><Link href="/services">Meta &amp; Instagram Ads</Link></li>
            <li><Link href="/services">Brand Collaboration</Link></li>
            <li><Link href="/services">SEO &amp; Copywriting</Link></li>
            <li><Link href="/services">Krishna Devotional Content</Link></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="footer-col">
          <div className="footer-col-title">Get in Touch</div>
          <ul className="footer-contact-list">
            <li>
              <Link href="/hire" className="footer-hire-link">
                <SparkleIcon size={13} />
                <span>Hire Me</span>
              </Link>
            </li>
            <li>
              <Link href="/contact" className="footer-icon-link">
                <span>Contact Form</span>
              </Link>
            </li>
            <li>
              <a href="mailto:apoorva@hmorix.in" className="footer-icon-link">
                <MailIcon size={14} />
                <span>apoorva@hmorix.in</span>
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/919368153189?text=Hi%20Apoorva!"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon-link"
              >
                <WhatsAppIcon size={14} />
                <span>+91 9368153189</span>
              </a>
            </li>
            <li>
              <Link href="/contact" className="footer-icon-link">
                <MapPinIcon size={14} />
                <span>Hathras, UP, India (204101)</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">
          &copy; {year} Apoorva Kaushal. All rights reserved. Content Creator &amp; Social Media Creator &middot; Hathras, Uttar Pradesh, India.
        </p>
        <div className="footer-legal">
          <Link href="/terms">Terms of Service</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/legal">Legal Notice</Link>
        </div>
      </div>
    </footer>
  );
}
