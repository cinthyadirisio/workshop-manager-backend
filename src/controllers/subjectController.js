import subjectServices from "../services/subjectServices.js"

const subjectController = {
    async getAllSubjects( req, res ){
        try {
            let allSubjects = await subjectServices.getAllSubjects()
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
           let subject = await subjectServices.getOneById( req.params.id )
            res.status(200).json( { subject } )
        } catch (error) {
            res.status(400).json( {error} )
        }
    },
    async createOne( req, res ){
        try {
            let newSubject = await subjectServices.createOne( req.body )
            res.status(201).json({newSubject})
        } catch (error) {
            res.status(400).json( {error} )
        }
    },
    async deleteOne( req, res ){
        try {
            let subject = await subjectServices.deleteOne( req.params.id )
            res.status(200).json({subject})
        } catch (error) {
            res.status(400).json( {error} )
        }
    },
    async updateOne( req, res ){
        try {
            let subject = await subjectServices.updateOne( req.params.id, req.body, {new:true} )
            res.status(200).json({subject})
        } catch (error) {
            res.status(400).json( {error} )
        }
    },

}

export default subjectController