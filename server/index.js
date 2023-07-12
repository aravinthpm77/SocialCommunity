const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors')
const servicesController = require('./controllers/servicesController')
const adminController =require('./controllers/adminController')
const multer = require('multer')
const upload = multer({ 
    dest: 'uploads/',
    fileFilter:function(req,file,cb){
        var filetypes = /jpeg|jpg|png|mp4/;
        var mimetype = filetypes.test(file.mimetype); 

        var extname = filetypes.test(path.extname(file.originalname).toLowerCase()); 

        if (mimetype && extname) { 
            return cb(null, true); 
        }
      
        cb("Error: File upload only supports the " + "following filetypes - " + filetypes); 
       
    }
})

const app = express()


app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/uploads', express.static('uploads'))


const PORT =process.env.PORT || 5000


const  CONNECTION_URL = 'mongodb+srv://admin:admin@socialcommunity.xvgsu5l.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true} )  
    .then(()=>app.listen(PORT,()=>{console.log(`server running on port ${PORT}`)}))
    .catch((err)=>console.log(err.message))
    

app.get('/hello', (req, res) => {
    return res.send('Hello')
})



app.post('/api/services', upload.array('image',2), servicesController.addServices)
app.get('/api/services', servicesController.getServices)

app.post('/user/signup',adminController.addAdmins )
app.post('/user/login',adminController.LoginAdmins)
app.get('/user/signup',adminController.getAdmins)


