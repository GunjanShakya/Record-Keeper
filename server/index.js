import express from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import Connection from "./database/db.js";
import Routes from './routes/route.js'
const app=express();
dotenv.config(); // initialize dotenv
const PORT=9001;

app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use('/',Routes)
const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;
Connection(username,password);
app.listen(PORT, ()=>console.log('server running on port',PORT))