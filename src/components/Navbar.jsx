import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
    setNav(!nav);
    };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
        <Link to='/' className='w-full'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>HS HUB</h1>
        </Link>

      {/* Desktop Navigation */}
      <ul className='hidden sm:flex'>
        <li className='p-4'>
          <Link to='/about' className='text-gray-600'>About</Link>
        </li>
        <li className='p-4'>
          <Link to='/courses' className='text-gray-600'>Courses</Link>
        </li>
        <li className='p-4'>
          <Link to='/extracurriculars' className='text-gray-600'>Extracurriculars</Link>
        </li>
        <li className='p-4'>
          <Link to='/blog' className='text-gray-600'>Blog</Link>
        </li>
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block sm:hidden'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Menu */}
      <div className={nav ? 'fixed left-0 top-0 h-full w-[60%] border-r-gray-900 bg-white ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <Link to='/' className='w-full'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>HS HUB</h1>
        </Link>
        <ul className='p-4 uppercase'>
          <li className='p-4 border-b border-gray-600'>
            <Link to='/about' className='text-black'>About</Link>
          </li>
          <li className='p-4 border-b border-gray-600'>
            <Link to='/courses' className='text-black'>Courses</Link>
          </li>
          <li className='p-4 border-b border-gray-600'>
            <Link to='/extracurriculars' className='text-black'>Extracurriculars</Link>
          </li>
          <li className='p-4 border-b border-gray-600'>
            <Link to='/blog' className='text-black'>Blog</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
