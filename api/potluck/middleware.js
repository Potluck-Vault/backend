// const db = require('../data/db-config');

function validatePotluck(req, res, next) {
	const { potluck_name, potluck_date, potluck_time, potluck_location } = req.body;
	if (!potluck_name || typeof potluck_name !== 'string') {
		next({
			status: 400,
			message: 'Invalid potluck name'
		});
	} else if (!potluck_date || typeof potluck_date !== 'string') {
        next({
			status: 400,
			message: 'Invalid potluck date'
		});
    } else if (!potluck_time || typeof potluck_time !== 'string') {
        next({
			status: 400,
			message: 'Invalid potluck time'
		});
    } else if (!potluck_location || typeof potluck_location !== 'string') {
        next({
			status: 400,
			message: 'Invalid potluck location'
		});
    }
    else {
		next();
	}
}

module.exports = {
    validatePotluck
}