const { Favorites, Users, Resources } = require('../models')
class favoritesController {
    static createFavorites(req, res, next) {
        const idUser = +req.currentUser.id
        const resourceId = +req.params.id

        Favorites.findOne({
            where: {
                ResourcesId : resourceId
            }
        })
            .then(data => {
                if(!data){
                    return Favorites.create({
                        UsersId : idUser,
                        ResourcesId : resourceId
                    }, {include: [{model: Resources, as : 'Resources'}]})
                }else{
                    res.status(403).json({
                        msg : 'Already created'
                    })
                }
            })
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                console.log(err ,"<<<");
            })
    }


    static showFavorites(req, res, next){
        const idUser = +req.currentUser.id

        Favorites.findAll({
            where: {
                UsersId : idUser,
            }, include : [{model : Resources, as : "Resources"}]
        })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            console.log(err);
        })
    }

    static deleteFavorite(req, res, next){
        const id = +req.params.id;
        const idUser = +req.currentUser.id
        Favorites.destroy({
            where: {
                ResourcesId : id,
                UsersId : idUser
            }
        })
        .then(() => {
            console.log(id);
            console.log(idUser);
            res.status(200).json({ 
                msg : 'Successfully'
            })
        })
        .catch(err => {
            res.status(500).json(err)
        })
    }
}

module.exports = favoritesController