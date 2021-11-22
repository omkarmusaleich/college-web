import React from 'react'
import { useDispatch } from 'react-redux';
import { cartAction } from '../store/cart-slice';

const CartItem = (props) => {
    const  dispatch = useDispatch();
    const { name, src, discription, prise, id, quentity } = props;
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 px-3 my-12 py-2 border-b-2 border-yellow-700 bg-gray-100 rounded brightness-200'>
            <div className=' md:col-span-2 mx-auto  rounded-md overflow-hidden relative my-auto '>
                <img src={src} alt={name} className='w-full max-h-52'></img> 
                {/* <div className='absolute top-0 left-0 bg-gray-600 text-sm text-white rounded-lg mx-1 my-1 px-1'>5 min</div> */}
            </div>
            <div className='flex-col justify-between items-center text-center mx-1 md:col-span-3 md:mx-10'>
                <h3 className='text-yellow-500 text-xl font-body font-bold'>{name}</h3>
                <p className='text-base font-medium '>{discription}</p>
                <div className='flex justify-center text-lg text-purple-600 font-semibold uppercase'>
                    <div className='mx-5'>price</div>
                    <div className='mx-5'>{prise}$</div>
                </div>
                <div className='flex justify-center text-lg text-purple-800 font-semibold uppercase'>
                    <div className='mx-5'>quantity</div>
                    <div className='mx-5'>{quentity}</div>
                </div>
                <div className='flex justify-center text-xl text-yellow-600 font-bold'>
                    <div className='mx-5'>Total price</div>
                    <div className='mx-5'>{quentity * prise}$</div>
                </div>
                <div className='flex justify-center my-4'>
                    <button className='px-3 mx-4 text-lg bg-gradient-to-r from-blue-400 to-yellow-400 rounded hover:text-white' onClick={()=>dispatch(cartAction.addToCart({name, src, discription, prise, id, quentity }))}>+Add</button>
                    <button className='px-3  mx-4 text-lg bg-gradient-to-r from-red-400 to-yellow-400 rounded hover:text-white' onClick={()=>dispatch(cartAction.removeFromCart(id))}>-remove</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem
