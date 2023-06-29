import React from "react";
import {Link} from 'react-router-dom'

const Createpost = () =>{
    return (
            <div className="Create-post">
                <div className="create-post-section">
                    <div className="header-post-section">
                       
                        <img className="post-img" src="https://img.icons8.com/small/16/ball-point-pen.png"S alt="new-post" />   
                        <Link to='/' className="header-post"  style={{textDecoration:"none" }}>Create Post </Link>
                    </div>
                    <div className="header-textbox">
                        <form>
                            
                            <textarea name="" id="ask-ques-title" cols='50' rows='6' placeholder="What's on your mind"></textarea>
                            
                            <img width="30" height="30" className="img-upload" src="https://img.icons8.com/fluency-systems-regular/48/FF0000/full-image.png" alt=""/>
                            <input type="file" accept="image/* , video/*" id="file_id"/>
                            
                            <input className="upload-submit" type="submit"/>
                        </form>
                    </div>
                    
                </div>
            </div>
    )
}

export default Createpost 