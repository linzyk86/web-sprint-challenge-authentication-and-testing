
const express = require('express');
const session = require("express-session")


// const authenticate = require('./auth/authenticate-middleware');
const authRouter = require('./auth/auth-router.js');
const jokesRouter = require('./jokes/jokes-router.js');

const server = express();
const PORT = process.env.PORT || 3300;

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

server.listen(PORT, () => {
  console.log(`\n=== Server listening on port ${PORT} ===\n`);
});


