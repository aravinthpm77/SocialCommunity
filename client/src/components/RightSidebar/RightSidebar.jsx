import React,{useEffect,useState} from "react";
import { NavLink ,} from "react-router-dom";
import  Trend from './Trend'
import './RightSidebar.css'
import Hashtags from './Hashtags'
import { useDispatch, useSelector } from "react-redux";
import {setCurrentUser} from '../../action/currentuser'
const RightSidebar =()=>{
    
    const dispatch =useDispatch()
    const User = useSelector((state)=> state.currentUserReducer)
    
    
    useEffect(()=>{
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    },[dispatch])
   
    const [fix,setFix] = useState(false)

    function setFixedSidebar(){
    
        if(window.scrollY >=400){
            setFix(true)
        }
        else{
            setFix(false)
        }
    }
    
    window.addEventListener("scroll",setFixedSidebar)
    

    return (
        
        <div className={fix ? 'right-sidebar fixed' : "right-sidebar"}>
            <div className="side-nav">
                <div className="side-user-details">
                    <div className="User-Info">
                        <NavLink to='/User' className='right-side-links'>
                            <img  width='30' height='30' src="https://img.icons8.com/small/42/user.png" className="nav-icon5" alt="User"/>
                           
                            <div  className="User-Details">
                                <p className="UserName">{User?.result?.name}</p>
                                <p className="User-Email">{User?.result?.email}</p>
                            </div>
                            
                        </NavLink> 
                        
                    </div>
                </div>
                
                <Trend/>
                <Hashtags/>
                
                

            </div>

        </div>
       
        
    )
}
export default RightSidebar