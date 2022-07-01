import Service from '../service/service.js'
const createCard = async (req, res, next) => {
    try {
    const Item = {  
        name: req.body.name,
        model: req.body.model,
        type: req.body.type,
        price: req.body.price,
        date: req.body.date,
        description: req.body.description,
        massa: req.body.massa,
        material: req.body.material,
        run: req.body.run,
        temp: req.body.temp,
        diam: req.body.diam,
        oblast: req.body.oblast,
        eviroment: req.body.eviroment,
        manuName: req.body.manuName,
        manuLink: req.body.manuLink,
        photoName:req.files[0]?.originalname,
        photoPath: req.files[0]?.path,
    }
    // const Photo = {  
	// 	name: req.files[0].originalname,
	// 	SRC: req.files[0].path,
	// }
    await Service.addCard(Item);
    //res.send(`<h1>Данные успешно отправлены</h1><a href='/index.html'>Back to main page</a>   Данные: ` + JSON.stringify(Photo))
    res.redirect('/')
    next();
    } catch(e) {
        console.error(e);
        res.sendStatus(500);
    }
}
const getCards = async (req, res, next) => {
    try {

        const data = await Service.getAllCards()
        // const photos = await Service.getPhotos()
        res.send(data)
        
        // res.send(photos)

    } catch(e) {
        console.error(e);
        res.sendStatus(500);
    }
    
}
// const getCard = async (req, res, next) => {
//     try {

//     //     const data = await Service.getAllCard()
//     //     // const photos = await Service.getPhotos()
//     //     res.send(data)
//             const data = await Service.getAllInfo()
//             res.send(data)
//             //res.send(`<h1>LFkDJsjk ${req.params.id}</h1>`)
//             //res.sendFile(path.resolve(__dirname, 'public', 'product.html'))
//         // res.send(photos)

//     } catch(e) {
//         console.error(e);
//         res.sendStatus(500);
//     }
    
// }
const getEx = async (req, res, next) => {
	try {
		const data = await Service.getItem(req.body.id)
		res.send(data)
	} catch(e) {
			console.error(e);
			res.sendStatus(500);
	}
}
const getSearch = async (req, res, next) => {
	const information = req.body
	if (('price' in information)) {
		try {
			const data = await Service.getSearchNT(req.body)
			res.send(data)
		} catch(e) {
				console.error(e);
				res.sendStatus(500);
		}
	}
}

export default {
	createCard,
    getCards,
    getEx,
    getSearch

}
