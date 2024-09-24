const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('MyEmergency', 'root', '@Amukuz2015', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
