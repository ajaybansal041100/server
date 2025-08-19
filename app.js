const express = require('express')
const app = express()
const port = 3000
const web = require('./routes/web')
const connectDB=require('./db/connectDB')
const fileuplaod=require('express-fileupload')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require("dotenv").config();



app.use(
    cors({
        origin:"http://localhost:5173", // your frontend domain
        credentials:true,  // allow credentials (cookies)
    })
);



// token get cookie
app.use(cookieParser())


//image uplaod 
app.use(fileuplaod({
    useTempFiles:true,
    tempFileDir:'/tmp/'
}));


//connectDb
connectDB()


app.use(express.json())
app.use('/api/',web) //localhost:3000/api/
app.listen(process.env.PORT,console.log("server started at localhost:3000"))