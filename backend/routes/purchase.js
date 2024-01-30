const express = require('express');
const purchaseRoute = express.Router()
const { pool } = require('../db')
const authMiddleware = require('../middleware')
require('dotenv').config();

purchaseRoute.post('/purchase', authMiddleware, async (req, res)=>{
    const user_id = `${(req.headers.user_id)}`;
    console.log(user_id)
    const course_id = `${(req.body.course_id)}`;

    const client = await pool.connect()
    try{
        const response = await client.query(`INSERT INTO enrollments (user_id, course_id) 
        VALUES ('${user_id}', '${course_id}')
         `)
         if(response.command == "INSERT"){
             res.json({
                command: response.command })
            } else{
            throw "Some error occured while transaction"
         }

    } catch(e){
        res.status(411).json(`Error: ${e}`);
    } finally{
        client.release();
        return;
    }
})


purchaseRoute.get('/get-purchase', authMiddleware, async (req, res)=>{
    const user_id = `${(req.headers.user_id)}`;
    const client = await pool.connect()
    try{
        const response = await client.query(`SELECT * FROM enrollments 
        WHERE user_id = '${user_id}';
         `)
         if(response.command == "SELECT"){
             res.json({
                puchases: response.rows })
            } else{
            throw "Some error occured while getting purchases"
         }

    } catch(e){
        res.status(411).json(`Error: ${e}`);
    } finally{
        client.release();
        return;
    }
})



module.exports = purchaseRoute