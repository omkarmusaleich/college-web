import {React,useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import FoodItem from '../components/FoodItem'
import { foodItems,women,men,child } from '../components/fooddata'
import Footer from '../components/Footer';
import { useSelector,useDispatch } from 'react-redux';
import { cartAction } from '../store/cart-slice';
let start=true;

const Home = () => {
    const history = useHistory();
    const dispatch = useDispatch()
    // const cartarray=useSelector((state)=>state.cart.cartItems)
    const cartLocalStore=useSelector((state)=>state.cart)

    useEffect(()=>{
        const data=localStorage.getItem('cartitems');
        if(data && start)
        {
            console.log(JSON.parse(data));
            dispatch(cartAction.replace(JSON.parse(data)))
        }
        
    },[])

    useEffect(()=>{
        if(start)
        {
            start=false;
            return;
        }
        localStorage.setItem('cartitems',JSON.stringify(cartLocalStore))
    },[cartLocalStore])

    
    
    const detailShowHandler = (id) => {
        // console.log(id);
        history.push(`/home/${id}`)
    }
    return (
        <>
            <div className=' bg-gray-50 my-5 mx-auto w-11/12 p-5 sm:w-6/12 md:w-10/12'>
                <h2 className='font-mono font-semibold text-3xl py-5'>Latest Collection</h2>
                <div className='bg-white  rounded p-5 grid lg:grid-cols-3 lg:gap-8 md:grid-cols-2 md:gap-5 sm:grid-cols-1 sm:gap-3'>
                    {foodItems.map(item => (<FoodItem name={item.name} onLarge={detailShowHandler} key={item.id} discription={item.discription} id={item.id} prise={item.prise} src={item.src} time={item.time}/>))}
                </div>
            </div>

            <div className=' bg-gray-50 my-5 mx-auto w-11/12 p-5 sm:w-6/12 md:w-10/12'>
                <h2 className='font-mono font-semibold text-3xl py-5'>Ladies Dress Collection </h2>
                <div className='bg-white  rounded p-5 grid lg:grid-cols-3 lg:gap-8 md:grid-cols-2 md:gap-5 sm:grid-cols-1 sm:gap-3'>
                    {women.map(item => (<FoodItem name={item.name} onLarge={detailShowHandler} key={item.id} discription={item.discription} id={item.id} prise={item.prise} src={item.src} time={item.time}/>))}
                </div>
            </div>

            <div className=' bg-gray-50 my-5 mx-auto w-11/12 p-5 sm:w-6/12 md:w-10/12'>
                <h2 className='font-mono font-semibold text-3xl py-5'>Boys Clothing Collection </h2>
                <div className='bg-white  rounded p-5 grid lg:grid-cols-3 lg:gap-8 md:grid-cols-2 md:gap-5 sm:grid-cols-1 sm:gap-3'>
                    {men.map(item => (<FoodItem name={item.name} onLarge={detailShowHandler} key={item.id} discription={item.discription} id={item.id} prise={item.prise} src={item.src} time={item.time}/>))}
                </div>
            </div>

            <div className=' bg-gray-50 my-5 mx-auto w-11/12 p-5 sm:w-6/12 md:w-10/12'>
                <h2 className='font-mono font-semibold text-3xl py-5'>Children Collection </h2>
                <div className='bg-white  rounded p-5 grid lg:grid-cols-3 lg:gap-8 md:grid-cols-2 md:gap-5 sm:grid-cols-1 sm:gap-3'>
                    {child.map(item => (<FoodItem name={item.name} onLarge={detailShowHandler} key={item.id} discription={item.discription} id={item.id} prise={item.prise} src={item.src} time={item.time}/>))}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home
