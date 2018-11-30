const axios = require('axios')

const { authenticate, generateToken } = require('./middlewares')

const db = require('../database/dbConfig.js')

const bcrypt = require('bcryptjs')

module.exports = server => {
  server.post('/api/register', register)
  server.post('/api/login', login)
  server.get('/api/jokes', authenticate, getJokes)
}

async function register(req, res){
  if (!req.body.username || !req.body.password) {
    res.status(401).json({ message: 'Please provide a username and a password to register.' })
  }
  const creds = req.body
  const hash = bcrypt.hashSync(creds.password, 14)
  creds.password = hash

  try {
    const id = await db('users').insert(creds)
    res.status(201).json({ id, success: 'Success.  User registered.' })
  } catch (e) {
    console.log(e)
    res.status(500).json({ error: 'An error has occuried while trying to register with the database.' })
  }
}
async function login(req, res){
  try {
    const creds = req.body
    const user = await db('users').where('username', '=', creds.username).first()
    if (user && bcrypt.compareSync(creds.password, user.password)) {
      const token = generateToken(user)
      res.status(201).json({ id: user.id, token })
    } else {
      res.status(401).json({ message: 'Unauthorized Request.  Please register for an account.' })
    }
  } catch (e) {
    console.log(e)
    res.status(500).json({ error: 'An error occuried while trying to attempt this process with the database.' })
  }
}

function getJokes(req, res){
  axios
    .get('https://safe-falls-22549.herokuapp.com/random_ten')
    .then(response => {
      res.status(200).json(response.data)
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err })
    })
}
