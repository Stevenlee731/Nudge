exports.up = function(knex, Promise) {
  const query = knex.schema.table('users', t => {
    t.string('image_url')
  })

  return query
}

exports.down = function(knex, Promise) {
  const query = knex.schema.table('profiles', t => {
    t.dropColumn('image_url')
  })

  return query
}
