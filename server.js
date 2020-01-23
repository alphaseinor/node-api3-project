const express = require('express');
const helmet = require('helmet')

const server = express();

// 3rd party middleware
server.use(express.json())
server.use(helmet())
server.use(logger)


server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

// - `logger()`

//   - `logger` logs to the console the following information about each request: request method, request url, and a timestamp
//   - this middleware runs on every request made to the API

function logger(req, res, next) {
  console.log(`Method ${req.method}, URL ${req.url}, ${Date(Date.now).toString()}`)
  next()
}


// - `validateUserId()`

//   - `validateUserId` validates the user id on every request that expects a user id parameter
//   - if the `id` parameter is valid, store that user object as `req.user`
//   - if the `id` parameter does not match any user id in the database, cancel the request and respond with status `400` and `{ message: "invalid user id" }`

// - `validateUser()`

//   - `validateUser` validates the `body` on a request to create a new user
//   - if the request `body` is missing, cancel the request and respond with status `400` and `{ message: "missing user data" }`
//   - if the request `body` is missing the required `name` field, cancel the request and respond with status `400` and `{ message: "missing required name field" }`

// - `validatePost()`
//   - `validatePost` validates the `body` on a request to create a new post
//   - if the request `body` is missing, cancel the request and respond with status `400` and `{ message: "missing post data" }`
//   - if the request `body` is missing the required `text` field, cancel the request and respond with status `400` and `{ message: "missing required text field" }`




module.exports = server;
