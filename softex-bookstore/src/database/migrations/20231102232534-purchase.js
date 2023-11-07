'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('purchase',{
      client_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'client',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'product',
          key: 'id',
        },
      }
    },)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('purchare')
  }
};
