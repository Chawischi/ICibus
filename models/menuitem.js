'use strict';

module.exports = (sequelize, DataTypes) => {
  const MenuItem = sequelize.define('MenuItem', {
    id: {
      type: DataTypes.UUID, 
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false, 
    },
    productImageUrl: {
      type: DataTypes.STRING,
      field: 'product_image_url',
      allowNull: true, 
    },
  }, {
    tableName: 'menu_items',
    timestamps: false, 
    underscored: true,
  });

  // Associações (opcional)
  MenuItem.associate = (models) => {
    // Exemplo: MenuItem.belongsTo(models.Menu, { foreignKey: 'menuId' });
  };

  return MenuItem;
};
