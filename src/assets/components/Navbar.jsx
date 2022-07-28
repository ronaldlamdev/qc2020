import React from 'react';
import Logo from '../images/qc2020logo-mini-new.png';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';


const Navbar = () => {
  return (
    <div className='max-w-[1260px] w-full max-h-[100px] flex justify-between items-center mx-auto mt-5 px-2 bg-black/30 rounded-xl border border-gray-100 shadow-lg'>

      {/* Logo */}     
      <a href='/'>
        <img className='max-w-[200px] max-h-[120px]' src={Logo} alt="logo"/>
      </a>

      {/* Navbar links for desktop and laptop size screens */}
      <div className='w-[800px]'>
        <ul className='hidden md:flex justify-around text-white/90'>
          <a className='hover:underline hover:underline-offset-3' href='#about'><li>About</li></a>
          <a className='hover:underline hover:underline-offset-3' href='#matches'><li>Matches</li></a>
          <a className='hover:underline hover:underline-offset-3' href='#teams'><li>Teams</li></a>
          <a className='hover:underline hover:underline-offset-3' href='#more'><li>More</li></a>
        </ul>
      </div>

      {/* Navbar links for tablets and mobile */}
      <div>
        <AiOutlineMenu className='md:hidden text-white/90 cursor-pointer' size={25} />
      </div>

      <div>
          {/* Overlay */}
          <div className='w-screen h-screen absolute top-0 left-0 bg-black/40'></div>

          <div className='flex flex-col items-end absolute bg-white top-0 right-0 w-[40%] h-screen'>
            <AiOutlineClose size={25}/>
            <ul className='flex flex-col justify-around items-center h-[200px]'>
              <a className='hover:underline hover:underline-offset-3' href='#about'><li>About</li></a>
              <a className='hover:underline hover:underline-offset-3' href='#matches'><li>Matches</li></a>
              <a className='hover:underline hover:underline-offset-3' href='#teams'><li>Teams</li></a>
              <a className='hover:underline hover:underline-offset-3' href='#more'><li>More</li></a>
            </ul>
          </div>
        </div>

    </div>
  )
}

export default Navbar