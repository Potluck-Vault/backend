const express = require('express')

const Users = require('./model')
const router = express.Router()

router.get('/', (req, res, next) => {
    Users.getAllUsers()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(next);
})

router.get('/:id', (req, res, next) => {
    Users.getUserByID(req.params.id)
    .then(user => {
        res.status(200).json(user);
    })
    .catch(next);
})


module.exports = router

