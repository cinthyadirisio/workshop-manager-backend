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
            if (!workshop) throw new Error(`The provided ID doesn't match any registered IDs`)
            res.status(200).json( { workshop } )
        } catch (error) {
            console.log(error)
            res.status(400).json( {error} )
        }
    },
    async getOneByName( req, res ){
        try {
            let workshop = await workshopServices.findByName( { title: req.body.title } )
            if (!workshop) throw new Error('No workshops found with the provided title')
            res.status(200).json( { workshop } )
        } catch (error) {
            res.status(400).json({error})
        }
        },
    async createOne(req, res){
        try {
            let newWorkshop = await workshopServices.createOne( req.body )
            if (!newWorkshop) throw new Error(`The workshop couldn't be created`)
            res.status(201).json({newWorkshop})
        } catch (error) {
            res.status(400).json({error})
        }
    },
    async deleteOne( req, res ){
        try {
            let workshop = await workshopServices.createOne( req.params.id )
            if(!workshop) throw new Error( `The provided ID doesn't match any registered IDs, couldn't delete` )
            res.status(200).json({workshop})
        } catch (error) {
            res.status(400).json({error})
        }
    },
    async updateOne( req, res ){
        try {
            let workshop = await workshopServices.updateOne({_id: req.params.id}, req.body, {new:true})
            if(!workshop) throw new Error( `The provided ID doesn't match any registered workshop IDs, couldn't update` )
            res.status(200).json({workshop})
        } catch (error) {
            res.status(400).json({error})
        }
    }
}

export default workshopsController