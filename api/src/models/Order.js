const { DataTypes, Sequelize } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('order',{
        orderid:{
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4
        },
        address:{
            type: DataTypes.STRING,
            allowNull: false
        },
        totalPrice:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        status:{
            // EMUN for the state of the order 
            type: DataTypes.ENUM("Created","Processing","cancelled","Completed","Send"),
            allowNull: false
        }
    },{
        timestamps:true
    })
}