const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define(
    "product",
    {
      productid: {
        type: DataTypes.UUID,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      price: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      stock: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      sold_quantity: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      conditiion: {
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
