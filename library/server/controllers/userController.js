const { Users } = require('../models')
const { comparePass } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jswt')
class UserController{
    static register(req, res, next){
        let newUser = {
            email: req.body.email,
            password: req.body.password,
            username: req.body.username
        }
        Users.create(newUser)
            .then(user => {
                console.log(user, "<<");
                res.status(201).json({
                    msg : 'User created'
                })
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static login(req, res, next){
        let userInput = {
            email : req.body.email,
            password : req.body.password
        }
        Users.findOne({ where: {
            email : userInput.email
        }}).then(user => {
            if(user && comparePass(userInput.password, user.password)){
                const access_token = generateToken({
                    id : user.id,
                    email : user.email
                }, process.env.SECRET_KEY)
                res.status(200).json({
                    access_token: access_token
                })
            }else{
                res.status(400).json({
                    msg : 'email or password incorrect'
                })
            }
        }).catch(err => {
            console.log(err);
        })
    }

    static async getOneUser(req, res, next){
        try {
            const { id } = req.decoded
            let dataUser = await Users.findOne({
                where: {
                    id: id
                }
            })
            let user = {
                email: dataUser.email,
                id: dataUser.id,
                username: dataUser.username,
                headline: dataUser.headline,
                linkedin: dataUser.linkedin,
                instagram: dataUser.instagram,
                github: dataUser.github
            }
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static editProfile(req, res, next){
        const { id } = req.currentUser
        const { username, headline, linkedin, github, instagram } = req.body
        Users.update({ 
            username, 
            headline, 
            linkedin, 
            github, 
            instagram 
        },{
            where: {
                id
            },returning : true
        })
        .then(user => {
            let data = user[1][0]
            let updatedUser = {
                username: data.username,
                headline: data.headline,
                linkedin: data.linkedin,
                github: data.github,
                instagram: data.instagram
            }
            res.status(200).json(updatedUser)
        })
        .catch(err => {
            res.status(500).json(err)
        })
    }
}

module.exports = UserController