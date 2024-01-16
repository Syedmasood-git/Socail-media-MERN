const { success } = require("../utils/responseWrapper");

const getAllPostsController = async(req,res)=>{
    console.log("ReqID",req.id);
    return res.send(success(200,"These are all Posts"))
}

module.exports={
    getAllPostsController,
}