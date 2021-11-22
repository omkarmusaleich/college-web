import React from 'react'
import OrderList from './OrderList';


const OrderItem = (props) => {
    const { orderItems, orderdate, totalOrderPrise } = props;
    return (
        <div className='flex flex-col justify-evenly p-2 border-2 rounded-md border-gray-300 bg-gray-600 my-2 text-white shadow-md'>
            <div className='bg-gray-200  rounded-md w-24 text-center text-sm text-black mx-1 '>{orderdate}</div>
            <div>
                <div className='flex justify-evenly text w-11/12 mx-auto text-lg border-b'>
                    <div className='w-1/3'>Name</div>
                    <div className='w-1/3'>Quantity</div>
                    <div className='w-1/3'>Price</div>
                </div>
                <div className='w-11/12 mx-auto'>
                    {orderItems.map((item) => (<OrderList name={item.name} quentity={item.quentity} prise={item.prise} key={item.id} />))}
                </div>
            </div>
            <div className='flex justify-between text-lg my-3 items-center'>
                <div className='px-2 font-serif'>Total Price</div>
                <div className='px-2 text-yellow-500 font-semibold'>{totalOrderPrise} $</div>
            </div>
        </div>
    )
}

export default OrderItem
