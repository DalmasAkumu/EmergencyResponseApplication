const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class HealthHistory extends Model {}

HealthHistory.init({
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Users', // Name of the User table
      key: 'id',
    },
  },
  conditions: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  allergies: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  medications: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'HealthHistory',
});

module.exports = HealthHistory;
