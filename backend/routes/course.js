const express = require('express')
const zod = require('zod')
const { pool } = require('../db')
const jwt = require('jsonwebtoken')
const authMiddleware = require('../middleware')
require('dotenv').config();

const courseRoute = express.Router()


const newCourseSchmea = zod.object({
    title: zod.string().min(3),
    description: zod.string().min(3),
    price: zod.number()
})
courseRoute.post('/new-course',authMiddleware, async (req, res)=>{
    const body = req.body;
    const zodSafeParse = newCourseSchmea.safeParse(body)
    if(!zodSafeParse.success){
        res.status(411).json({ msg: "Zod err" })
        return;
    }
    const client = await pool.connect()
    try{
        const response = await client.query(`INSERT INTO courses ("title", "description", "price")
         VALUES ('${body.title}', '${body.description}', '${body.price}');
         `)
         if(response.command == "INSERT"){
             res.json({ command: response.command })
            } else{
            throw "Some error occured while creating user"
         }

    } catch(e){
        res.status(411).json(`Error: ${e}`);
    } finally{
        client.release();
        return;
    }
})


const updateCourseSchema = zod.object({
    title: zod.string().min(3),
    description: zod.string().min(3),
    price: zod.number()
})
// Update course details
courseRoute.put('/update-course', authMiddleware, async (req, res)=>{
    const body = req.body;
    const zodSafeParse = updateCourseSchema.safeParse(body)
    if(!zodSafeParse.success){
        res.status(411).json({ msg: "Zod err" })
        return;
    }

    const client = await pool.connect();
    try {
        const response = await client.query (`UPDATE courses
        SET description = '${body.description}', price = '${body.price}'
        WHERE title = '${body.title}';
        `)
        if(!response.rowCount){
            throw `No course for ${body.title} found`
        }
        res.json({msg: response.command})

    } catch(e){
        res.status(411).json(`Error: ${e}`);
    } finally{
        client.release();
        return;
    } 
})


const deleteCourseSchema = zod.object({
    title: zod.string().min(3)
})

courseRoute.delete('/delete-course', authMiddleware, async (req, res)=>{
    const body = req.body;
    const zodSafeParse = deleteCourseSchema.safeParse(body)
    if(!zodSafeParse.success){
        res.status(411).json({ msg: "Zod err" })
        return;
    }
    const client = await pool.connect();
    try {
        const response = await client.query (`DELETE FROM courses
        WHERE title = '${body.title}' ;
        `)
        if(!response.rowCount){
          throw "Invaid course name"
        }
        res.json({msg: response.command})
  
    } catch(e){
        res.status(411).json(`Error: ${e}`);
    } finally{
      client.release();
    }   
})


module.exports = courseRoute