const User = require('../models').User
const Role = require('../models').Role

module.exports = {
    user: async (req, res) =>{
        try{
            let {users,userName, password, email} =req.body
            let post = await User.create({userName, password, email})
            post.setRoles(users)
            return res.status(200).json(post);
        }catch (err) {
            return res.status(500).json({ err });
        }

    },
    role:async (req, res) =>{
        try{
            let {name, status} =req.body
            console.log(status)
            let post = await Role.create({name, status})
            console.log(post)
            return res.status(200).json(post);
        }catch (err) {
            return res.status(500).json({ err });
        }

    }
}