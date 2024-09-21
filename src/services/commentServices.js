import commentModel from "../models/commentModel.js"

const commentServices = {
    async getAllComments(){
        return await commentModel.find()
    },
    async getCommentById(id){
        return await commentModel.findById({_id:id})
    },
    async createComment(data){
        return await commentModel.create(data)
    },
    async deleteComment(id){
        return await commentModel.findByIdAndDelete(id)
    },
    async updateComment(id, data){
        return await commentModel.findByIdAndUpdate({_id:id}, data, {new:true})
    },
    async checkWorkshopDate( workshopId ){
        let isPast = workshopId.isPast
        return isPast
    }
}

export default commentServices