const servicesModel = require('../models/servicesModel')

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
        


        
        const title = req.body.title
        const UserPosted =req.body.UserPosted
        const imageUrl = req.file.path
        const userId =req.body.userId
        
        if (!title || !imageUrl) {
            return res.send({ code: 400, message: 'Bad Request' })
        }

        const newService = new servicesModel({ title: title, imageUrl : imageUrl ,UserPosted : UserPosted ,userId:userId})

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



