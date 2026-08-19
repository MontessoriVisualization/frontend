import React from 'react'
import { FaUser } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";


import { FaChevronDown } from "react-icons/fa6";

const Header = () => {
  return (
   <header className='flex justify-between items-center p-16 py-4  sticky top-0 z-50 font-sans bg-white shadow-md'>
    <div className='flex items-center'>
        <img src="https://www.nepalguidify.com/uploads/logo-1648037551_cbec093b474441c22642.png" alt="logo" className='h-14' />
        <div className="ml-2">
            <h4 className="font-bold">Goverment of Nepal</h4>
            <span className="text-sm font-semibold text-gray-600">Citizen Greevance Portal</span>

        </div>
    </div>  
    <nav className='flex space-x-4'>
        <ul className='flex space-x-9'>
            <li className='hover:text-blue-900 pb-4 hover:border-b-2 hover:border-blue-900 text-gray-500'><a href="/">Home</a></li>
            <li className='hover:text-blue-900 pb-4 hover:border-b-2 hover:border-blue-900 text-gray-500'><a href="/about">Submit Grievance</a></li>
            <li className='hover:text-blue-900 pb-4 hover:border-b-2 hover:border-blue-900 text-gray-500'><a href="/contact">Track Grievance</a></li>
            <li className='hover:text-blue-900 pb-4 hover:border-b-2 hover:border-blue-900 text-gray-500'><a href="/contact">Catagories</a></li>
            <li className='hover:text-blue-900 pb-4 hover:border-b-2 hover:border-blue-900 text-gray-500'><a href="/contact">About Us</a></li>
            <li className='hover:text-blue-900 pb-4 hover:border-b-2 hover:border-blue-900 text-gray-500'><a href="/contact">Help</a></li>
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
