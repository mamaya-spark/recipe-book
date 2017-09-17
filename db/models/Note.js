module.exports = (sequelize, DataTypes) => {
  let Note = sequelize.define('Note', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
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
    }
  }, {
    tableName: 'notes',
    freezeTableName: true,
    underscored: true,
  });

  return Note;
}
