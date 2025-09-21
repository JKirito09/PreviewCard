import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <small>© { new Date().getFullYear() } My Shop. All rights reserved.</small>
    </footer>
  );
}
