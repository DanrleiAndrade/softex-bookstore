import { Model } from "sequelize";
import sequelize from 'sequelize';
import db from '.';
import Client from "./Client";

class Order extends Model {
    declare id: number;
    declare clientId: number;
    declare productId: number;
    declare quantity: number;
    declare total: number;
    declare date: Date;
}

Order.init({
    id: {
        type: sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      clientId: {
        type: sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'client',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      productId: {
        type: sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'product',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      quantity: {
        type: sequelize.INTEGER,
        allowNull: false
      },
      total: {
        type: sequelize.INTEGER,
        allowNull:false
      },
      date: {
        type: sequelize.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      }
}, {
    sequelize: db,
    tableName: 'order',
    timestamp: false,
    underscored: true
})

Order.belongsTo(Client, {
    foreignKey: 'clientId',
    as: 'client'
})