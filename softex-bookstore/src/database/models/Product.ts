import { Model } from "sequelize"
import sequelize from 'sequelize'
import db from '.'

class Product extends Model {
    declare id: number
    declare name: string
    declare cpf: string
    declare birthday: Date
    declare registeredAt: Date

}

Product.init({
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: sequelize.STRING,
        allowNull: false
    },
    price: {
        type: sequelize.FLOAT,
        allowNull: false
    },
    description: {
        type: sequelize.STRING,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: 'product',
    timestamps: false
})

export default Product