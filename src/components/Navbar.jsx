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

      
          
    </header>
  );
};

export default Navbar;
