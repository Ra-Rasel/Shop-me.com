import React, { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { Search, User, ShoppingBag, Menu, ChevronLeft } from 'lucide-react'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
  // Mobile Sidebar Menu visibility state
  const [visible, setVisible] = useState(false)
  
  // ShopContext থেকে setShowSearch, getCartCount এবং useNavigate হুক নেওয়া হলো
  const { setShowSearch, getCartCount } = useContext(ShopContext)
  const navigate = useNavigate()

  return (
    <div className='flex items-center justify-between py-5 font-medium border-b border-gray-200'>
      
      {/* 1. Logo */}
      <Link to='/'>
        <img src={assets.logo} className='w-36 cursor-pointer' alt="Shopme Logo" />
      </Link>

      {/* 2. Desktop Navigation Links */}
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
          <p>COLLECTION</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p>CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>

      {/* 3. Icons Section */}
      <div className='flex items-center gap-6'>
        
        {/* Search Icon */}
        <Search 
          onClick={() => {
            setShowSearch(true);
            navigate('/collection');
          }}
          className='w-5 h-5 cursor-pointer text-gray-700 hover:text-black transition-colors' 
        />

        {/* Profile Icon with Hover Dropdown Menu */}
        <div className='group relative'>
          <Link to='/login'>
            <User className='w-5 h-5 cursor-pointer text-gray-700 hover:text-black transition-colors' />
          </Link>

          {/* Dropdown Menu */}
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-10'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded shadow-md border border-gray-200'>
              <p className='cursor-pointer hover:text-black transition-colors'>My Profile</p>
              <Link to='/orders' className='cursor-pointer hover:text-black transition-colors'>Orders</Link>
              <p className='cursor-pointer hover:text-black transition-colors'>Logout</p>
            </div>
          </div>
        </div>

        {/* Cart Icon with Dynamic Counter Badge */}
        <Link to='/cart' className='relative'>
          <ShoppingBag className='w-5 h-5 cursor-pointer text-gray-700 hover:text-black transition-colors' />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 h-4 bg-black text-white aspect-square rounded-full text-[8px] flex items-center justify-center leading-none'>
            {getCartCount()}
          </p>
        </Link>

        {/* Mobile Menu Icon */}
        <Menu 
          onClick={() => setVisible(true)} 
          className='w-5 h-5 cursor-pointer sm:hidden text-gray-700 hover:text-black transition-colors' 
        />

      </div>

      {/* 4. Sidebar Menu for Small/Mobile Screens */}
      <div className={`fixed top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-300 z-50 ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600'>
          
          {/* Back Button */}
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-4 cursor-pointer border-b border-gray-200'>
            <ChevronLeft className='h-5 w-5' />
            <p className='font-medium text-gray-800'>Back</p>
          </div>

          {/* Mobile Navigation Links */}
          <NavLink onClick={() => setVisible(false)} className='py-3 pl-6 border-b border-gray-200 hover:text-black' to='/'>
            HOME
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-3 pl-6 border-b border-gray-200 hover:text-black' to='/collection'>
            COLLECTION
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-3 pl-6 border-b border-gray-200 hover:text-black' to='/about'>
            ABOUT
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-3 pl-6 border-b border-gray-200 hover:text-black' to='/contact'>
            CONTACT
          </NavLink>
          
        </div>
      </div>

    </div>
  )
}

export default Navbar