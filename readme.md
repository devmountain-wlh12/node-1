# Node Day 1

## What is Node?

*Node* is a _runtime environment_ which allows us to run Javascript logic outside of the browser. It utilizes Google's V8 engine to run javascript.
* *Note:* One of Node's primary use cases is creating servers.

To run a file using Node, type `node filename.js` in the terminal.

## Nodemon
If you don't want to restart node over and over, run your file with nodemon:
```bash
nodemon filename.js
```

## What is NPM?

*NPM* stands for _Node Package Manager_. It is a place for developers to share their code with the Javascript development community.

### Using NPM in a project:

1. In the terminal, run `npm init -y`.
    * This will create a _package.json_ file with information about your project. It will be used to track any packages we install from NPM.
2. Add `node_modules` to the *.gitignore* file, so we don't upload redundant code to github.
3. Install any packages you would like to use by running `npm i <<packageName>>`. 
    * Some of the packages we have used in our projects are:
        * `express`
        * `axios`

## What is Express?

*Express* is a framework for creating a server in Node. We only need four lines of javascript to create a basic server with _express_:

```javascript
const express = require('express')
const app = express()
const SERVER_PORT = 4000

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))
```

## Endpoints in Express:

Endpoints are url paths to request data from the server. They are comprised of three parts:

1. The method (get, post, put, delete)
2. The url ('/api/whatever-data-were-talking-about')
3. The endpoint handler (a callback function)
    * The event handler has three parameters:
        1. req (request) -- where data comes in from the client
        2. res (response) -- used to send data back to the client
        3. next -- used to move on to another piece of logic

Example:
```javascript
app.get('/api/users', (req, res, next) => {
  res.status(200).send(users)
})
```

## Passing Data To and From the Server

There are three ways of sending data to the server/expecting data from the client.

1. Params
    * Set up params in your endpoint url: `/api/users/:name`
    * Params are required to hit an endpoint from the client: `http://localhost:4000/api/users/jonathan`
    * Available as `req.params.name` in the endpoint handler
2. Queries
    * Queries are not required to be predefined in the endpoint url.
    * Queries are defined and passed via the client: `http://localhost:4000/api/users?name=jonathan`
    * Available as `req.query.name` in the endpoint handler
3. Body
    * Body is data not passed through the URL. It is used for larger amounts of data.
    * Body is passed from the client as an object: `axios.post('/api/users', {body: data})`
    * Available as `req.body` in the endpoint handler

