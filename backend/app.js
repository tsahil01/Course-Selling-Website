const express = require('express')
const router = require('./routes/index')
const cors = require('cors')
require('dotenv').config()

const PORT = process.env.PORT | 3000

const app = express()

app.use(express.json())
app.use(cors())
app.use('/api/v1', router)


app.listen(PORT, ()=> console.log(`Listening on PORT ${PORT}`))

