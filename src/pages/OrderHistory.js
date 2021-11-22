import React, { useEffect, useState } from 'react'
import OrderItem from '../components/OrderItem'
import Loader from '../components/Loader';

const OrderHistory = () => {
    const [OrderData, setOrderData] = useState([])
    const [loding, setLoding] = useState(false);

    useEffect(() => {
        const getOrder = async () => {
            setLoding(true);
            const response = await fetch('https://cloths-order-default-rtdb.firebaseio.com/order.json');
            if (!response.ok) {
                throw new Error('order data can not be fetched')
            }
            const data = await response.json();
            let orderArray = [];
            for (let key in data) {
                let objarr = data[key].cartinfo.cartItems;
                let orderdate = data[key].orderdate;
                let totalOrderPrise = data[key].cartinfo.totalPrice;
                let obj = { orderItems: objarr, orderdate, totalOrderPrise }
                orderArray.unshift(obj);
            }
            console.log(orderArray);

            setOrderData(orderArray);
            setLoding(false);

        }
        getOrder();
    }, [])

    return (
        <>
            {OrderData.length === 0 && !loding && <h2 className='text-center md:text-2xl text-red-600 my-5 sm:text-xl text-base font-semibold '>No Order yet</h2>}
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 sm:w-2/5 w-9/12 md:w-3/5 lg:w-4/5 mx-auto gap-5'>
                {loding && <Loader />}
                {OrderData.length != 0 && !loding && OrderData.map((item) => (<OrderItem orderItems={item.orderItems} orderdate={item.orderdate} totalOrderPrise={item.totalOrderPrise} key={Math.random()} />))}
            </div>
        </>
    )
}

export default OrderHistory


