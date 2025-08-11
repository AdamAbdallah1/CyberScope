import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Scan from './components/Scan';

const App = () => {
  return (
    <main className='flex flex-col mt-10'>
      <Header />
      <Scan />
      <Footer />
    </main>
  )
}

export default App;
