const { Favorites, Users, Resources } = require('../models')
class favoritesController {
    static async createFavorites(req, res, next) {
        try {
            const idUser = +req.currentUser.id
            const resourceId = +req.params.id
            let coba = await Users.findOne({
                where: {
                    id : idUser
                }
            },{
                include: {
                    model : Resources,
                    as : 'resource'
                }
            })
            // let resource = await Resources.findByPk(resourceId)
            // console.log(resource );
            // console.log(coba);
            res.status(200).json(coba)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = favoritesController