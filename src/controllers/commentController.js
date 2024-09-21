import commentServices from "../services/commentServices.js"
import CustomError from "../utils/errorCustomizer.js"
import responseCustomizer from "../utils/responseCustomizer.js"
import errorCatcher from "../utils/errorCatcher.js"
import workshopServices from "../services/workshopServices.js"

const commentController = {
    async getAllComments(req, res){
        let comments = await commentServices.getAllComments()
        responseCustomizer(res, 200, comments, 'All comments retrieved successfully')
    },
    async getCommentById(req, res){
        let comment = await commentServices.getCommentById( req.params.id )
        if (!comment) throw new CustomError(`The provided ID doesn't match any registered comment IDs`, 404)
        responseCustomizer(res, 200, comment, 'Comment retrieved successfully')
    },
    async createComment(req, res){
        let workshop = await workshopServices.getOneById(req.body.workshopId)
        if (!workshop) throw new CustomError('Workshop not found', 404)

        if (!workshop.isPast) throw new CustomError('You can only comment on past Workshops', 400)

        const userId = req.body.userId
        const isParticipant = workshop.participants.includes(userId)
        if (!isParticipant) throw new CustomError('You can only comment if you are a participant of the Workshop', 403)
        
        let comment = await commentServices.createComment(req.body)
        if (!comment) throw new CustomError(`The comment couldn't be created`, 400)
        responseCustomizer(res, 201, comment, 'Comment created successfully')
    },
    async deleteOneComment(req, res){
        let comment = await commentServices.deleteComment(req.params.id)
        if (!comment) throw new CustomError(`The provided ID doesn't match any registered comment IDs, couldn't delete`, 404)
        responseCustomizer(res, 200, comment, 'Comment deleted successfully')
    },
    async updateOneComment(req, res){
        let comment = await commentServices.updateComment(req.params.id, req.body) 
        if (!comment) throw new CustomError(`The provided ID doesn't match any registered comment IDs, couldn't update`, 404)
        responseCustomizer(res, 200, comment, 'Comment updated successfully')
    },
}

export default {
    getAllComments: errorCatcher(commentController.getAllComments),
    getCommentById: errorCatcher(commentController.getCommentById),
    createComment: errorCatcher(commentController.createComment),
    deleteOneComment: errorCatcher(commentController.deleteOneComment),
    updateOneComment: errorCatcher(commentController.updateOneComment)
}