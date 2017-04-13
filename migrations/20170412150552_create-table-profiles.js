exports.up = function(knex, Promise) {
  const query = knex.schema.createTable('profiles', table => {
    table.increments('id')
    table.string('first_name')
    table.string('last_name')
    table.string('gender')
    table.string('age')
    table.string('ethnicity')
    table.string('occupation')
    table.string('seeking')
  })

  return query
}

exports.down = function(knex, Promise) {
  const query = knex.schema.dropTable('profiles')

  return query
}
