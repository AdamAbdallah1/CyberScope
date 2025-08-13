import React from 'react'
import Logo from '.././assets/cyberScope-logo.svg';


const Navbar = () => {
  return (
    <header className='flex justify-center items-center'>
        <img src={Logo} width={100} alt="CyberScope Logo" />
    </header>
  )
}

export default Navbar