import React,{useState,useEffect} from "react"
import axios from 'axios'
import { useDispatch } from 'react-redux'
import {useNavigate } from 'react-router-dom'
import AboutAuth from './AboutAuth'
import icon from '../../assets/socsalo.png'
import icon2 from '../../assets/bg1.jpg'
import './Auth.css'
import { signup,login } from '../../action/auth'

const Auth =()=>{
    

    const [isSignup,setIsSignup]=useState(false)
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    

    const handleSwitch=()=>{
        setIsSignup(!isSignup)
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        if(isSignup){
            if(!name||!email || !password ){
                alert("Enter Full Details to SignUP")
            }
            dispatch(signup({name,email,password},navigate))
        }
        else{
            if(!email || !password ){
                alert("Enter Full Details to LogIn")
            }
            dispatch(login({email,password },navigate))
        }
        console.log({name,email,password})
    }













   
     
    return (
        <section className="auth-section">
            
            {isSignup && <AboutAuth/> }
            <div className="auth-container">
                <img className="auth-img" src={icon2} width={600} height={550} alt=""/>
                
                <form onSubmit={handleSubmit}>
                    {isSignup ? <p className="Log-text">User Signup</p>:<p className="Log-text">User Login</p> }
                    {!isSignup && <img src={icon} alt=""></img>}
                    {
                        isSignup && 
                        (
                            <label htmlFor="name">
                                
                                <input type="text" name="name" id="Name" placeholder="Name" onChange={(e)=>{setName(e.target.value)}}/>
                            </label>
                        )
                    }
                    <label htmlFor='email'>
                        
                        <input type="email" name="email" id="email" placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}} />
                    </label>
                    
                    <label htmlFor='password'>
                        
                        
                        <input type="password"  name="password" id="password" placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}} />
                        
                        {!isSignup && 
                           <p  className="fp-p" >
                            Forget Password ?
                            </p>
                        }
                            
                        {isSignup && 
                        <p className="pw-p">Password Must Contain atleast 8 characters 
                         including it must contain atleast one number 
                         Uppercase , Lowercase and Special Character .
                        </p>}

                    </label>
                    

                    <button type ="submit" className="auth-btn">{isSignup? "Sign Up":"Log In"}</button>
                    {isSignup && (
                        <p style={{color:"#666767",fontSize:"13px"}}>
                            By Clicking "Sign Up", you agree to our
                            <span style={{color:"#007ac6"}}> terms of Service </span>,
                            <span style={{color:"#007ac6"}}> privacy policy</span> and cookie policy.
                        </p>
                    )}
                    <p className="footer">
                        {isSignup?'Already A Member ? ':"Create Account !"}
                        <button type="button" className="handle-switch-btn" onClick={handleSwitch} >{isSignup?"Log In":"Sign Up"}</button>
                    </p>
                </form>
                
            </div>
        </section>
    )
}

export default Auth