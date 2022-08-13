const bcrypt = require('bcrypt')
const connection = require('../configs/database')
const tokenHandler = require('../auth/tokenHandler')



const get_signup = (req, res) => {
    res.render('signup')
}

const get_login = (req, res) => {
    res.render('login')
}

const post_signup = (req, res) => {
    const { email, password } = req.body
    const hash = bcrypt.hashSync(password, 10)
    connection.query(
        'INSERT INTO users (email,password) VALUES (?, ?)',
        [email, hash],
        (err, results) => {
            if (err) {
                res.redirect('/register')
            } else {
                console.log(results)
                res.redirect('/login')
            }
        }
    )
}

const post_login = (req, res) => {
    const { email, password } = req.body
    connection.query(
        'SELECT Email,Password FROM users WHERE Email = ?',
        [email],
        (err, results) => {
            if (err) {
                res.json({
                    success: 0,
                    message: err // FOR DEV PURPOSES TODO CHANGE
                })
            } else {
                const compareHash = bcrypt.compareSync(password, results[0].Password)
                if (compareHash) {
                    const token = tokenHandler.generateAccessToken({email})
                    console.log(token)
                    res.redirect('/')
                    // res.json({
                    //     success: 1,
                    //     message: `User successfuly logged in!`
                    // })
                } else {
                    res.redirect('/login')
                }
            }
        }
    )
}


module.exports = {
    get_signup,
    get_login,
    post_signup,
    post_login
}