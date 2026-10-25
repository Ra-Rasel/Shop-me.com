import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { Trash2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const { products, currency, cartItems, updateQuantity, getCartAmount, delivery_fee } = useContext(ShopContext)
  const [cartData, setCartData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
          })
        }
      }
    }
    setCartData(tempData);
  }, [cartItems])

  return (
    <div className='border-t pt-14'>
      
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      <div>
        {
          cartData.length === 0 ? (
            <p className='text-gray-500 text-center py-10'>Your cart is empty.</p>
          ) : (
            cartData.map((item, index) => {
              const productData = products.find((product) => product._id === item._id);

              return (
                <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                  <div className='flex items-start gap-6'>
                    <img className='w-16 sm:w-20 object-cover rounded' src={productData.image[0]} alt="" />
                    <div>
                      <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                      <div className='flex items-center gap-5 mt-2'>
                        <p>{currency}{productData.price}</p>
                        <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50 text-xs rounded'>{item.size}</p>
                      </div>
                    </div>
                  </div>

                  {/* Quantity Input / Display */}
                  <input 
                    onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))} 
                    className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 text-center rounded' 
                    type="number" 
                    min={1} 
                    defaultValue={item.quantity} 
                  />

                  {/* Delete / Trash Icon */}
                  <Trash2 
                    onClick={() => updateQuantity(item._id, item.size, 0)} 
                    className='w-5 h-5 cursor-pointer text-gray-500 hover:text-red-500 transition-colors' 
                  />
                </div>
              )
            })
          )
        }
      </div>

      {/* Cart Totals & Checkout Section */}
      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <div className='w-full'>
            <div className='text-2xl'>
              <Title text1={'CART'} text2={'TOTALS'} />
            </div>

            <div className='flex flex-col gap-2 mt-2 text-sm'>
              <div className='flex justify-between'>
                <p>Subtotal</p>
                <p>{currency}{getCartAmount()}.00</p>
              </div>
              <hr className='border-gray-300' />
              <div className='flex justify-between'>
                <p>Shipping Fee</p>
                <p>{currency}{getCartAmount() === 0 ? 0 : delivery_fee}.00</p>
              </div>
              <hr className='border-gray-300' />
              <div className='flex.between flex justify-between font-bold'>
                <p>Total</p>
                <p>{currency}{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</p>
              </div>
            </div>
          </div>

          <div className='w-full text-end'>
            <button 
              onClick={() => navigate('/place-order')} 
              className='bg-black text-white text-sm my-8 px-8 py-3 rounded cursor-pointer active:bg-gray-700 transition-colors'
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart