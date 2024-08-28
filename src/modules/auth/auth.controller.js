import { User } from './../../../DB/models/user.model.js'
export const login = (req, res, next) => {
    res.render('login.ejs',{ error:req.query.error })
}
export const register = (req, res, next) => {
    res.render('register.ejs', { error: req.query.error })
}
export const handleLogin = async(req, res, next) => {
    //get data
    const { email, password } = req.body
    //cehck existence
    const userExist =  await User.findOne({ email })
    if(!userExist || !(userExist.password ==password)) {
        return res.redirect('/auth/login?error=invaled  credential')
    }
    req.session.isLogedIn = true
    req.session.email = userExist.email
    req.session.userId = userExist._id.toString()

    res.redirect('/message')
}
export const handleRegister = async (req, res, next) => {
    //get  data 
    const { email } = req.body
    //cehck existence
    const userExist = await User.findOne({ email })
    if (userExist) {
        return res.redirect('/auth/register?error=user already exist')
    }
    await User.create(req.body)
    return res.redirect('/auth/login')
}