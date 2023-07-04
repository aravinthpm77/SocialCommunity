import {useState} from "react";
import {Link,useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {postDetails} from '../../actions/postdetails'
import { useSelector } from 'react-redux'
const Createpost = () =>{
    
    
    const[posttext,setposttext]=useState('');
    const [postimage,setImage]=useState("");
    const dispatch =useDispatch()
    const navigate=useNavigate()

   
    function convertToBase64(e){
        console.log(e);
        var reader =new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () =>{
            console.log(reader.result); //base64encoded to string
            setImage(reader.result);
        };
        reader.onerror = error =>{
            console.log("Error: ",error)
        }
    }

   
    
    const handleSubmit= (e)=>{
        e.preventDefault()
        console.log({posttext,postimage})
        dispatch(postDetails({posttext,postimage},navigate))


    }
    return (
            <div className="Create-post">
                <div className="create-post-section">
                    <div className="header-post-section">
                       
                        <img className="post-img" src="https://img.icons8.com/small/16/ball-point-pen.png"S alt="new-post" />   
                        <Link to='/' className="header-post"  style={{textDecoration:"none" }}>Create Post </Link>
                    </div>
                    <div className="header-textbox">
                        <form onSubmit={handleSubmit}>
                            
                            <textarea name="" onChange={(e)=>{setposttext(e.target.value)}} id="ask-ques-title" cols='50' rows='6' placeholder="What's on your mind"></textarea>
                            
                            <img width="30" height="30" className="img-upload" src="https://img.icons8.com/fluency-systems-regular/48/FF0000/full-image.png" alt=""/>
                            <input type="file" accept="image/* , video/*" onChange={convertToBase64}/>
                            
                            <button className="upload-submit"  type="submit">Submit</button>
                        </form>
                    </div>


                    
                    
                    
                </div>
                
            </div>
    )
}

export default Createpost 