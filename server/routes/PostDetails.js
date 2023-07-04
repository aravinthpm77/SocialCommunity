import express from 'express'
import {Postimage} from '../controllers/PostDetails.js'

const router=express.Router()
router.post('/PostDetails',Postimage)

export default router