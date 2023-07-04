import React from "react";
import * as api from '../api'
export const postDetails=(postData,navigate)=>async(dispatch)=>{
    try{
        const {data}=await api.Post(postData)
        dispatch({type:"POST_DATA",payload:data})
        dispatch(fetchAllpost())
        navigate('/')
        alert("Successfully Posted");
    }
    catch(error){
        alert('Error TryAgain')
        console.log('Error : ',error);
    }
}

export const fetchAllpost =() =>async(dispatch)=>{
    try {
        const{data}=await api.getAllPost()
        dispatch({type:'FETCH_ALL_POST',payload:data})
    } catch (error) {
        console.log(error)
    }
};