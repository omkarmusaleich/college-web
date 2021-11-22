import React from 'react'

const OrderList = (props) => {
    const {name,quentity,prise}=props;
    return (
        
        <div className='flex justify-evenly border-b border-dashed border-white'>
            <div className='w-1/3 font-mono'>{name}</div>
            <div  className='w-1/3 text-yellow-200'>X {quentity}</div>
            <div  className='w-1/3 text-yellow-500'>{quentity*prise}$</div>
        </div>
        
    )
}

export default OrderList
