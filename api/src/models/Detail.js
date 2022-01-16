const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('detail', {
      quantity: {
          type: DataTypes.INTEGER,
          allowNull: false,
          required: true
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    }
      
  },
  { timestamps: false }
)};