
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { links } from '../data';
import logo1 from '../assets/logo1.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-gradient-to-l from-teal-500 to-blue-500 fixed top-0 w-full z-10'>
      <div className='align-element py-4 flex items-center justify-between sm:flex-row sm:gap-x-16 sm:items-center sm:py-8'>
        <div className='flex items-center gap-x-4'>
          <button
            className='block sm:hidden text-white text-2xl focus:outline-none'
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
          <NavLink to='/'>
            <img src={logo1} alt='Logo' className='h-12 w-12 sm:h-16 sm:w-16' />
          </NavLink>
        </div>
        <div
          className={`${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } fixed top-16 left-0 w-64 bg-blue-200 h-screen flex flex-col gap-y-4 p-4 transition-transform duration-300 sm:static sm:flex sm:flex-row sm:gap-x-3 sm:h-auto sm:p-0 sm:bg-transparent sm:w-auto sm:translate-x-0 sm:transition-none`}
        >
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <NavLink
                key={id}
                to={href}
                className={({ isActive }) =>
                  `capitalize text-lg tracking-wide hover:text-emerald-600 duration-300 ${
                    isActive ? 'text-emerald-600 font-semibold' : ''
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {text}
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
