const mysql2 = require('mysql2/promise')
require('dotenv').config()

const connection = mysql2.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWD,
  database: process.env.DB_NAME,
})

module.exports = connection