const pool = require('../configs/database')
const bcrypt = require('bcrypt')


const getUserById = async id => {
    const query = 'SELECT Email,Password FROM users WHERE Id = ?'
    const [rows, fields] = await pool.query(query, [id]);
    return rows[0]
}

const getUserByEmail = async email => {
    const query = 'SELECT Email,Password FROM users WHERE Email = ?'
    const [rows, fields] = await pool.query(query, [email]);
    return rows[0]
}

const getAllUsers = async () => {
    const query = 'SELECT Email FROM users'
    const [rows, fields] = await pool.query(query)
    return rows
}

const createUser = async (email, password) => {
    const hash = await bcrypt.hash(password, 10)
    const query = 'INSERT INTO users (email,password) VALUES (?, ?)'
    await pool.query(query, [email, hash])
}


module.exports = {
    getUserById,
    getAllUsers,
    createUser,
    getUserByEmail
}