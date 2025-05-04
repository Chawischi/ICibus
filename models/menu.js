module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'menus',
    timestamps: false,
  });

  // Associações (caso tenha relação com outras tabelas)
  Menu.associate = (models) => {
    // Exemplo de associação (caso Menu pertença a Category)
    // Menu.belongsTo(models.Category, { foreignKey: 'categoryId' });
  };

  return Menu;
};
