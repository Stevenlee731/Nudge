exports.up = function(knex, Promise) {
  const query = knex.schema.table('profiles', t => {
    t.string('user_id')
  })

  return query
}

exports.down = function(knex, Promise) {
  const query = knex.schema.table('profiles', t => {
    t.dropColumn('user_id')
  })

  return query
}
