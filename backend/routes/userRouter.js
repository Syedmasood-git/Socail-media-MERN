const router = require('express').Router()
const { followOrUnfollowUserController,updateUserProfile, getPostsOfFollowings, deleteMyProfile, getUserPosts, getMyInfo } = require('../controllers/userController');
const requireUser = require('../middlewares/requireUser');



router.post('/follow',requireUser,followOrUnfollowUserController)
router.get('/getPostsOfFollowings',requireUser,getPostsOfFollowings)
router.delete('/deleteMyProfile',requireUser,deleteMyProfile)
router.post('/userPost',requireUser,getUserPosts)
router.get('/getMyInfo',requireUser,getMyInfo)
router.put('/',requireUser,updateUserProfile)

module.exports=router;