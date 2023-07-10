import React,{useState} from "react"

import { useDispatch } from 'react-redux'
import {useNavigate } from 'react-router-dom'

import icon from '../../assets/socsalo.png'
import icon2 from '../../assets/bg1.jpg'

import {login } from '../../action/auth'

const Auth =()=>{
    
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit =(e)=>{
        e.preventDefault()
        if(!email || !password ){
            alert("Enter Full Details to LogIn")
        }
        dispatch(login({email,password },navigate))   
    }   
    return (
        <section className="auth-section">
            
            
            <div className="auth-container">
                <img className="auth-img" src={icon2} width={600} height={550} alt=""/>
                
                <form onSubmit={handleSubmit}>
                    <p className="Log-text">User Login</p> 
                    <img src={icon} alt=""></img>
                    
                    <label htmlFor='email'>
                        
                        <input type="email" name="email" id="email" placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}} />
                    </label>
                    
                    <label htmlFor='password'>
                        
                        
                        <input type="password"  name="password" id="password" placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}} />
                        
                        
                        <p  className="fp-p" >Forget Password ?</p>
                    </label>
                    

                    <button type ="submit" className="auth-btn">Log In</button>
                    
                    <p className="footer">
                        Create Account !
                        <button type="button" className="handle-switch-btn" >"Sign Up"</button>
                    </p>
                </form>
                
            </div>
        </section>
    )
}

export default Auth