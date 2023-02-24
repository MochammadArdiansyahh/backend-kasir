'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    id_user: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nama_user: DataTypes.STRING,
    role: DataTypes.ENUM("admin","kasir","manager"),
    username: DataTypes.STRING,
    password: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'user',
    tableName: "user"
  });
  user.associate = (models) => {
    user.belongsToMany(models.transaksi,{through:"UserTransaction", 
  foreignKey: 'id_user', as: 'transaksi'})
  }
  return user;
};