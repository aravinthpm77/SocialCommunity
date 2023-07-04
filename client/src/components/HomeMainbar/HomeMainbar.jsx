import React,{useState,useEffect} from 'react'
import './HomeMainbar.css'
import axios from "axios"
import { NavLink } from "react-router-dom";
import Createpost from "./Createpost";
import { useDispatch, useSelector } from "react-redux";
import { getServices } from "../../reducers/serviceReducer";

const HomeMainbar =()=>{
    const [isLike,setLike]=useState(false)
    const [isFollow,setIsFollow]=useState(false)
    const handleSwitch = () =>{
        setIsFollow(!isFollow)
        
    }
    // const handleLike = ()=>{
    //     setLike(!isLike)
    // }
    const istext=1
    const dispatch = useDispatch()
    const state = useSelector(state => state.serviceReducer)
    console.log(state, 9)

    // const [data, setData] = useState([])
    const [filter, setFilter] = useState('')

    useEffect(() => {
        // axios.get('http://localhost:5000/api/services')
        //     .then(res => {
        //         console.log(res.data)
        //         setData(res.data.data)
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })

        dispatch(getServices())

    }, [])

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

            <div className="flex">
                {
                    state.isLoading && <h1> LOADING....</h1>
                }

                {
                    state &&
                        state.servicesData &&
                        state.servicesData.length > 0 ?
                        state.servicesData
                            .sort((a, b) => a.price - b.price)
                            .filter(item => {
                                return item.title.toLowerCase().includes(filter.toLowerCase()) || item.description.toLowerCase().includes(filter.toLowerCase())
                            })
                            .map((serviceItem, serviceIndex) => {
                                return (
                                    <div className="Display-post" key={serviceIndex + 1} >
                                        
                                        
                                    
                                        <div className="Display-content1">
                                            { <h3>Aravinth</h3>   }
                                            <p>30 mins</p>
                                            <button type="button" className='share-bn'>share</button>
                                            <button type="button" className='follow-btn'  onClick={handleSwitch} >{isFollow? 'Follow':'UnFollow'}</button>
                                        </div>
                                        <div className='Display-content2'>
                                            {
                                                istext===null ? <p></p>: <p>{serviceItem?.title}</p>
                                                
                                            }
                                            <img width="50%" height="50%" alt="img" src={`http://localhost:5000/${serviceItem?.imageUrl}` } />
                        
                                        </div>
                                        
                    
                                </div>
                                )
                            })
                            : 'No Data Found'
                }
            </div>
            
            
           
            

        </div>
    )
}
export default HomeMainbar