const express = require('express');
const session = require("express-session")


// const authenticate = require('./auth/authenticate-middleware');
const authRouter = require('../auth/auth-router');
const jokesRouter = require('../jokes/jokes-router.js');

const server = express();
server.use(express.json());
server.use(session({
	resave: false, // avoid recreating sessions that have not changed
	saveUninitialized: false, // comply with GDPR laws for setting cookies automatically
	secret: process.env.JWT_SECRET, // cryptographically sign the cookie
}))

server.use(authRouter);
server.use(jokesRouter);

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

module.exports = server 
