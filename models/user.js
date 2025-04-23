module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    clerkId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  });

  User.associate = (models) => {
    User.hasMany(models.Restaurant, { foreignKey: 'userId' });
    User.hasMany(models.Cart, { foreignKey: 'userId' });
  };

  return User;
};
