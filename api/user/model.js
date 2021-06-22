const db = require('../data/db-config')

async function getAllUsers() {
    const users = await db('users');
    return users.map(users => {
        const {
            user_id,
            user_username,
            user_email,
            } = users;
        return {
            user_id: user_id,
            user_username: user_username,
            user_email: user_email
            }

    })
}

async function getUserByID(id) {
	const user = await db('users').where('user_id', id).first();
	const {
        user_id,
        user_username,
        user_email,
        } = user;
    return {
        user_id: user_id,
        user_username: user_username,
        user_email: user_email
        }
}


module.exports = { getAllUsers, getUserByID }