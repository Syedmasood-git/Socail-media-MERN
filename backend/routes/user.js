const { signupController,loginController, refreshAccessTokenController } = require('../controllers/signupController')
const router = require('express').Router()

router.post('/signup',signupController)
router.post('/login',loginController)
router.get('/refresh',refreshAccessTokenController)



module.exports=router