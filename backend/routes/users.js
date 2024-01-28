const express = require('express')

const userRoute = express.Router()



// Get user => login
userRoute.get('/getuser', (req, res)=>{
    
})

// Create new user
userRoute.post('/createUser', (req, res)=>{

})

// Update user details
userRoute.put('/createUser', (req, res)=>{

})



module.exports = userRoute