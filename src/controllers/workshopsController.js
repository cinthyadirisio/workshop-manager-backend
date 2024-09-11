let workshops = ['excel', 'word', 'figma', 'HTML5']

const workshopsController = {
    getAll( req, res ){
        res.status(200).json( { workshops } )
    },
    createOne(req, res){
        const { name } = req.body
        workshops.push(name)
        res.status(202).json( { workshops } )
    }
}

export default workshopsController