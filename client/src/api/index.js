import  axios from 'axios'

const API=axios.create({baseURL:"http://localhost:5000"})

export const Post=(postData) =>API.post('/Post/PostDetails',postData)
export const getAllPost=()=>API.get('/Post/get');