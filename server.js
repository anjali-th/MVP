require('dotenv').config();
const express = require("express");

const app = express();


const { Pool } = require ('pg');
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

const PORT = process.env.PORT;

app.use(express.static('public'));

app.get('/api', (req, res)=>{
    pool.query( 'SELECT * FROM appUsers', (err, result)=>{
        if (err){
            res.sendStatus(500);
        }else{
            res.send(result.rows);

        }
    })
})


app.listen(PORT, ()=>{
    console.log (`Listening on port ${PORT}`);
})