import React from "react";
import {Link} from 'react-router-dom'
import Logo from '../../assets/logo.png'
import S_Logo from '../../assets/search.png'
import './Navbar.css'
const Navbar=()=>{

    



    return (
        <nav className='main-nav'>
            <div className='navbar'>
                <Link to='/' className="nav-logo">
                    <img src={Logo} alt="logo" width="64" className="Main-icon"/>
                    <div className="nav-text">Soc alo</div>
                </Link>
                <form>
                    <input type='text' placeholder="Start typing to search..."/>
                    <img src={S_Logo} alt=" " width='28' className="input-icon"/>
                </form>
                <Link to='/' >
                    <img src="https://img.icons8.com/fluency-systems-regular/42/home.png" alt='' width='32' className="icon1" />
                </Link>
                <Link to='/' >
                    <img src="https://img.icons8.com/fluency-systems-regular/42/marker--v1.png" alt='' width='32' className="icon2"/>
                </Link>
                <Link to='/Auth' > 
                    <img src="https://img.icons8.com/fluency-systems-regular/48/user.png" alt='' width='32' className="icon3" />
                </Link>

                
            </div>
        </nav>
    )
}

export default Navbar