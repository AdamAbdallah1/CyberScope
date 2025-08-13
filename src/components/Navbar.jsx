import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';
import Logo from '../assets/cyberScope-logo.svg';

const Navbar = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        setUserEmail('');
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/CyberScope');
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  return (
    <header className="relative flex items-center h-16 px-4">
      {userEmail && (
        <span className="absolute left-4 text-[#A7FF18] font-semibold">
          {userEmail}
        </span>
      )}

      <img
        src={Logo}
        alt="CyberScope Logo"
        className="mx-auto"
        width={100}
      />

      <button
        onClick={handleLogout}
        className="absolute right-4 px-5 py-2 text-[#A7FF18] rounded-md border-1 transition-all duration-300 hover:shadow-[0_0_20px_10px_rgba(167,255,24,0.6)] active:scale-95"
      >
        Logout
      </button>
    </header>
  );
};

export default Navbar;
