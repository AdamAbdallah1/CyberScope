import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Scan from './components/Scan';

const App = () => {
  return (
    <>
      <Header />
      <Scan />
      <Footer />
    </>
  )
}

export default App;
