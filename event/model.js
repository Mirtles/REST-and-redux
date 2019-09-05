const Sequelize = require('sequelize')
const db = require('../db')

const Event = db.define(
  'event',
  {
    name: { type: Sequelize.STRING },
    date: { type: Sequelize.STRING },
    description: { type: Sequelize.STRING },
  }
)

module.exports = Event