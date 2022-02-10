const {DataTypes} = require("sequelize")

module.exports = (sequelize) =>{
  sequelize.define(
    'help',
    {
      helpid:{
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      title:{
        type: DataTypes.STRING,
      },
      subtitle:{
        type: DataTypes.STRING,
      },
      description:{
        type: DataTypes.STRING,
      },
      description2:{
        type: DataTypes.STRING,
      },
      description3:{
        type: DataTypes.STRING,
      },
      description4:{
        type: DataTypes.STRING,
      },
      description5:{
        type: DataTypes.STRING,
      },
      img:{
        type: DataTypes.STRING,
      }
    },
    { timestamps: false }
  )
}