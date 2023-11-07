import { Model } from "sequelize"
import sequelize from 'sequelize'
import db from '.'

class Client extends Model {
    declare id: number
    declare name: string
    declare cpf: string
    declare birthday: Date
    declare registeredAt: Date

}

Client.init({
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
    cpf: {
        type: sequelize.STRING,
        allowNull: false
    },
    birthday: {
        type: sequelize.DATE,
        allowNull: false
    },
    //Para puxar a data atual defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    registeredAt: {
        type: sequelize.DATE,
        allowNull: false
    },
}, { 
    sequelize: db, 
    tableName: 'client',
    timestamps: false
})

export default Client