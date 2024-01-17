const PostModel = require("../Models/PostModel");
const UserModel = require("../Models/userModel");
const { success, error } = require("../utils/responseWrapper");

const getAllPostsController = async(req,res)=>{
    console.log("ReqID",req.id);
    return res.send(success(200,"These are all Posts"))
}

const createPost = async(req,res)=>{
    try {
        const {caption}=req.body;
    const owner = req.id
    const user = UserModel.findById(req.id)
    const post=PostModel.create({owner,caption})
    } catch (err) {
        res.send(error(500,e.message))
    }
    
}
module.exports={
    getAllPostsController,
}