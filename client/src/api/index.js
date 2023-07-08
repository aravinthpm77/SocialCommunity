import axios from 'axios'

const API=axios.create({  baseURL: "http://localhost:5000"  })


export const logIn=(authData) => API.post('/user/login',authData);
export const signUP=(authData) => API.post('/user/signup',authData);