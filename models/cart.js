'use strict';

module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_id',
    },
    productId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'product_id',
    },
    paymentMethod: {
      type: DataTypes.ENUM('credito', 'debito', 'dinheiro'),
      allowNull: false,
      field: 'payment_method',
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    totalValue: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      field: 'total_value',
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('pendente', 'confirmado', 'em_preparo', 'saiu_para_entrega', 'entregue', 'cancelado'),
      allowNull: false,
      defaultValue: 'pendente',
    }
  }, {
    tableName: 'carts',
    timestamps: true,
    underscored: true,
  });

  Cart.associate = (models) => {
    Cart.belongsTo(models.User, { foreignKey: 'userId' });
    Cart.belongsTo(models.Product, { foreignKey: 'productId' });
  };

  return Cart;
};
