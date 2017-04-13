exports.up = function(knex, Promise) {
  const query = knex.schema.createTable('recommendations', table => {
    table.string('user_id')
    table.string('profile_id')
    table.string('notes')
  })

  return query
}

exports.down = function(knex, Promise) {
  const query = knex.schema.dropTable('recommendations')

  return query
}
