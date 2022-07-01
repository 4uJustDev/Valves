import express from 'express'
import path from 'path'
import router from "./router/router.js"
import 'dotenv/config'
import cors from 'cors';

const PORT = process.env.PORT || 3000

const app = express()
const __dirname = path.resolve(path.dirname(''));
app.use(cors());
app.use(express.static(path.resolve(__dirname, 'public')))
app.use(express.json( { extended: true }));
app.use(express.urlencoded( {extended: false}))
app.use(router);


app.listen(PORT, () => {
console.log(`Server started at PORT ${PORT}`)
})