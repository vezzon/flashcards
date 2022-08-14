const pool = require('../configs/database')

const getCardById = async id => {
    const query = 'SELECT * FROM cards WHERE Id = ?'
    const [rows, fields] = await pool.query(query, [id])
    return rows[0]
}

const getAllCards = async () => {
    const query = 'SELECT * FROM cards'
    const [rows, fields] = await pool.query(query)
    return rows
}

const createCard = async (eng, pl) => {
    const query = 'INSERT INTO cards (Eng,Pl) VALUES (?, ?)'
    await pool.query(query, [eng, pl])
}

const deleteCard = async id => {
    const query = 'DELETE FROM cards WHERE Id = ?'
    await pool.query(query, [id])
}

module.exports = {
    getCardById,
    getAllCards,
    createCard,
    deleteCard
}