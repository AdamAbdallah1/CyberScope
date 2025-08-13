import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Scan from './components/Scan';
import Login from './components/Auth/Login';

const App = () => {
  return (
     <div className='min-h-screen overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 mt-10'>
      <div className='fixed top-0 -z-10 h-full w-full'>
      <div className="relative h-full w-full bg-slate-950"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div></div></div>
      <div className='container mx-auto px-8 '>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/scan" element={<Scan />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
