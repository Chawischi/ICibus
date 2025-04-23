module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    restaurantId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Restaurants',
        key: 'id'
      }
    }
  });

  Menu.associate = (models) => {
    Menu.belongsTo(models.Restaurant, { foreignKey: 'restaurantId' });
    Menu.hasMany(models.Product, { foreignKey: 'menuId' });
  };

  return Menu;
};
