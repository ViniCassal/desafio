module.exports = (conection, DataTypes) => {
    const Mensagem = conection.define(
      "Mensagem",
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
        Email: {
          type: DataTypes.STRING(200),
        },
        mensagem: {
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
        tableName: "Mensagens",
      }
    );
  
    return Mensagem;
  };