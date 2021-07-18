const { Resources } = require('../models')
class ResourceController {
    static async getAll(req,res,next) {
        try {
            let resources = await Resources.findAll()
            // console.log/(resources);
            res.status(200).json(resources)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async createResource(req,res,next){
        try {
            const { id } = req.currentUser;
            const resource = {
                title: req.body.title,
                description: req.body.description,
                link: req.body.link,
                UserId : id
            }
            let newResource = await Resources.create(resource)
            res.status(201).json({
                msg : 'Resource created successfully'
            })
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async getOne(req, res,next){
        try {
            const { id } = req.params
            let resource = await Resources.findByPk(+id)
            res.status(200).json(resource)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async deleteResource(req, res, next){
        try {
            const { id } = req.params
            await Resources.destroy({
                where: { id : id },
            })
                res.status(200).json(
                    {
                        msg : 'delete resource successfully'
                    }
                )
        } catch (error) {
            res.status(500).json(err)
        }
    }

    static editResource(req, res,next){
        const { title, description, link } = req.body
        const { id } = req.params
        Resources.findByPk(id)
            .then(resource => {
                if(resource){
                    return Resources.update({
                        title,
                        description,
                        link
                    }, {
                        where: {
                            id : id
                        },returning: true
                    })
                }else{
                    res.status(404).json({
                        msg : 'Not Found'
                    })
                }
            })
            .then(resourceUpdated => {
                res.status(200).json(resourceUpdated[1][0])
            })
            .catch(err => {
                let newErr = err.errors.map(err => err.message)
                res.status(500).json({
                    msg : newErr
                })
            })
    }
}

module.exports = ResourceController