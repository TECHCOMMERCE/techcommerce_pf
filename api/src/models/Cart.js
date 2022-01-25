const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define(
    "cart",
    {
      quantity: {
        type: DataTypes.INTEGER,
        defaultValue:0,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
