const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    require: true,
  },
});

// USERS ==>
async function insertUser(fname, lname, email, password){
  const client = await pool.connect();
  try{
    const response = await client.query(`INSERT INTO users ("firstname", "lastname", "email", "password") VALUES ('${fname}', '${lname}', '${email}', '${password}');`)
    console.log(response.command);
  } catch(e){
    console.log(`Error: ${e}`);
  } finally{
    client.release();
  }
}
// insertUser('admin', 'admin', 'admin@admin.admin', 'admin')

async function getUser(email, password){
  const client = await pool.connect();
  try{
    const response = await client.query(`SELECT * FROM users
    WHERE email = '${email}'
    AND password = '${password}';
    `)
    console.log(response.rows[0])
  } catch(e){
    console.log(`Error: ${e}`);
  } finally{
    client.release();
  } 
}
// getUser('admin@admin.admin', 'admin')

async function getAllUser(){
  const client = await pool.connect();
  try{
    const response = await client.query(`SELECT firstname, lastname, email
    FROM users;
    `)
    console.log(response.rows)
  } catch(e){
    console.log(`Error: ${e}`);
  } finally{
    client.release();
  } 
}
// getAllUser()

async function updateUserPassword(email, oldPassword, newPassowrd){
  const client = await pool.connect();
  try {
      const response = await client.query (`UPDATE users
      SET password = '${newPassowrd}'
      WHERE email = '${email}' 
      AND password = '${oldPassword}';
      `)
      console.log(response)

  } catch(e){
    console.log(`Error: ${e}`);
  } finally{
    client.release();
  } 
}
updateUserPassword('admin@admin.admin', 'admin@1234', 'admin');

async function deleteUser(email, password){
  const client = await pool.connect();
  try {
    const response = await client.query (`DELETE FROM users
    WHERE email = '${email}'
    AND password '${password}';
    `)
    console.log(response) 

  } catch(e){
    console.log(`Error: ${e}`);
  } finally{
    client.release();
  } 
}