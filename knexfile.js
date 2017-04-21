exports.development = {
  client: 'postgresql',
  connection: {
    user: 'stevenlee',
    database: 'p2-database'
  },
  migrations: {
    directory: './migrations',
    tableName: 'knex_migrations'
  }
}

exports.production = {
  client: 'postgresql',
  connection: process.env.DATABASE_URL
}
