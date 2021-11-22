import React, { useCallback, useState,useEffect } from 'react'
import AuthContext from './AuthContext'

let logoutTimer;

const calculateRemaningTime=(expireTime)=>{
    const currerntTime=new Date().getTime();

    const altExpireTime=new Date(expireTime).getTime();
    const remaningTime=altExpireTime-currerntTime;
    return remaningTime;
}

const initialTokenData=()=>{
    const startToken=localStorage.getItem('token');
    const startTime=localStorage.getItem('expiretime')
    const remTime=calculateRemaningTime(startTime);
    if(remTime<=60000)
    {
        localStorage.removeItem('token');
        localStorage.removeItem('expiretime');
        return null;
    }
    return{
        token:startToken,
        duration:remTime,
    }
}

const AuthContextProvider = (props) => {
    const TokenData=initialTokenData();
    let startToken=null;
    if(TokenData)
    {
        startToken=TokenData.token;
    }

    const [token, setToken] = useState(startToken)
    const isLogin = !!token;

    const logoutHandler = useCallback(() => {
        setToken(null);
        localStorage.removeItem('token')
        localStorage.removeItem('expiretime');
        if(logoutTimer)
        {
            clearTimeout(logoutTimer);
        }

    },[])

    const loginHandler = (token,expireTime) => {
        setToken(token);
        localStorage.setItem('token',token);
        localStorage.setItem('expiretime',expireTime);
        // console.log(expireTime);
        
        const remaningTime=calculateRemaningTime(expireTime);

        logoutTimer=setTimeout(logoutHandler,remaningTime);
    }

    useEffect(()=>{
        if(TokenData)
        {
            console.log(TokenData.duration);
            logoutTimer=setTimeout(logoutHandler,TokenData.duration)
        }
    },[logoutHandler,TokenData])

    const contextObj = {
        isLoggedIn:isLogin,
        token: token,
        login: loginHandler,
        logout:logoutHandler,
    }
    return (
        <AuthContext.Provider value={contextObj}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
