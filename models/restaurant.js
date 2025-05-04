'use strict';

module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define('Restaurant', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, 
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    endereco: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sobreNos: {
      type: DataTypes.TEXT,
      field: 'sobre_nos',
      allowNull: true,
    },
    horario: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    bannerUrl: {
      type: DataTypes.STRING,
      field: 'banner_url',
      allowNull: true,
    },
  }, {
    tableName: 'restaurants',
    timestamps: false,
  });

  Restaurant.associate = (models) => {
    Restaurant.belongsTo(models.Category, { foreignKey: 'categoryId', as: 'category' });
  };

  return Restaurant;
};
