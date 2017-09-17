module.exports = (sequelize, DataTypes) => {
  let ShoppingList = sequelize.define('ShoppingList', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    tableName: 'shopping_lists',
    freezeTableName: true,
    underscored: true,
  });

  return ShoppingList;
}
