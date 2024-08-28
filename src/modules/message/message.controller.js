import QRcode from 'qrcode'
import { Message } from '../../../DB/models/message.model.js'
export const getMessages = async (req, res, next) => {
    if (!req.session.isLogedIn) {
        return res.redirect('/auth/login')
    }
    const url = `http://localhost:3000/user/${req.session.userId}`
    const qrCode = await QRcode.toDataURL(url)
    const messages = await Message.find({ user: req.session.userId })
    return res.render('message.ejs', { url, qrCode, messages })
}