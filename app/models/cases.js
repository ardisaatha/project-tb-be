'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class
  cases extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  cases.init({
    daerah: DataTypes.STRING,
    total_kasus: DataTypes.INTEGER,
    status: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'cases',
  });
  return cases;
};