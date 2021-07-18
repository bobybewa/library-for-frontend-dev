const { Users, Resources } = require('../models')
const { verifyToken } = require('../helpers/jswt')

const authenticate = (req, res, next) => {
    try {
        const access_token = req.headers.access_token
        const decoded = verifyToken(access_token)
        req.decoded = decoded

        const user = { 
            id : decoded.id,
            email : decoded.email
        }

        Users.findOne({ 
            where: user
        }).then(dataUser => {
            if(dataUser){
                req.currentUser = user
                next()
            }else{
                res.status(404).json({
                    msg : 'User not found'
                })
            }
        }).catch(err => {
            res.status(500).json(err)
        })
    } catch (error) {
        res.status(404).json(error)
    }
}

const authorize = (req,res, next) => {
    const id = +req.params.id
    Resources.findByPk(id)
        .then(userResources => {
            if(userResources){
                const check = userResources.UserId === req.currentUser.id
                if(check){
                    next()
                }else{
                    res.status(401).json({
                        msg: 'Unauthorize'
                    })
                }
            }else{
                res.status(404).json({
                    msg : 'Not Found'
                })
            }
        }).catch(err =>{
            res.status(500).json(err)
        })
}

module.exports = {
    authorize,
    authenticate
}