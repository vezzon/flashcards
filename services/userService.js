const connection = require('../configs/database')


const getUserById = async id => {
    // const [rows, fields] = await connection.execute(
    //     'SELECT Email,Password FROM users WHERE Id = ?', [id]
    // )
    // console.log(rows, fields)

    async function main() {
        // get the client
        const mysql = require('mysql2/promise');
        // create the connection
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWD,
            database: process.env.DB_NAME,
          });
        // query database
        const [rows, fields] = await connection.execute('SELECT Email,Password FROM users WHERE Id = ?', [id]);
        console.log(rows)
        console.log(fields)
      }

    console.log(main())

}

module.exports = {
    getUserById,

}