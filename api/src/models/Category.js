const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define(
    "category",
    {
      categoryid: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    { timestamps: false }
  );
};
