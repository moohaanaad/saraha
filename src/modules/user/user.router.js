import { Router } from "express";
import { getUser, sendMessage } from "./user.controller.js";

const userRouter = Router()

userRouter.get('/:id',getUser)
userRouter.post('/sendMessage/:id', sendMessage)

export default userRouter