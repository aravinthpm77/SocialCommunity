const servicesModel = require('../models/servicesModel')
// const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken')

module.exports.getServices = async (req, res) => {
    const _data = await servicesModel.find({})
    if (_data) {
        return res.send({ code: 200, message: 'success', data: _data })
    } else {
        return res.send({ code: 500, message: 'Service error' })
    }
}

module.exports.addServices = async (req, res) => {

    console.log(req.file, req.body, 16)
    try {



        // if (!req.headers.authorization) {
        //     return res.send({ code: 403, message: 'No Token' })
        // }


        // const userDetail = await jwt.verify(req?.headers?.authorization, 'PRIV_123')
        // console.log(userDetail._doc.type, 19)

        // if (userDetail._doc.type !== 'SUBADMIN' && userDetail._doc.type !== 'ADMIN') {
        //     return res.send({ code: 403, message: 'Unauthorized.' })
        // }


        // if (userDetail.iat - new Date().getTime() > 3.6e+6) {
        //     return res.send({ code: 403, message: 'Token Expired' })
        // }

        const title = req.body.title
        
        const imageUrl = req.file.path
        if (!title || !imageUrl) {
            return res.send({ code: 400, message: 'Bad Request' })
        }

        const newService = new servicesModel({ title: title, imageUrl : imageUrl })

        const success = await newService.save()

        if (success) {
            return res.send({ code: 200, message: 'add success', })
            {console.log("Success")}
        } else {
            return res.send({ code: 500, message: 'Service error' })

        }
    }
    catch (err) {
        res.send({ code: 500, message: 'Internal Server Err.' })
    }

}


module.exports.getSlider = (req, res) => {
    const url2 = 'https://images.unsplash.com/photo-1583791031159-af3c695f7d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGR1bW15fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
    const url1 = 'https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHwzODAzODAyfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
    const url3 = 'https://images.unsplash.com/photo-1488841714725-bb4c32d1ac94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8MzgwMzgwMnx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60'
    const url4 = 'https://images.unsplash.com/photo-1541363111435-5c1b7d867904?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVtbXl8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'

    const arr = [url1, url2, url3, url4]
    return res.send({ code: 200, message: 'success', data: arr })
}
