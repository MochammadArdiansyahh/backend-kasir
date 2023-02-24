'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user', {
      id_user: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },      
      nama_user: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.ENUM,
        values:['admin','kasir','manager'],
        defaultValue:'admin'
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user');
  }
};