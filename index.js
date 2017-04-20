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

app.post('/users', (req, res) => {
  knex('users').insert(req.body).then(() => {
    res.sendStatus(200)
  })
})

app.get('/users', (req, res) => {
  knex.select().from('users').then((result) => {
    console.log(result)
    res.json(result)
  })
  .catch(() => {
    res.sendStatus(500)
  })
})

app.get('/users/:id', (req, res) => {
  knex('users').where('id', req.params.id).then((result) => {
    console.log(result)
    res.json(result)
  })
  .catch(err => {
    console.log(err)
    res.sendStatus(500)
  })
})

app.put('/users/:id', (req, res) => {
  knex('users').where('id', req.params.id).update(req.body).then((result) => {
    console.log(updated)
    res.json(result)
  })
  .catch((err) => {
    console.log(err)
    res.sendStatus(500)
  })
})

app.post('/profiles', (req, res) => {
  knex('profiles').insert(req.body).then(() => {
    res.sendStatus(200)
  })
  .catch(function (err) {
    console.log(err)
    res.sendStatus(400)
  })
})

app.get('/profiles/users/:user_id', (req, res) => {
  knex.select().from('profiles')
    .where({
      user_id: req.params.user_id})
    .then((result) => {
      console.log(result)
      res.json(result)
  })
  .catch(function (err) {
    console.log(err)
    res.sendstatus(400)
  })
})

app.get('/profiles/:id', function (req, res) {
  knex('profiles').where('id', req.params.id).first().then((result) => {
    console.log(result)
    res.json(result)
  })
  .catch(function (err) {
    console.log(err)
    res.sendstatus(400)
  })
})

app.put('/profiles/:id', (req, res) => {
  knex('profiles').where('id', req.params.id).update(req.body).then((result) => {
    console.log(updated)
    res.json(result)
  })
  .catch((err) => {
    console.log(err)
    res.sendStatus(500)
  })
})

app.delete('/profiles', (req, res) => {
  knex('profiles')
  .where('first_name', "")
  .del()
  .then(() => {
    console.log('deleted')
    res.sendStatus(204)
  })
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
