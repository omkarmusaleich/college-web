import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../store/conText/AuthContext';

const Dropdown = (props) => {
    const authCtx=useContext(AuthContext);
    const { toggle, isOpen } = props;
    return (
        <div className={isOpen ? 'grid grid-row-4 text-left items-center bg-gradient-to-r from-yellow-400 to-red-400 uppercase font-sans text-sm sm:text-xl' : 'hidden'} onClick={() => toggle()}>
            <Link to='/' className='py-2 px-3 hover:bg-yellow-500 hover:text-white' ><svg xmlns="http://www.w3.org/2000/svg" className=" inline mx-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>Home</Link>
            <Link to='/contactus' className='py-2 px-3 hover:bg-yellow-500 hover:text-white'><svg xmlns="http://www.w3.org/2000/svg" className="inline mx-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>Conatct Us</Link>
            <Link to='/order-history' className='py-2 px-3 hover:bg-yellow-500 hover:text-white'><svg xmlns="http://www.w3.org/2000/svg" className="inline mx-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>Order History</Link>
            <Link to='/' onClick={()=>authCtx.logout()} className='py-2 px-3 hover:bg-red-600 hover:text-white'><svg xmlns="http://www.w3.org/2000/svg" className="inline mx-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>Log Out</Link>
        </div>
    )
}

export default Dropdown
