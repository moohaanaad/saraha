import { Message } from "../../../DB/models/message.model.js"

export const getUser = (req, res, next) => {
    res.render('user.ejs',{userId : req.params.id})
}
export const sendMessage = async(req, res, next) => {
    req.body.user = req.params.id
    await Message.create(req.body)
    res.redirect('/user/'+req.params.id)
}