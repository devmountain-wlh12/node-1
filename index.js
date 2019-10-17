const users = require('./users.json')
const returnFunctions = require('./returnUser')

// Write a function with an "email" parameter that returns the user with that email.
function userByEmail(email) {
  // const user = users.filter(obj => obj.email === email)
  // return user[0]
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      return users[i]
    }
  }
}

// write a function to return all users with a 'google.com' email address.

function usersWithGmail() {
  // return users.filter(user => user.email.includes('google.com'))
  const foundUsers = []
  for (let i = 0; i < users.length; i++) {
    if (users[i].email.includes('google.com')) {
      foundUsers.push(users[i])
    }
  }
  return foundUsers
}

function usersWithString(str) {
  const user = users.filter(obj => obj.email.includes(str))
  return user
}

// write a function that finds all users whose name start with the letter A
function nameStartsWithA() {
  return users.filter(user => user.first_name.toLowerCase().startsWith('a'))
}

console.log(returnFunctions.getUser(2))