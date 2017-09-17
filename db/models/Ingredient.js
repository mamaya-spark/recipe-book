module.exports = (sequelize, DataTypes) => {
  let Ingredient = sequelize.define('Ingredient', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    order_no: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    amount: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    recipe_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'recipes',
        key: 'id'
      }
    }
  }, {
    tableName: 'ingredients',
    freezeTableName: true,
    underscored: true,
  });

  return Ingredient;
}
