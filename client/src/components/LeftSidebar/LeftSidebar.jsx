import React from "react";
import { NavLink } from "react-router-dom";
import './LeftSidebar.css'
const LeftSidebar =()=>{

    var User=1
    return (
        <div className='left-sidebar'>
            <nav className="side-nav">
                <div className="side-nav-container1">
                    <div className="side1-nav-head">
                        <span>New</span> Feeds
                    </div>
                    <div className="side1-nav-container">
                        {User===null ?
                    
                            <NavLink to='/Auth' className='side-nav-links'>
                                <img width='24' height='24' src="https://img.icons8.com/fluency-systems-regular/42/000000/login-rounded.png " className="nav-icon1" alt="Log"/>
                                <p>LogIn</p>
                            </NavLink> 
                            :
                            <>
                        
                                <NavLink to='/Auth' className='side-nav-links'>
                                    <img width='24' height='24' src="https://img.icons8.com/fluency-systems-regular/42/000000/login-rounded.png " className="nav-icon2" alt="Log"/>
                                    <p>LogOut</p>
                                </NavLink>
                            </>            
                        }
                        <NavLink to='/' className='side-nav-links'activeclassname='active'>
                            <img width='24' height='24'src="https://img.icons8.com/fluency-systems-regular/48/000000/home.png" className="nav-icon3" alt='Home'/>  
                            <p>Home</p>
                              
                        </NavLink>
                        <NavLink to='/Explore' className="side-nav-links">
                            <img width='24' height='24' src="https://img.icons8.com/fluency-systems-regular/42/marker--v1.png" alt="Explore" className="nav-icon4"/>
                            <p>Explore</p>
                        </NavLink>
                        <NavLink to='/User' className='side-nav-links'>
                            <img  width='24' height='24' src="https://img.icons8.com/small/42/user.png" className="nav-icon5" alt="User"/>
                            <p>Profile</p>
                        </NavLink>
                        <NavLink to='/New' className='side-nav-links'>
                            <img width='24' height='24' src="https://img.icons8.com/pulsar-line/42/add.png" className="nav-icon6" alt="New"/>
                            <p>Create</p>
                        </NavLink>
                    </div>
                </div>
            </nav>

        </div>
    )
}
export default LeftSidebar