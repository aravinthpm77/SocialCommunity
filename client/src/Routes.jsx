import React from "react";
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth.jsx'
import Explore from './pages/Explore/Explore'

const AllRoutes = () =>  {
    return(
        <Routes>
            <Route exact path='/home' element={<Home/>}/>
            <Route exact path='/Auth' element={<Auth/>}/>
            <Route exact path='/Explore' element={<Explore/>}/>
            <Route exact path='/' element={<Auth/>}/>
        </Routes>
    )
}

export default AllRoutes