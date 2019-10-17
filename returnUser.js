const users = require('./users.json')

// write a function that returns all users
function getAllUsers() {
  return users
}

// Write a function with an "id" parameter that returns the user with that ID.
function getUser(id) {
  const user = users.filter(obj => obj.id === id)
  return user[0]
}
// const getUserById = id => users.filter(user => user.id === id)[0]
// ^^^ same thing, as arrow function

module.exports = {
  getUser: getUser,
  getAllUsers: getAllUsers
}