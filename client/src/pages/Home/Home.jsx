import React from "react";
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar.jsx'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar.jsx'
const Home =()=>{
    return (
        <div className="home-container">
            <LeftSidebar/>
            <HomeMainbar/>

        </div>
    )
}

export default Home