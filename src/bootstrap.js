import authRouter from "./modules/auth/auth.router.js"
import messageRouter from "./modules/message/message.router.js"
import userRouter from "./modules/user/user.router.js"


function bootstrap(app, express) {
    app.use(express.urlencoded({ extended: true }))
    
    app.use('/auth', authRouter)
    app.use('/message', messageRouter)
    app.use('/user', userRouter)
}

export default bootstrap