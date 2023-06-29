import React from "react";
import {useLocation} from 'react-router-dom'
import './HomeMainbar.css'
import Createpost from "./Createpost";
const HomeMainbar =()=>{

    const location=useLocation() 
    return (
        <div class='main-bar'>
            <Createpost/>
            
            <div className="main-bar-header">
                {
                    location.pathname==='/' ? <h1>Home</h1>:<h1>Explore</h1>
                }
            </div>
            
            

        </div>
    )
}
export default HomeMainbar