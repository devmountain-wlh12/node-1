const users = require('./users.json')
const express = require('express')
const app = express()

app.get('/api/users', (req, res, next) => {
  res.status(200).send(users)
})

// PARAMS
app.get('/api/users/:id', (req, res, next) => {
  console.log(typeof req.params.id)
  const id = parseInt(req.params.id)
  const foundUsers = users.filter(userObj => userObj.id === id)
  if (foundUsers.length === 0) {
    return res.sendStatus(400)
  }
  res.status(200).send(foundUsers)
})

// QUERIES
app.get('/api/user', (req, res, next) => {
  const foundUser = users.filter(userObj => userObj.email === req.query.email)
  res.status(200).send(foundUser)
})

app.listen(4000, () => console.log('Listening on port 4000'))