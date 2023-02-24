'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detail_transaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  detail_transaksi.init({
    id_detail_transaksi: DataTypes.INTEGER,
    id_transaksi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_menu: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    harga: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'detail_transaksi',
    tableName: "detail_transaksi"
  });
  //create relation
  detail_transaksi.associate = (models) => {
        detail_transaksi.belongsTo(models.menu,{foreignKey: "id_menu",
     as: "menu"})
        
      }
  return detail_transaksi;
};