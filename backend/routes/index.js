const express = require('express')
const userRoute = require('./users')
const courseRoute = require('./course')
const purchaseRoute = require('./purchase')


const router = express.Router()

router.get('/', (req, res)=>{
    res.json({
        msg: "On /api/v1/"
    })
})

router.use('/user', userRoute)
router.use('/course', courseRoute)
router.use('/purchase', purchaseRoute)

module.exports = router