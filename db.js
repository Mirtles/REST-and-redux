const Sequelize = require('sequelize')

const databaseUrl = "postgres://postgres:geheim@localhost:5432/postgres"

const db = new Sequelize(databaseUrl)

db.sync()
  .then(() => console.table({ "Win!": "Database connected" }))
  .catch(console.error)

module.exports = db