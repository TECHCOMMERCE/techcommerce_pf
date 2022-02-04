const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define(
    "delivery",
    {
      deliveryid: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      status: {
        type: DataTypes.ENUM(
          "In process",
          "Dispatched",
          "In transit",
          "Delivered",
          "Canceled"
        ),
        allowNull: false,
      },
      // created: {
      //   type: DataTypes.DATE,
      //   defaultValue: new Date(),
      //   allowNull: false,
      // },
      // updated: {
      //   type: DataTypes.DATEONLY,
      //   defaultValue: new Date(),
      //   allowNull: false,
      // },
    },
    // { timestamps: false }
  );
};
