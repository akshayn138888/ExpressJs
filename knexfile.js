// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "quiz1"
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./db/migrations"
    }
  }
};
