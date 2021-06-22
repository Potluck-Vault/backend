const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const authRouter = require('./auth/auth-router')
const restrict = require('./auth/auth-middleware')
const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

//server.use('/api/auth', authRouter);
//server.use('/api/###', restrict, )

module.exports = server
