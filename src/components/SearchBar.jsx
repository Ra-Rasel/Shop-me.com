import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useLocation } from 'react-router-dom'
import { Search, X } from 'lucide-react'

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext)
  const [visible, setVisible] = useState(false)
  const location = useLocation()

  // শুধুমাত্র কালেকশন পেজেই সার্চবার দৃশ্যমান হবে
  useEffect(() => {
    if (location.pathname.includes('collection')) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }, [location])

  // যদি কালেকশন পেজে থাকে এবং showSearch true হয়, তবেই সার্চবার দেখাবে
  return showSearch && visible ? (
    <div className='border-t border-b bg-gray-50 text-center'>
      <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
        <input 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
          className='flex-1 outline-none bg-inherit text-sm' 
          type="text" 
          placeholder='Search' 
        />
        <Search className='w-4 h-4 text-gray-500 ml-2' />
      </div>
      
      {/* Lucide React এর X আইকন (ক্রস বাটন) */}
      <X 
        onClick={() => setShowSearch(false)} 
        className='w-5 h-5 inline cursor-pointer text-gray-500 hover:text-black transition-colors' 
      />
    </div>
  ) : null
}

export default SearchBar