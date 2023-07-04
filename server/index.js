import express, { urlencoded } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import PostRoutes from './routes/PostDetails.js'
const app =express();

app.use(express.json({limit:"30mb",extended:true}));
app.use(express.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

app.get('/',(req,res)=>{
    res.send("This is Social Community API ")
})

app.use('/Post',PostRoutes)

const PORT =process.env.PORT || 5000


const  CONNECTION_URL = "mongodb+srv://admin:admin@social-community.anu6p2k.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>app.listen(PORT,()=>{console.log(`server running on port ${PORT}`)}))
    .catch((err)=>console.log(err.message))