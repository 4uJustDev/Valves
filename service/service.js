import supabase from '../config/dbConfig.js'

const addCard = async item => {
	try {
    const { data, error } = await supabase
    .from('Item')
    .insert(item)

		if (error) throw error
		return data
	} catch (e) {
			throw e
	}
}
const getAllCards = async () => {
	try {
        let { data, error } = await supabase
  		.from('Item')
  		.select('*')

		if (error) throw error
		return data
	} catch (e) {
			throw e
	}
}
const getItem = async (id) => {
	try {
			const {data, error} = await supabase
					.from('Item')
					.select(`id, name, type, description, price, model, date, massa, material, run, temp, diam, oblast, eviroment, manuName, manuLink, photoPath`)
					.match({id})

				
			if (error) throw error
			return data
	} catch (e) {
			throw e
	}
}
export default {
	addCard,
	getAllCards,
	getItem

}