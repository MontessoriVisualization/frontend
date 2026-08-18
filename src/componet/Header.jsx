import React from 'react'

const Header = () => {
  return (
   <header className='flex justify-between items-center p-4 bg-gray-800 text-white sticky top-0 z-50'>
    <div className='flex items-center'>
        <img src="https://www.nepalguidify.com/uploads/logo-1648037551_cbec093b474441c22642.png" alt="logo" className='h-10 w-10' />
    </div>
    <nav className='flex space-x-4'>
        <ul className='flex space-x-4'>
            <li className='hover:text-gray-300'><a href="/">Home</a></li>
            <li className='hover:text-gray-300'><a href="/about">About</a></li>
            <li className='hover:text-gray-300'><a href="/contact">Contact</a></li>
        </ul>
    </nav>
    <div className='flex items-center space-x-4'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Sign In</button>
    </div>
   </header>
  )
}

export default Header
