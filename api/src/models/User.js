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
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname:{
            type:DataTypes.TEXT,
            allowNull: false,
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
        },
        photo:{
            type:DataTypes.TEXT,
            defaultValue: "https://icon-library.com/images/no-user-image-icon/no-user-image-icon-3.jpg"
        },
        force:{
            type:DataTypes.BOOLEAN,
            defaultValue: false
        },  
        status:{
            type:DataTypes.BOOLEAN,
            defaultValue: true
        },
        address:{
            type:DataTypes.STRING(255),
        },
        country:{
            type:DataTypes.TEXT,
        },
        city:{
            type:DataTypes.TEXT,
        },
        postalcode:{
            type:DataTypes.INTEGER,
        },
    },{
        timestamps:false
    });
};