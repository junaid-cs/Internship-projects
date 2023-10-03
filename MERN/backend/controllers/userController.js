
// module.exports = {loginUser,singupUser}
const User = require('../models/userModel')
const jwt = require ('jsonwebtoken')
// create jwt webtoken
const createtoken = (_id)=>{
    return jwt.sign({_id},process.env.SECRET,{expiresIn:'3d'})
}


// login a user
const loginUser = async (req, res) => {
    const {email, password} = req.body

    try {
      const user = await User.login(email, password)
        
      const token = createtoken(user._id)
      res.status(200).json({email, token})
    } catch (error) {
      res.status(400).json({error: error.message})
    }
}

// signup a user
const signupUser = async (req, res) => {
    const {email, password} = req.body

    try {
      const user = await User.signup(email, password)
        
      const token = createtoken(user._id)
      res.status(200).json({email, token})
    } catch (error) {
      res.status(400).json({error: error.message})
    }
//   res.json({mssg: 'signup user'})
}

module.exports = { signupUser, loginUser }