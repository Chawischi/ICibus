module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    menuId: {
      type: DataTypes.UUID,  
      allowNull: false,
      references: {
        model: 'menus',  // Tabela 'menus'
        key: 'id',
      },
      field: 'menu_id',  
    },
  }, {
    tableName: 'products',
    timestamps: false, 
    underscored: true,
  });

  Product.associate = (models) => {
    Product.belongsTo(models.Menu, { foreignKey: 'menuId' });
  };

  return Product;
};
