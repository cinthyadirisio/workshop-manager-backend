import workshopModel from "../models/workshopModel.js"

const workshopServices = {
    async getAll() {
            let allWorkshops = await workshopModel.find()
            return allWorkshops
    },
    async getOneById(id) {
            let workshop = await workshopModel.findById(id)
            return workshop
    },
    async findByName(title) {
            let workshop = await workshopModel.findOne(title)
            return workshop
    },
    async createOne(data) {
            let newWorkshop = await workshopModel.create({data})
            return newWorkshop
    },
    async deleteOne( id ){
            let workshop = await workshopModel.findByIdAndDelete( id )
            return workshop
    },
    async updateOne(  id, data, newTrue ){
            let workshop = await workshopModel.findByIdAndUpdate( {_id:id}, data, newTrue )
            return workshop
    }

}

export default workshopServices