const express = require('express');
const dbConnect = require('./db/dbconnect');
const app = express();
const dotenv=require('dotenv').config()
const userRouter = require('./routes/user')
const postRouter = require('./routes/postsRouter')
const cookieParser = require('cookie-parser') 
const cors =require('cors')

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials:true,
    origin:'http://localhost:3000'
}))
 
dbConnect();

app.get('/',(req,res)=>{
    res.send('Done')
})
app.use('/auth',userRouter)
app.use('/posts',postRouter)


app.listen(process.env.PORT,()=>{
    console.log(`Server is runing on ${process.env.PORT}`);
})