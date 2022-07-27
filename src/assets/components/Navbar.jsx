import React from 'react';
import Logo from '../images/qc2020logo-mini.jpg';
import {AiOutlineMenu} from 'react-icons/ai';


const Navbar = () => {
  return (
    <div className='max-w-[1640px] flex justify-between items-center mx-auto px-6'>

      {/* Logo */}
      <div className='max-w-[9.375rem]'>
        <a href='/'>
          <img src={Logo} alt="logo"/>
        </a>
      </div>

      {/* Navbar links for desktop and laptop size screens */}
      <div className='w-[800px]'>
        <ul className='hidden md:flex justify-around text-white/90'>
          <a href='#about'><li>About</li></a>
          <a href='#matches'><li>Matches</li></a>
          <a href='#teams'><li>Teams</li></a>
          <a href='#more'><li>More</li></a>
        </ul>
      </div>

      {/* Navbar links for tablets and mobile */}
      <div>
        <AiOutlineMenu className='md:hidden text-white/90 cursor-pointer' size={20} />
      </div>

    </div>
  )
}

export default Navbar