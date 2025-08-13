import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';
import Logo from '../assets/cyberScope-logo.svg';
import { IoIosMenu } from 'react-icons/io';

const Navbar = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

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
    <header className="relative flex items-center h-20 px-4">
      <img
        src={Logo}
        alt="CyberScope Logo"
        className="mx-auto"
        width={100}
      />

      <button
        className="absolute right-4 md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <IoIosMenu size={28} className="text-[#A7FF18]" />
      </button>

      <nav
        className={`absolute top-full right-0 mt-2 w-48 border border-gray-700 rounded-md shadow-lg md:hidden transition-all duration-300 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col p-4 gap-3">
          {userEmail && (
            <li className="text-[#A7FF18] truncate">{userEmail}</li>
          )}
          <li>
            <button
              onClick={handleLogout}
              className="w-full text-[#A7FF18] hover:text-white"
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
