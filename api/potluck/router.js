const express = require('express')
const { validatePotluck } = require('./middleware')

const Potlucks = require('./model')
const router = express.Router()

router.get('/', (req, res, next) => {
    Potlucks.getAllPotlucks()
        .then(potlucks => {
            res.status(200).json(potlucks);
        })
        .catch(next);
})

router.get('/:id', (req, res, next) => {
    Potlucks.getPotluckByID(req.params.id)
    .then(potluck => {
        res.status(200).json(potluck);
    })
    .catch(next);
})

router.post('/', validatePotluck, (req, res, next) => {
	Potlucks.createPotluck(req.body)
		.then(potluck => {
			res.status(200).json(potluck);
		})
		.catch(next);
});

module.exports = router

