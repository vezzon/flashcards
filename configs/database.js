const mysql2 = require("mysql2");
require("dotenv").config();

const pool = mysql2.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWD,
  database: process.env.DB_NAME,
});

module.exports = pool.promise();
