module.exports = (sequelize, DataTypes) => {
  let Direction = sequelize.define('Direction', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    order_no: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    recipe_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'recipes',
        key: 'id'
      }
    },
  }, {
    tableName: 'directions',
    freezeTableName: true,
    underscored: true,
  });

  return Direction;
}
