import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Scan from './components/Scan';
import Login from './components/Auth/Login';

const App = () => {
  return (
    <main className='flex flex-col mt-10'>
      <div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div></div>
      <Header />
      <Scan />
      <Footer />
    </main>
  )
}

export default App;
