import { Model } from "sequelize"
import sequelize from 'sequelize'
import db from '.'
import Client from "./Client"
import Product from "./Product"


class Purchase extends Model {
    declare clientId: number
    declare productId: number
}

Purchase.init({
    clientId: {
        type: sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'client',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    },
    productId: {
        type: sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'product',
            key: 'id',
        },
    }
}, {
    sequelize: db,
    tableName: 'purchase',
    underscored: true, //Transforma tudo de camelCase para snake_case
    timestamps: false
})

Client.belongsToMany(Product, {
    foreignKey: 'clientId',
    otherKey: 'productId',
    as: 'product',
    through: Purchase
})

Product.belongsToMany(Client, {
    foreignKey: 'productId',
    otherKey: 'clientId',
    as: 'client',
    through: Purchase
})

export default Purchase