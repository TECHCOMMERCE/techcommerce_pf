const { DataTypes, Sequelize } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('order',{
        id:{
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV
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
            type: DataTypes.ENUM("Created","Processing","cancelled","Completed","Send"),
            allowNull: false
        },
        confirmationDate:{
            type: DataTypes.DATE,
            allowNull: false
        }
    },{
        timestamps:true
    })
}

// Enum(Created, Processing, Canceled, Completed,Send)