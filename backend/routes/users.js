const express = require('express')
const userRoute = express.Router()
const zod = require('zod')
const { pool } = require('../db')
const jwt = require('jsonwebtoken')
const authMiddleware = require('../middleware')
require('dotenv').config();

const getUserSchema = zod.object({
    email: zod.string().min(3),
    password: zod.string().min(3)
})

// Get user => login
userRoute.post('/getuser', async(req, res)=>{
    const body = req.body;
    const zodSafeParse = getUserSchema.safeParse(body)
    if(!zodSafeParse.success){
        res.status(411).json({ msg: "Zod err" })
        return;
    }
    const client = await pool.connect();
    try{
        const response = await client.query(`SELECT user_id, firstname, lastname, email FROM users
        WHERE email = '${body.email}'
        AND password = '${body.password}';
        `)
        if(response.rowCount == 0){
            throw "User does not exist"
        } else{
            const token = jwt.sign(body.email, process.env.JWT_SECRET)
             res.json({
                user: response.rows[0], // put the user_id in headers
                token: token})           
        }
      } catch(e){
        res.status(411).json({msg: `Error: ${e}`});
      } finally{
        client.release();
        return;
      } 
})

const createUserSchema = zod.object({
    firstname: zod.string().min(3),
    lastname: zod.string().min(3),
    email: zod.string().min(3),
    password: zod.string().min(3),
    role: zod.string()
})

// Create new user
userRoute.post('/createUser', async (req, res)=>{
    const body = req.body;
    const zodSafeParse = createUserSchema.safeParse(body)
    if(!zodSafeParse.success){
        res.status(411).json({ msg: "Zod err" })
        return;
    }
    const client = await pool.connect()
    try{
        const response = await client.query(`INSERT INTO users ("firstname", "lastname", "email", "password", "role")
         VALUES ('${body.firstname}', '${body.lastname}', '${body.email}', '${body.password}', '${body.role}');
         `)
         if(response.command == "INSERT"){
             const token = jwt.sign(body.email, process.env.JWT_SECRET)
             console.log(token)
             res.json({
                command: response.command,
                token: token})
            } else{
            throw "Some error occured while creating user"
         }

    } catch(e){
        res.status(411).json({msg:`Error: ${e}`});
    } finally{
        client.release();
        return;
    }
})

const updateUserSchema = zod.object({
    email: zod.string(),
    oldPassword: zod.string().min(3),
    newPassword: zod.string().min(3)
})
// Update user details
userRoute.put('/updateUser', authMiddleware, async (req, res)=>{
    const body = req.body;
    const zodSafeParse = updateUserSchema.safeParse(body)
    if(!zodSafeParse.success){
        res.status(411).json({ msg: "Zod err" })
        return;
    }

    const client = await pool.connect();
    try {
        const response = await client.query (`UPDATE users
        SET password = '${body.newPassword}'
        WHERE email = '${body.email}' 
        AND password = '${body.oldPassword}';
        `)
        if(!response.rowCount){
            throw "Invaid email or password"
        }
        res.json({msg: response.command})

    } catch(e){
        res.status(411).json(`Error: ${e}`);
    } finally{
        client.release();
        return;
    } 
})


userRoute.delete('/deleteUser', authMiddleware, async (req, res)=>{
    const body = req.body;
    const zodSafeParse = getUserSchema.safeParse(body)
    if(!zodSafeParse.success){
        res.status(411).json({ msg: "Zod err" })
        return;
    }
    const client = await pool.connect();
    try {
        const response = await client.query (`DELETE FROM users
        WHERE email = '${body.email}' 
        AND password = '${body.password}';
        `)
        if(!response.rowCount){
          throw "Invaid email or password"
        }
        res.json({msg: response.command})
  
    } catch(e){
        res.status(411).json(`Error: ${e}`);
    } finally{
      client.release();
    }   
})


module.exports = userRoute