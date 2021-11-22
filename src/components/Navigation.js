import React,{useContext} from 'react'
import { useHistory,Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AuthContext from '../store/conText/AuthContext';


const Navigation = (props) => {
    const authCtx=useContext(AuthContext);
    const numberOfCartItems=useSelector((state)=>state.cart.totalItems)
    const{toggle}=props;
    const history=useHistory();

    const onCartLogoHandler=()=>{
        history.push('/cart')
    }
    return (
        <div className='flex items-center justify-between h-16 border-b-2 shadow-md bg-gray-300'>
            <div className='justify-start items-center md:text-xl lg:text-2xl md:flex hidden'>
                <Link to='/'  className='mx-10  font-semibold hover:text-red-700'>Home</Link>
                <Link to='/contactus'  className='mx-10 font-semibold hover:text-red-700'>Conatct Us</Link>
                <Link to='/order-history'  className='mx-10 font-semibold hover:text-red-700'>Order History</Link>
            </div>
            <div className='md:hidden' onClick={()=>toggle()}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  mx-5 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            
            <div className='md:hidden bg-yellow-400 hover:bg-yellow-500 hover:text-white rounded-full mx-3 cursor-pointer' onClick={onCartLogoHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-2 my-2 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            </div>
          
            <div className=' justify-start items-center md:flex hidden md:text-xl lg:text-2xl'>
                <Link to='/cart'  className=' text-gray-700  px-3 py-1 mx-2 border-2 bg-gradient-to-r from-yellow-400  to-red-500 hover:bg-yellow-800 hover:text-white rounded-lg'>Cart<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6  cursor-pointer inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>{numberOfCartItems}</Link>
                <button className='bg-gradient-to-r from-blue-400 to-blue-800 hover:text-black text-white  py-1 px-3 rounded mx-5 font-medium' onClick={()=>authCtx.logout()} >Log Out</button>
            </div>
        </div>
    )
}

export default Navigation
