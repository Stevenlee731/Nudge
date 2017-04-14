exports.up = function(knex, Promise) {
  const query = knex.schema.table('profiles', t => {
    t.string('image_url').notNull()
  })

  return query
}

exports.down = function(knex, Promise) {
  const query = knex.schema.table('profiles', t => {
    t.string('image_url')
  })

  return query
}
