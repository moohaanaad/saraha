import mongoSessions from 'connect-mongodb-session'
import dotenv from 'dotenv'
import path from "path"
import express from 'express'
import session from 'express-session'
import { connectDB } from './DB/connection.js'
import bootstrap from './src/bootstrap.js'

dotenv.config({ path: path.resolve('./config/.env') })
const MongoDBStore = mongoSessions(session)
const app = express()
const port = 3000
connectDB()

const store = new MongoDBStore({
    uri: process.env.DB_URL,
    collection: 'mySessions'
});

app.use(session({
    secret:'hondaz',
    resave:false,
    saveUninitialized:true,
    store
}))
app.use('/public',express.static('public'))
app.get('/',(req,res,next)=>{
    res.render('home.ejs')
})
bootstrap(app,express)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))