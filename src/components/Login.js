import React, { useState,useRef,useContext } from 'react'
import AuthContext from '../store/conText/AuthContext';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [error,setError]=useState(null);
    const history=useHistory()
    const authCtx=useContext(AuthContext);
    const [isLogin, setIsLogin] = useState(true);
    const [isLoding,setIsLoding]=useState(false);
    const emailRef=useRef();
    const passwordRef=useRef();


    const toggleHandler=()=>{
        setIsLogin((pre)=>!pre)
    }
    const submitHandler=(event)=>{
        event.preventDefault();

        const inputEmail=emailRef.current.value;
        const inputPassword=passwordRef.current.value;
        
        // cheak valid email and password...
        setIsLoding(true);
        let url;
        if(!isLogin)
        {
            url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCJylQw02LXYSSse6J6S1Z1Vapfua434kY'
        }
        else{
            url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCJylQw02LXYSSse6J6S1Z1Vapfua434kY'
        }
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email:inputEmail,
                password:inputPassword,
                returnSecureToken:true,
            })
        }).then(res=>{
            setIsLoding(false);
            if(res.ok)
            {
                return res.json()
            }
            else{
                return res.json().then(data=>{
                    let errmsg='Authantication Failed!';
                    if(data && data.error && data.error.message)
                    {
                        console.log(data.error.message);
                        
                        errmsg=data.error.message;
                    }
                    throw new Error(errmsg)
                })
            }
        }).then(data=>{
            // console.log(data);
            
            const expirationTime=new Date(new Date().getTime() + (+data.expiresIn *1000))
            // console.log(expirationTime)
            authCtx.login(data.idToken,expirationTime.toISOString())
            history.replace('/')

        }).catch(err=>{
            setError(err.message)
        })


    }


    return (
        <div  className='w-11/12 md:w-3/5 lg:w-1/3 mx-auto my-5 md:mt-32 border-2 rounded-md border-gray-600 px-3 py-2 text-white bg-purple-900' >
            <h1 className='text-center text-2xl md:text-4xl mt-5 mb-10 font-semibold'>{isLogin ? 'Login' : 'Sign Up'}</h1>
            <form onSubmit={submitHandler} onFocus={()=>setError(null)}>
                {error && <p className='text-center text-sm text-red-300 animate-pulse '>{error}</p>}
                <div className='my-6 sm:mx-2 '>
                    <label htmlFor='email' className='sm:text-xl text-lg font-mono sm:ml-5'>Email</label>
                    <input type='email' id='email' ref={emailRef} required className='sm:mx-4 mx-1 rounded-md w-3/5 h-8 text-black px-2 float-right'></input>
                </div>
                <div className='my-6 sm:mx-2 '>
                    <label htmlFor='password' className='sm:text-xl text-lg font-mono sm:ml-5'>Password</label>
                    <input type='password' id='password' ref={passwordRef} placeholder='at least 6 character present' className='sm:mx-4 mx-1 rounded-md w-3/5 h-8 text-black px-2 float-right'></input>
                </div>
                <div className='mt-10 mb-5 flex justify-center items-center'>
                    {!isLoding && <button className='text-center border-2 px-5 py-1 bg-indigo-500 hover:bg-indigo-900 rounded-md font-semibold'>{isLogin?'Log In':'Sign Up'}</button>}
                    {isLoding && <h3>sending request....</h3>}
                </div>
                <div  className='my-2 flex justify-center items-center'>
                    <button type='button' onClick={toggleHandler}>{isLogin?'Create a new Account':'Login To Existing Account'}</button>
                </div>
            </form>
        </div>
    )
}

export default Login
