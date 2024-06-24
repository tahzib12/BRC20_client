import React from 'react';
import './Footer.css'; // Ensure you create and import the corresponding CSS file

const Footer = () => {
  return (
    <footer className="footer border-t-2 border-red-600">
      <div className="footer-container  py-5">
        <div className="footer-logo">
          <h2>PYTH</h2>
        </div>
        <div className="footer-column">
          <h3>Price Feeds</h3>
          <ul>
            <li>Benchmarks</li>
            <li>Publishers</li>
            <li>Consumers</li>
            <li>Node Providers</li>
            <li>Staking</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>About</h3>
          <ul>
            <li>Stats</li>
            <li>Ranking</li>
            <li>Developers</li>
            <li>Documentation</li>
            <li>Media Room</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Blog</h3>
          <ul>
            <li>Jobs</li>
            <li>Disclaimer</li>
            <li>Brand Assets</li>
            <li>Blockchain Guides</li>
            <li>Data Driven</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Press</h3>
          <ul>
            <li>Comparison</li>
            <li>Bug Bounty</li>
            <li>Security Audits</li>
            <li>Contact</li>
            <li>Airdrop</li>
          </ul>
        </div>
      </div>
          <div className="footer-bottom">
            <p>&copy; 2023 Pyth Network</p>
          </div>
    </footer>
  );
};

export default Footer;
