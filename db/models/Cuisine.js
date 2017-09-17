module.exports = (sequelize, DataTypes) => {
  let Cuisine = sequelize.define('Cuisine', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    tableName: 'cuisines',
    freezeTableName: true,
    underscored: true,
  });

  return Cuisine;
}
