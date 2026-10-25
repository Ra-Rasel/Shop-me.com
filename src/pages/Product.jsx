import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { Star } from 'lucide-react'

const Product = () => {

  const { productId } = useParams()
  const { products, currency, addToCart } = useContext(ShopContext)
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')

  // নির্দিষ্ট প্রোডাক্টটি খুঁজে বের করার ফাংশন
  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0]) // ডিফল্টভাবে প্রথম ছবি সিলেক্ট থাকবে
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData()
  }, [productId, products])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      
      {/* Product Data Container */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* ---------- Left Side: Product Images ---------- */}
        <div className='flex-1 flex flex-col-reverse sm:flex-row gap-3'>
          
          {/* Small Thumbnails */}
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item, index) => (
                <img 
                  onClick={() => setImage(item)} 
                  src={item} 
                  key={index} 
                  className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer rounded border border-gray-200 hover:border-black transition-all' 
                  alt="Product Thumbnail" 
                />
              ))
            }
          </div>

          {/* Main Big Image */}
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto rounded-lg shadow-sm object-cover' src={image} alt="Main Product" />
          </div>
        </div>

        {/* ---------- Right Side: Product Info ---------- */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          
          {/* Rating Stars */}
          <div className='flex items-center gap-1 mt-2'>
            <Star className='w-4 h-4 fill-orange-400 text-orange-400' />
            <Star className='w-4 h-4 fill-orange-400 text-orange-400' />
            <Star className='w-4 h-4 fill-orange-400 text-orange-400' />
            <Star className='w-4 h-4 fill-orange-400 text-orange-400' />
            <Star className='w-4 h-4 text-gray-400' />
            <p className='pl-2 text-sm text-gray-500'>(122)</p>
          </div>

          {/* Price */}
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          
          {/* Description */}
          <p className='mt-4 text-gray-500 md:w-4/5'>{productData.description}</p>

          {/* Size Selection */}
          <div className='flex flex-col gap-4 my-8'>
            <p className='font-medium text-gray-700'>Select Size</p>
            <div className='flex gap-2'>
              {
                productData.sizes.map((item, index) => (
                  <button 
                    onClick={() => setSize(item)} 
                    className={`border py-2 px-4 bg-gray-100 rounded cursor-pointer transition-all ${item === size ? 'border-orange-500 bg-orange-50 text-orange-600 font-semibold' : 'border-gray-300'}`} 
                    key={index}
                  >
                    {item}
                  </button>
                ))
              }
            </div>
          </div>

          {/* Add to Cart Button */}
          <button 
            onClick={() => addToCart(productData._id, size)} 
            className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 rounded transition-colors cursor-pointer'
          >
            ADD TO CART
          </button>

          <hr className='mt-8 sm:w-4/5 border-gray-300' />

          {/* Additional Info */}
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this order.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>

        </div>
      </div>

      {/* ---------- Description & Review Section ---------- */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm border-gray-300'>Description</b>
          <p className='border px-5 py-3 text-sm border-gray-300 text-gray-500'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500 border-gray-300'>
          <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical brick-and-mortar location.</p>
          <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
        </div>
      </div>

    </div>
  ) : <div className='opacity-0'></div>
}

export default Product