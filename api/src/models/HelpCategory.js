const {DataTypes} = require("sequelize")

module.exports = (sequelize) =>{
  sequelize.define(
    "helpcategory",
    {
      helpcategoryid:{
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      name:{
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  )
}