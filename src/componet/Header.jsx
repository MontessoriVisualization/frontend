import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa6";

const Header = () => {
  const getNavLinkClass = ({ isActive }) =>
    `pb-4 hover:text-blue-900 hover:border-b-2 hover:border-blue-900 transition-all ${
      isActive
        ? 'text-blue-900 font-semibold border-b-2 border-blue-900'
        : 'text-gray-500'
    }`;

  return (
   <header className='flex justify-between items-center p-16 py-4 sticky top-0 z-50 font-sans bg-white shadow-md'>
    <div className='flex items-center'>
        <Link to="/" className="flex items-center">
            <img src="https://www.nepalguidify.com/uploads/logo-1648037551_cbec093b474441c22642.png" alt="logo" className='h-14' />
            <div className="ml-2">
                <h4 className="font-bold">Goverment of Nepal</h4>
                <span className="text-sm font-semibold text-gray-600">Citizen Greevance Portal</span>
            </div>
        </Link>
    </div>  
    <nav className='flex space-x-4'>
        <ul className='flex space-x-9'>
            <li>
                <NavLink to="/" className={getNavLinkClass}>Home</NavLink>
            </li>
            <li>
                <NavLink to="/about" className={getNavLinkClass}>About Us</NavLink>
            </li>
            <li>
                <NavLink to="/contact" className={getNavLinkClass}>Contacts</NavLink>
            </li>
        </ul>
    </nav>
    <div className='flex items-center space-x-4'>
        <div className='flex items-center space-x-1 px-2 py-1 cursor-pointer'>
            <CiGlobe className='text-blue-900' />
            <span className='text-blue-900 font-semibold'>EN</span>
            <FaChevronDown className='text-blue-900 h-2.5' />
        </div>
        <button className='bg-blue-900 text-white text-md py-2 px-4 rounded-md'><FaUser className='inline fill-white' /> Login / Register</button>
    </div>
   </header>
  )
}

export default Header
