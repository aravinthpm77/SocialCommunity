import React,{useEffect,useState} from "react";
import { NavLink ,} from "react-router-dom";
import  Trend from './Trend'
import axios from "axios"
import './RightSidebar.css'
import Hashtags from './Hashtags'
import { useDispatch, useSelector } from "react-redux";
import { getAdmins } from "../../reducers/auth";

const RightSidebar =()=>{
    const dispatch =useDispatch()
    
    
    
    useEffect(()=>{
        // axios.get('http://localhost:5000/user/signup')
        //     .then(res => {
        //         console.log(res.data)
        //         setData(res.data.data)
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })

        dispatch(getAdmins())
        
    })
    const state = useSelector(state => state.authReducer)
    // const [data, setData] = useState([])
    console.log(state?.data.name)

    return (
        
            <div className='right-sidebar'>
            <div className="side-nav">
                <div className="side-user-details">
                    <div className="User-Info">
                        <NavLink to='/User' className='right-side-links'>
                            <img  width='30' height='30' src="https://img.icons8.com/small/42/user.png" className="nav-icon5" alt="User"/>
                           
                            <div  className="User-Details">
                                <p className="UserName">Aravinth</p>
                                <p className="User-Email">Aravinth2003@gmail.com</p>
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