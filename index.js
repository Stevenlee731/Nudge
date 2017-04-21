var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var errorHandler = function (err, req, res, next) {
  res.SendStatus(500)
  next()
}

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(errorHandler)

var knex = require('knex')({
  client: 'pg',
  connection: {
    user: 'stevenlee',
    database: 'p2-database'
  }
})

app.post('/users', (req, res, next) => {
  knex('users')
    .insert(req.body)
    .then(() => {res.sendStatus(200)})
    .catch(err => { next(err) })
})

app.get('/users', (req, res, next) => {
  knex.select('*')
    .from('users')
    .then(result => { res.json(result) })
    .catch(err => { next(err) })
})

app.get('/users/:id', (req, res, next) => {
  knex('users')
    .where('id', req.params.id)
    .first()
    .then(result => { res.json(result) })
    .catch(err => { next(err) })
})

app.put('/users/:id', (req, res, next) => {
  knex('users')
    .where('id', req.params.id)
    .update(req.body)
    .then(result => { res.json(result) })
    .catch(err => { next(err) })
})

app.post('/profiles', (req, res, next) => {
  knex('profiles')
    .insert(req.body)
    .then(() => {res.sendStatus(200)})
    .catch(err => { next(err) })
})

app.get('/profiles/users/:user_id', (req, res, next) => {
  knex.select('*')
    .from('profiles')
    .where({ user_id: req.params.user_id })
    .then(result => { res.json(result) })
    .catch(err => { next(err) })
})

app.get('/profiles/:id', (req, res, next) => {
  knex('profiles')
    .where('id', req.params.id)
    .first()
    .then(result => { res.json(result) })
    .catch(err => { next(err) })
})

app.put('/profiles/:id', (req, res, next) => {
  knex('profiles')
    .where('id', req.params.id)
    .update(req.body)
    .then(result => { res.json(result) })
    .catch(err => { next(err) })
})

app.delete('/profiles', (req, res, next) => {
    knex('profiles')
    .where('first_name', "")
    .del()
    .then(() => { res.sendStatus(204) })
    .catch(err => { next(err) })
})

app.post('/recommendations/user/:user_id/profile/:profile_id', (req, res, next) => {
  knex.select('*')
    .from('recommendations')
    .where({
      user_id: req.params.user_id,
      profile_id: req.params.profile_id
      })
    .then(result => {
      if (result.length > 0) {
        return 
      }
      else {
        console.log(result)
        return knex('recommendations')
          .insert(
            {
            user_id: req.params.user_id,
            profile_id: req.params.profile_id
            })
      }
    })
    .then(() => {res.sendStatus(200)})
    .catch(err => { next(err) })
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
