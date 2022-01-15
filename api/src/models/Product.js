const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define(
    "product",
    {
      ProductId: {
        type: DataTypes.UUID,
        primaryKey: true,
        autoIncrement: true,
      },
      Name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      Price: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      Stock: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      Sold_Quantity: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      Conditiion: {
        type: DataTypes.ENUM("new", "used"),
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      attributes: {
        type: DataTypes.JSON,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
