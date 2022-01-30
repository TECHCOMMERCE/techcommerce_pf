const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('detail', {
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    }
      
  },
  { timestamps: false }
)};