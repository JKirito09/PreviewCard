import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import './styles/Global.css'; // global site-wide CSS

export default function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Footer />
    </>
  );
}
