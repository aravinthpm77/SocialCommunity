import React from "react";
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar.jsx'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar.jsx'
import RightSidebar from '../../components/RightSidebar/RightSidebar.jsx'

const Home =()=>{
    

    return (
        <div className="home-container">
            <LeftSidebar/>
            
            <HomeMainbar/>
            <RightSidebar/>
             
            
            
            

        </div>
    )
}

export default Home