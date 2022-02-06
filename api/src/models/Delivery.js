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
          "Requested", // cuando el cliente solicita el envío
          "In process", // cuando el admin procesa el envío
          "Dispatched", // cuando el envío está en bodega
          "In transit", // cuando el envío esté en camino a su destino
          "Delivered", // cuando el cliente marca el envío como recibido
        ),
        allowNull: false,
        defaultValue: "Requested",
      },

    }
    // { timestamps: false } // Se requiren las fechas para filtrar y ver cuando fué el envío y cuando el status cambia.
  );
};
