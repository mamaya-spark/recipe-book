module.exports = (sequelize, DataTypes) => {
  let ShoppingIngredient = sequelize.define('ShoppingIngredient', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    amount: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    checked: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    recipe_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'recipes',
        key: 'id'
      }
    },
    shopping_list_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'shopping_lists',
        key: 'id'
      }
    }
  }, {
    tableName: 'shopping_ingredients',
    freezeTableName: true,
    underscored: true,
  });

  return ShoppingIngredient;
}
