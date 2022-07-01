import { Router } from "express"
import path from "path"
import Controller from "../controllers/controller.js"
import filter from '../middleware/file.js'
const __dirname = path.resolve(path.dirname(''))
const router = Router()

router.post('/add', filter.uploadPhoto, Controller.createCard)
.get('/add', Controller.getCards)

router.post('/', Controller.getSearch)

router.post('/product/:id', Controller.getEx)
.get('/product/:id', (req, res) => {res.sendFile(path.resolve(__dirname, 'public', 'product.html'))})

router.get('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
    })  


    


//router.post('/add', Controller.createCard)
//   
//   .get('/add', Controller.getCards)

// router.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
// })


export default router