import express from 'express';
import connectToDB from './config/db.js'

const app = express();
connectToDB()



app.listen(1234, ()=>{
    console.log("server started at Port: 1234")
})