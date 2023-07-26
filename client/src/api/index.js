import axios from 'axios'

const API=axios.create({  baseURL: "https://react-socialogram.onrender.com"  })


export const logIn=(authData) => API.post('/user/login',authData);
export const signUP=(authData) => API.post('/user/signup',authData);