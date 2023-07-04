import React from "react";
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import Explore from './pages/Explore/Explore'
const AllRoutes = () =>  {
    return(
        <Routes>
            <Route exact path='/home' element={<Home/>}/>
            <Route exact path='/Auth' element={<Auth/>}/>
            <Route exact path='/Explore' element={<Explore/>}/>
        </Routes>
    )
}

export default AllRoutes