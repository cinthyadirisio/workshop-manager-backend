import workshopModel from '../models/workshopModel.js'

const workshopsController = {
    async getAll( req, res ){
        try {
            let allWorkshops = await workshopModel.find()
            res.status(200).json( { allWorkshops } )
        } catch (error) {
            console.log( error )
            res.status(400).json({ error })
        }
    },
    async getOneById( req, res ){
        try {
            let workshop = await workshopModel.findById( req.params.id )
            if(!workshop) throw new Error( `The provided ID doesn't match any registered IDs` )
            res.status(200).json( { workshop } )
        } catch (error) {
            console.log(error)
            res.status(400).json( {error} )
        }
    },
    async getOneByName( req, res ){
        try {
            const workshop = await workshopModel.findOne( { title: req.body.title } )
            if(!workshop) throw new Error( 'No workshops found with the provided title' )
            res.status(200).json( { workshop } )
        } catch (error) {
            res.status(400).json({error})
        }
        },
    async createOne(req, res){
        try {
            let newWorkshop = await workshopModel.create( req.body )
            res.status(201).json({newWorkshop})
        } catch (error) {
            res.status(400).json({error})
        }
    },
    async deleteOne( req, res ){
        try {
            let workshop = await workshopModel.findByIdAndDelete( req.params.id )
            if(!workshop) throw new Error( `The provided ID doesn't match any registered IDs, couldn't delete` )
        } catch (error) {
            res.status(400).json({error})
        }
    },
    async updateOne( req, res ){
        try {
            let workshop = await workshopModel.findByIdAndUpdate( {_id: req.params.id}, req.body, {new:true} )
            if(!workshop) throw new Error( `The provided ID doesn't match any registered IDs, couldn't update` )
            res.status(200).json({workshop})
        } catch (error) {
            res.status(400).json({error})
        }
    }
}

export default workshopsController