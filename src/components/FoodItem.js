import React from 'react'
import { cartAction } from '../store/cart-slice';
import { useDispatch } from 'react-redux';

const FoodItem = (props) => {
    const dispatch = useDispatch();
    const { src, name, discription, prise, id, onLarge, time } = props;
    const addHandler = () => {
        dispatch(cartAction.addToCart({ src, name, discription, prise, id, time }))
    }

    return (
        <div className='flex-col relative justify-center overflow-hidden rounded-2xl border-2 shadow-md hover:shadow-2xl text-gray-700 hover:text-black my-3 transition ease-in duration-400 '  >
            <img src={src} alt='Food img' className='rounded mx-auto h-60 md:h-52 sm:h-44 cursor-pointer' onClick={() => { onLarge(id) }}></img>
            <h3 className='py-1 px-4 text-2xl  hover:text-black font-body cursor-pointer' onClick={() => { onLarge(id) }} >{name}</h3>
            <p className='px-4 text-xs cursor-pointer ' onClick={() => { onLarge(id) }}>{discription}</p>
            <div className='flex justify-between px-3 mt-3 mb-1'>
                <span className='px-1 py-2 font-body text-yellow-600' onClick={() => { onLarge(id) }}>prise {prise}$</span>
                <button className='px-3 my-2 bg-gradient-to-r from-yellow-400 to-red-400 rounded animate-pulse' onClick={addHandler}>Add</button>
            </div>
            <div className='absolute top-0 left-0 bg-gray-600 text-sm text-white rounded-lg mx-1 my-1 px-1'>{`${time}`}<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg></div>
        </div>
    )
}

export default FoodItem
