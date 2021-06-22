const db = require('../data/db-config')

async function getAllPotlucks() {
    const potlucks = await db('potlucks');
    return potlucks.map(potluck => {
        const {
            potluck_id,
            potluck_name,
            potluck_date,
            potluck_time,
            potluck_location,
            user_id, } = potluck;
        return {
            potluck_id: potluck_id,
            potluck_name: potluck_name,
            potluck_date: potluck_date,
            potluck_time: potluck_time,
            potluck_location: potluck_location,
            user_id: user_id 
            }

    })
}

async function getPotluckByID(id) {
	const potluck = await db('potlucks').where('potluck_id', id).first();
	const  {
        potluck_id,
        potluck_name,
        potluck_date,
        potluck_time,
        potluck_location,
        user_id, } =
		potluck;
	return {
        potluck_id: potluck_id,
        potluck_name: potluck_name,
        potluck_date: potluck_date,
        potluck_time: potluck_time,
        potluck_location: potluck_location,
        user_id: user_id 
	};
}

async function createPotluck(potluckToBeCreated) {
	const  {
        potluck_id,
        potluck_name,
        potluck_date,
        potluck_time,
        potluck_location,
        } = potluckToBeCreated;
	const [id] = await db('potlucks').insert({
        potluck_id: potluck_id,
        potluck_name: potluck_name,
        potluck_date: potluck_date,
        potluck_time: potluck_time,
        potluck_location: potluck_location,
     });
	return getPotluckByID(id);
}

module.exports = { getAllPotlucks, getPotluckByID, createPotluck}