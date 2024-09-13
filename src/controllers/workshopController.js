import workshopServices from '../services/workshopServices.js'

const workshopsController = {
    async getAll( req, res ){
        try {
            let allWorkshops = await workshopServices.getAll()
            res.status(200).json( { allWorkshops } )
        } catch (error) {
            console.log( error )
            res.status(400).json({ error })
        }
    },
    async getOneById( req, res ){
        try {
            let workshop = await workshopServices.getOneById( req.params.id )
            res.status(200).json( { workshop } )
        } catch (error) {
            console.log(error)
            res.status(400).json( {error} )
        }
    },
    async getOneByName( req, res ){
        try {
            let workshop = await workshopServices.getOneByName( { title: req.body.title } )
            res.status(200).json( { workshop } )
        } catch (error) {
            res.status(400).json({error})
        }
        },
    async createOne(req, res){
        try {
            let newWorkshop = await workshopServices.createOne( req.body )
            res.status(201).json({newWorkshop})
        } catch (error) {
            res.status(400).json({error})
        }
    },
    async deleteOne( req, res ){
        try {
            let workshop = await workshopServices.createOne( req.params.id )
            res.status(200).json({workshop})
        } catch (error) {
            res.status(400).json({error})
        }
    },
    async updateOne( req, res ){
        try {
            let workshop = await workshopServices.updateOne({_id: req.params.id}, req.body, {new:true})
            res.status(200).json({workshop})
        } catch (error) {
            res.status(400).json({error})
        }
    }
}

export default workshopsController