import React, {useState} from 'react';
import Logo from '../images/qc2020logo-mini-new.png';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import { Link } from 'react-scroll';


const Navbar = () => {

  const [nav, setNav] = useState(false);

  return (
    <div className='max-w-[350px] sm:max-w-[600px] md:max-w-[720px] lg:max-w-[960px] 
    xl:max-w-[1200px] 2xl:max-w-[1440px] w-full max-h-[150px] flex justify-around 
    px-8 items-center mx-auto mt-5 bg-black/30 
    rounded-xl border border-gray-100 shadow-lg'>

      {/* Logo */}     
      <a href='/'>
        <img className='max-w-[200px] max-h-[120px]' src={Logo} alt="logo"/>
      </a>

      {/* Navbar links for desktop and laptop size screens */}
      <div className='w-[800px]'>
        <ul className='hidden md:flex justify-around text-white/90'>
          <a className='hover:underline hover:underline-offset-3'>
            <li>
              <Link to="about" className='cursor-pointer' smooth={true} duration={500}>
                About
              </Link>
            </li>
          </a>
          <div className='relative'>
            <button className='peer'>Matches</button>
            <div className='bg-[#3B9AE1] min-w-[100px] absolute top-[1.15rem] left-0 hidden peer-hover:flex hover:flex flex-col rounded-md'>
              <a className='border-b py-[.92rem] text-center hover:bg-black/30'>
                <Link to="swiss" className='cursor-pointer' smooth={true} duration={500}>
                  Swiss
                </Link>
              </a>
              <a className='py-[.92rem] text-center hover:bg-black/30'>
                <Link to="playoffs" className='cursor-pointer' smooth={true} duration={500}>
                  Playoffs
                </Link>
              </a>
            </div>
          </div>
          <a className='hover:underline hover:underline-offset-3'><li>Teams</li></a>
          <a className='hover:underline hover:underline-offset-3'><li>More</li></a>
        </ul>
      </div>

      {/* Navbar links for tablets and mobile */}
      <div>
        <AiOutlineMenu className='md:hidden text-white/90 cursor-pointer' size={25} onClick={() => setNav(!nav)}/>
      </div>
        {/* Overlay */}
        <div className={nav ? 'w-screen h-screen fixed top-0 left-0 bg-black/50 md:hidden' : ''}></div>

        <div className={nav ? 'flex flex-col items-end fixed bg-[#1F4690] text-gray-300 top-0 right-0 w-[200px] sm:w-[300px] p-4 h-screen md:hidden' : 'hidden'}>
          <AiOutlineClose onClick={() => setNav(!nav)} className='cursor-pointer' size={25}/>
          <ul className='flex flex-col justify-around items-end h-[200px] mt-10'>
            <a className='hover:underline hover:underline-offset-3'>
              <li>
                <Link to="about" onClick={() => setNav(!nav)} className='cursor-pointer' smooth={true} duration={500}>
                  About
                </Link>
              </li>
            </a>
            <div>
            <details className='cursor-pointer'>
              <summary>Matches</summary>
              <div id="dropdown" className='flex flex-col text-right'>
              <a className='hover:underline py-2'>
                <Link to="swiss" onClick={() => setNav(!nav)} className='cursor-pointer text-[#F77E21]' smooth={true} duration={500}>
                  Swiss
                </Link>
              </a>
              <a className='hover:underline py-2'>
                <Link to="playoffs" onClick={() => setNav(!nav)} className='cursor-pointer text-[#FFF56D]' smooth={true} duration={500}>
                  Playoffs
                </Link>
              </a>
            </div>
            </details>
          </div>
            <a className='hover:underline hover:underline-offset-3'><li>Teams</li></a>
            <a className='hover:underline hover:underline-offset-3'><li>More</li></a>
          </ul>
        </div>


    </div>
  )
}

export default Navbar