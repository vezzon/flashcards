const tokenHandler = require('../auth/tokenHandler')
const bcrypt = require('bcrypt')
const userService = require('../services/userService')



const get_signup = async (req, res) => {
    res.render('signup')
}

const get_login = (req, res) => {
    res.render('login')
}

const post_signup = async (req, res) => {
    const { email, password } = req.body
    try {
        await userService.createUser(email, password)
        res.redirect('/login')
    } catch (error) {
        console.log(error)
        res.redirect('/register')
    }
}

const post_login = async (req, res) => {
    const { email, password } = req.body
    const user = await userService.getUserByEmail(email)
    if (await bcrypt.compare(password, user.Password)) {
        console.log(user)
    } else {
        console.log('something went wrong')
    }
}


module.exports = {
    get_signup,
    get_login,
    post_signup,
    post_login
}