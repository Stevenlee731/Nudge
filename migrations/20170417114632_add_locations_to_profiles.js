exports.up = function(knex, Promise) {
  const query = knex.schema.table('profiles', t => {
    t.string('locations')
    t.string('about_me')
  })

  return query
}

exports.down = function(knex, Promise) {
  const query = knex.schema.table('profiles', t => {
    t.string('locations')
    t.string('about_me')
  })

  return query
}
