import React,{useState} from 'react'
import './HomeMainbar.css'
import { NavLink } from "react-router-dom";
import Createpost from "./Createpost";

const HomeMainbar =()=>{
    const [isLike,setLike]=useState(false)
    const [isFollow,setIsFollow]=useState(false)
    const handleSwitch = () =>{
        setIsFollow(!isFollow)
        
    }
    const handleLike = ()=>{
        setLike(!isLike)
    }
    

    const istext=1

    return (
        <div class='main-bar'>
            <Createpost/>
           
            <div className="main-bar-header">
                <div className="Home-header-section">
                    
                    <h1 className="Home-Header">Home</h1>
                    
                    <div className="link-main">
                        <NavLink to='/' className='a1'>For You</NavLink>
                        <NavLink to='/' className='a2'>Following</NavLink>
                        
                    </div>
                </div>
            </div>
            <div className="Display-post">
                <div className="Display-content1">
                    { <h3>Aravinth</h3> /*User posted*/  }
                    <p>30 mins</p>
                    <button type="button" className='share-bn'>share</button>
                    <button type="button" className='follow-btn'  onClick={handleSwitch} >{isFollow? 'Follow':'UnFollow'}</button>
                </div>
                <div className='Display-content2'>
                    {
                        istext===null ? <p></p>: <p>TextContent TextContent TextContent TextContent TextContentTextContent TextContent TextContent TextContentTextContent TextContent TextContent</p>
                        
                    }
                    <img src="https://picsum.photos/200/300" width={400} height={400}  alt=""/>

                </div>
                {/* <div className='Display-content3'>
                    <button type="button" className='like-btn' onClick={handleLike}  >{isLike? <img  src="https://img.icons8.com/ios/48/like--v1.png" alt=""/>:<img src="https://img.icons8.com/color/48/like--v3.png" alt="like--v3"/>}</button>
                    

                    
                </div> */}

            </div>
            
           
            

        </div>
    )
}
export default HomeMainbar