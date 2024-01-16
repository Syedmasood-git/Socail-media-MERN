const mongoose = require('mongoose')

const dbConnect = async()=>{
    try {
         mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log('DB connected');
    }).catch(err=>console.log(err))
    } catch (error) {
        console.log(error);
    }
   
}
module.exports = dbConnect