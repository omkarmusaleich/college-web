import {React,useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { cartAction } from '../store/cart-slice'
import CartItem from '../components/CartItem'
import Loader from '../components/Loader'
import { useHistory } from 'react-router-dom'
import FormForOrder from '../components/FormForOrder'


const Cart = () => {
    const history=useHistory()
    const dispatch = useDispatch()
    const [isloding,setIsLoding]=useState(false);
    const [orderForm,setOrderForm]=useState(false);
    const {cartItems,totalPrice}=useSelector((state)=>state.cart)
    const cartinfo=useSelector(state=>state.cart);
    const cartData=cartItems.map(item=>(<CartItem prise={item.prise} key={item.id} id={item.id} name={item.name} discription={item.discription} src={item.src} quentity={item.quentity}/>))
    




    useEffect(()=>{
        localStorage.setItem('cartitems',JSON.stringify({cartinfo}))
    },[cartItems,cartinfo])

    const orderHandler=async()=>{
        setIsLoding(true);
        const date=new Date();
        let day=date.getDate();
        let month=date.getMonth() + 1;
        let year=date.getFullYear();
        let today=`${day}/${month}/${year}`;
        // https://food-website-order-default-rtdb.firebaseio.com

        const response=await fetch('https://cloths-order-default-rtdb.firebaseio.com/order.json',{
            method:'POST',
            headers:{
                'Content-type':'application-json'
            },
            body:JSON.stringify({cartinfo,orderdate:today})
        })

        if(!response.ok)
        {
            throw new Error('order data can not be fetch');
        }

        const data=await response.json()
        dispatch(cartAction.removeAll());
        setIsLoding(false);
        history.push('/')
    }

    const fillHandler=()=>{
        orderHandler();
    }


    return (
        <div className='mx-5'>
            
            {cartItems.length===0 && <h1 className='mt-10 bg-gradient-to-r from-blue-800 via-purple-800 to-green-800 w-4/5 sm:w-2/3 md:1/3 mx-auto text-sm sm:text-2xl md:text-3xl text-yellow-600 rounded-lg py-4 px-3 md:px-10 font-semibold font-body border-green-800 border-2 text-center'>No cart Item present</h1>}
            {!orderForm && cartData}
            {!orderForm && cartItems.length!=0 && <div className='flex justify-evenly items-center p-2 bg-gradient-to-r from-yellow-400 to-green-900 font-body text-2xl md:text-3xl lg:text-4xl text-white rounded-lg my-3 md:w-2/5 mx-auto'><div>Total Price</div><div>{totalPrice}$</div></div>}
            {isloding && <Loader/>}
            {orderForm && <FormForOrder Fill={fillHandler}/>}
            {!orderForm && cartItems.length!=0 && <div className='mx-auto w-36 my-5'><button className=' hover:text-white  px-5 py-1 bg-gradient-to-r from-yellow-400 via-gray-500 to-blue-400 rounded-md text-xl md:text-3xl' onClick={()=>setOrderForm(true)}>Order</button></div>}
        </div>

    )
}

export default Cart
