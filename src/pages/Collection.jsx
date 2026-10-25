import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {

  const { products, search, showSearch } = useContext(ShopContext) // search এবং showSearch আনা হলো
  const [filterProducts, setFilterProducts] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])

  // ক্যাটাগরি চেকবাক্স হ্যান্ডলার
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  // সাব-ক্যাটাগরি/টাইপ চেকবাক্স হ্যান্ডলার
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  // ফিল্টারিং লজিক (সার্চ + ক্যাটাগরি + সাব-ক্যাটাগরি)
  const applyFilter = () => {
    let productsCopy = products.slice()

    // ১. সার্চ ফিল্টার: যদি showSearch true হয় এবং কিছু লেখা থাকে
    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => 
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    }

    // ২. ক্যাটাগরি ফিল্টার
    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }

    // ৩. টাইপ ফিল্টার
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }

    setFilterProducts(productsCopy)
  }

  // যখনই category, subCategory, search, showSearch বা products পরিবর্তন হবে, ফিল্টার রান করবে
  useEffect(() => {
    applyFilter()
  }, [category, subCategory, search, showSearch, products])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      
      {/* Left Side: Filter Options */}
      <div className='min-w-60'>
        <p className='my-2 text-xl font-semibold cursor-pointer'>FILTERS</p>
        
        {/* Category Filter */}
        <div className='border border-gray-300 pl-5 py-3 mt-6 rounded-sm'>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory} /> Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory} /> Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory} /> Kids
            </p>
          </div>
        </div>

        {/* Type Filter */}
        <div className='border border-gray-300 pl-5 py-3 my-5 rounded-sm'>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Topwear'} onChange={toggleSubCategory} /> Topwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Bottompwear'} onChange={toggleSubCategory} /> Bottomwear
            </p>
          </div>
        </div>
      </div>

      {/* Right Side: All Collections */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
        </div>

        {/* Product Grid */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.length > 0 ? (
              filterProducts.map((item, index) => (
                <ProductItem 
                  key={index} 
                  id={item._id} 
                  image={item.image} 
                  name={item.name} 
                  price={item.price} 
                />
              ))
            ) : (
              <p className='col-span-full text-gray-500 text-center py-10'>No products found matching your search.</p>
            )
          }
        </div>
      </div>

    </div>
  )
}

export default Collection