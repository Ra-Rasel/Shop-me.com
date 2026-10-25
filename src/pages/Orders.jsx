import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { Trash2 } from 'lucide-react'

const Orders = () => {

  const { orders, setOrders, currency } = useContext(ShopContext)

  // অর্ডার ডিলিট/ক্যান্সেল করার ফাংশন
  const handleDeleteOrder = (indexToDelete) => {
    const updatedOrders = orders.filter((_, index) => index !== indexToDelete);
    setOrders(updatedOrders);
  }

  return (
    <div className='border-t pt-16'>
      
      {/* Title */}
      <div className='text-2xl mb-3'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      {/* Order Items List */}
      <div>
        {
          orders.length === 0 ? (
            <p className='text-gray-500 text-center py-10'>You have no active orders.</p>
          ) : (
            orders.map((item, index) => (
              <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                
                {/* Left Side: Product Details */}
                <div className='flex items-start gap-6 text-sm'>
                  <img className='w-16 sm:w-20 object-cover rounded' src={item.image[0]} alt={item.name} />
                  <div>
                    <p className='sm:text-base font-medium'>{item.name}</p>
                    <div className='flex items-center gap-3 mt-1 text-base text-gray-700'>
                      <p>{currency}{item.price}</p>
                      <p>Quantity: {item.quantity}</p>
                      <p>Size: {item.size}</p>
                    </div>
                    <p className='mt-1 text-xs text-gray-400'>Date: <span className='text-gray-500'>{item.date}</span></p>
                    <p className='mt-1 text-xs text-gray-400'>Payment: <span className='text-gray-500'>{item.payment}</span></p>
                  </div>
                </div>

                {/* Middle & Right Section */}
                <div className='md:w-1/2 flex items-center justify-between gap-2'>
                  <div className='flex items-center gap-2'>
                    <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                    <p className='text-sm md:text-base text-gray-700'>Ready to ship</p>
                  </div>

                  <div className='flex items-center gap-3'>
                    <button className='border px-4 py-2 text-sm font-medium rounded-sm text-gray-700 hover:bg-gray-50 transition-colors'>
                      Track Order
                    </button>

                    <button 
                      onClick={() => handleDeleteOrder(index)}
                      title="Cancel Order"
                      className='p-2 text-gray-400 hover:text-red-500 transition-colors cursor-pointer'
                    >
                      <Trash2 className='w-5 h-5' />
                    </button>
                  </div>
                </div>

              </div>
            ))
          )
        }
      </div>

    </div>
  )
}

export default Orders