module.exports = (sequelize, DataTypes) => {
  let Recipe = sequelize.define('Recipe', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    cuisine_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'cuisines',
        key: 'id'
      }
    },
    calories: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    servings: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    prep_time: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    saved: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    tableName: 'recipes',
    freezeTableName: true,
    underscored: true,
  });

  return Recipe;
}
