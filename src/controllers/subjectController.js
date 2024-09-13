import subjectModel from '../models/subjectModel.js'

const subjectController = {
    async getAllSubjects( req, res ){
        try {
            let allSubjects = await subjectModel.find()
            res.status(200).json({allSubjects})
        } catch (error) {
            res.status(400).json( {error} )
        }
    },
    // async getSubjectsByWorkshop( req, res ){
    //     try {
    //         let subjects = await subjectModel.find({  })
    //         res.status(200).json()
    //     } catch (error) {
    //         res.status(400).json( {error} )
    //     }
    // },
    async getOneById( req, res ){
        try {
            let subject = await subjectModel.findById( req.params.id )
            if(!subject) throw new Error( `The provided ID doesn't match any registered subject IDs` )
            res.status(200).json( { subject } )
        } catch (error) {
            res.status(400).json( {error} )
        }
    },
    async createOne( req, res ){
        try {
            let newSubject = await subjectModel.create( req.body )
            if(!newSubject) throw new Error( `The subject couldn't be created` )
            res.status(201).json({newSubject})
        } catch (error) {
            res.status(400).json( {error} )
        }
    },
    async deleteOne( req, res ){
        try {
            let subject = await subjectModel.findByIdAndDelete( req.params.id )
            if(!subject) throw new Error( `The provided ID doesn't match any registered subject IDs, couldn't delete` )
            res.status(200).json({subject})
        } catch (error) {
            res.status(400).json( {error} )
        }
    },
    async updateOne( req, res ){
        try {
            let subject = await subjectModel.findByIdAndUpdate( {_id: req.params.id}, req.body, {new:true} )
            if(!subject) throw new Error( `The provided ID doesn't match any registered subject IDs, couldn't update` )
            res.status(200).json({subject})
        } catch (error) {
            res.status(400).json( {error} )
        }
    },

}

export default subjectController