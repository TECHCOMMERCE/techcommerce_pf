const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('user', {
        userid:{
            type: DataTypes.STRING,
            primaryKey:true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
        },
        type: {
            type: DataTypes.ENUM("admin","user"),
            required: true,
            allowNull: false,
        },

        name: {
            type: DataTypes.STRING
        },

        lastname: {
            type: DataTypes.STRING
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            required:true,
            unique:true,
            validate:{
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false
        },

        changepassword:{
            type:DataTypes.BOOLEAN,
            defaultValue: false
        },

        phone:{
            type: DataTypes.STRING,
            allowNull:false
        },
        photo:{
            type:DataTypes.TEXT,
            allowNull:true,
        }
    },{
        timestamps:false
    });
};