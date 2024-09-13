import workshopModel from "../models/workshopModel.js"

const workshopServices = {
    async getAll() {
        try {
            let allWorkshops = await workshopModel.find()
            return allWorkshops
        } catch (error) {
            return []
        }
    },
    async getOneById(id) {
        try {
            let workshop = await workshopModel.findById(id)
            if (!workshop) throw new Error(`The provided ID doesn't match any registered IDs`)
            return workshop
        } catch (error) {
            return {}
        }
    },
    async getOneByName(title) {
        try {
            let workshop = await workshopModel.findOne(title)
            if (!workshop) throw new Error('No workshops found with the provided title')
            return workshop
        } catch (error) {
            return {}
        }
    },
    async createOne(data) {
        try {
            let newWorkshop = await workshopModel.create({data})
            if (!newWorkshop) throw new Error(`The workshop couldn't be created`)
            return newWorkshop
        } catch (error) {
            return {}
        }
    },
    async deleteOne( id ){
        try {
            let workshop = await workshopModel.findByIdAndDelete( id )
            if(!workshop) throw new Error( `The provided ID doesn't match any registered IDs, couldn't delete` )
            return workshop
        } catch (error) {
            return {}
        }
    },
    async updateOne(  id, data, newTrue ){
        try {
            let workshop = await workshopModel.findByIdAndUpdate( {_id:id}, data, newTrue )
            if(!workshop) throw new Error( `The provided ID doesn't match any registered workshop IDs, couldn't update` )
            return workshop
        } catch (error) {
            return {}
        }
    }

}

export default workshopServices