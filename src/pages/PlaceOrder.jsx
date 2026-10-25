import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {

  const { getCartAmount, delivery_fee, currency, addOrder } = useContext(ShopContext)
  const [method, setMethod] = useState('cod');
  const routerNavigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: ''
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData(data => ({ ...data, [name]: value }))
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addOrder(); // আসল কার্ট আইটেমগুলোকে অর্ডারে সেভ করবে
    routerNavigate('/orders');
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      
      {/* Left Side: Delivery Information */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>

        <div className='flex gap-3'>
          <input required onChange={onChangeHandler} name='firstName' value={formData.firstName} className='border border-gray-300 rounded py-1.5 px-3.5 w-full outline-none focus:border-black' type="text" placeholder='First name' />
          <input required onChange={onChangeHandler} name='lastName' value={formData.lastName} className='border border-gray-300 rounded py-1.5 px-3.5 w-full outline-none focus:border-black' type="text" placeholder='Last name' />
        </div>

        <input required onChange={onChangeHandler} name='email' value={formData.email} className='border border-gray-300 rounded py-1.5 px-3.5 w-full outline-none focus:border-black' type="email" placeholder='Email address' />
        <input required onChange={onChangeHandler} name='street' value={formData.street} className='border border-gray-300 rounded py-1.5 px-3.5 w-full outline-none focus:border-black' type="text" placeholder='Street' />

        <div className='flex gap-3'>
          <input required onChange={onChangeHandler} name='city' value={formData.city} className='border border-gray-300 rounded py-1.5 px-3.5 w-full outline-none focus:border-black' type="text" placeholder='City' />
          <input onChange={onChangeHandler} name='state' value={formData.state} className='border border-gray-300 rounded py-1.5 px-3.5 w-full outline-none focus:border-black' type="text" placeholder='State' />
        </div>

        <div className='flex gap-3'>
          <input required onChange={onChangeHandler} name='zipcode' value={formData.zipcode} className='border border-gray-300 rounded py-1.5 px-3.5 w-full outline-none focus:border-black' type="number" placeholder='Zipcode' />
          <input required onChange={onChangeHandler} name='country' value={formData.country} className='border border-gray-300 rounded py-1.5 px-3.5 w-full outline-none focus:border-black' type="text" placeholder='Country' />
        </div>

        <input required onChange={onChangeHandler} name='phone' value={formData.phone} className='border border-gray-300 rounded py-1.5 px-3.5 w-full outline-none focus:border-black' type="number" placeholder='Phone' />
      </div>

      {/* Right Side: Cart Totals & Payment */}
      <div className='mt-8 sm:mt-0'>
        <div className='mt-8 min-w-80'>
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
            <div className='flex justify-between font-bold'>
              <p>Total</p>
              <p>{currency}{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</p>
            </div>
          </div>
        </div>

        <div className='mt-12'>
          <div className='text-2xl mb-3'>
            <Title text1={'PAYMENT'} text2={'METHOD'} />
          </div>

          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border border-gray-300 p-2.5 px-4 cursor-pointer rounded bg-gray-50'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-600 border-green-600' : ''}`}></p>
              <p className='text-gray-700 text-sm font-medium'>CASH ON DELIVERY</p>
            </div>
          </div>

          <div className='w-full text-end mt-8'>
            <button type='submit' className='bg-black text-white px-16 py-3 text-sm rounded cursor-pointer active:bg-gray-700 transition-colors font-medium'>
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>

    </form>
  )
}

export default PlaceOrder