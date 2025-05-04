module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.UUID,  
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    clerkId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  }, {
    tableName: 'users',  
    timestamps: true,   
    underscored: true,   
  });

  User.associate = (models) => {
    User.hasMany(models.Restaurant, { foreignKey: 'user_id' }); 
    User.hasMany(models.Cart, { foreignKey: 'user_id' });  
  };

  return User;
};