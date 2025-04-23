module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    menuId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Menus',
        key: 'id'
      }
    }
  });

  Product.associate = (models) => {
    Product.belongsTo(models.Menu, { foreignKey: 'menuId' });
  };

  return Product;
};
