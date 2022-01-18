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
        lastname:{
            type:DataTypes.TEXT,
            allowNull:false,
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
        },
        force:{
            type:DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue: false
        },  
        status:{
            type:DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue: true
        },
        address:{
            type:DataTypes.STRING(255),
            allowNull:false,
        },
        country:{
            type:DataTypes.TEXT,
            allowNull:false,
        },
        city:{
            type:DataTypes.TEXT,
            allowNull:false,
        },
        postalcode:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },

    },{
        timestamps:false
    });
};