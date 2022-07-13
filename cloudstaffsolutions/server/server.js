import app from './app.js';
import dotenv from 'dotenv';
import connectDataBase from './config/database.js';
//Config
dotenv.config({path:'server/config/config.env'})
connectDataBase();
app.listen(process.env.PORT,()=>{
    console.log(`Server Is Running on Port ${process.env.PORT}`);
})