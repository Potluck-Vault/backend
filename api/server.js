const express = require('express')
const server = express()

const helmet = require('helmet')
const cors = require('cors')


const potlucksRouter = require('./potluck/router')
const usersRouter = require('./user/router')
const authRouter = require('./auth/auth-router')
const restrict = require('./auth/auth-middleware') // needs to be added to signed in page

server.use(express.json())
server.use('/api/potlucks', potlucksRouter)
server.use('/api/users', usersRouter)
server.use(helmet())
server.use(cors())



server.use((err, req, res, next) => { 
	res.status(err.status || 500).json({
		custom: "Uh on something is up with the sever!",
		message: err.message,
		stack: err.stack
	});
});


module.exports = server
