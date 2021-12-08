module.exports = (conection, DataTypes) => {
  const Message = conection.define(
    "Message",
    {
      id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(200),
      },
      email: {
        type: DataTypes.STRING(200),
      },
      message: {
        type: DataTypes.STRING(500),
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "Message",
    }
  );

  return Message;
};