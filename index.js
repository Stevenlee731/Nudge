var express = require('express')
var bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.json())
app.use(express.static('public'))

var knex = require('knex')({
  client: 'pg',
  connection: {
    user: 'stevenlee',
    database: 'p2-database'
  }
})

// users
app.post('/users', (req, res) => {
  knex('users').insert(req.body).then(() => {
    res.sendStatus(200)
  })
})

app.get('/users', (req, res) => {
  knex.select('id').from('users').then((result) => {
    console.log(result)
    res.sendStatus(200)
  })
})

// Profiles
app.post('/profiles', (req, res) => {
  knex('profiles').insert(req.body).then(() => {
    res.sendStatus(200)
  })
})

app.get('/profiles', (req, res) => {
  knex.select().from('profiles').then((result) => {
    console.log(result)
    res.sendStatus(200)
  })
  .catch(() => {
    res.sendStatus(500)
  })
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
