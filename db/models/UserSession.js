module.exports = (sequelize, DataTypes) => {
  let UserSession = sequelize.define('UserSession', {
    sid: {
      type: DataTypes.STRING,
      allowNull: false,
      collate: 'default',
      primaryKey: true,
    },
    sess: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    expire: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  }, {
    tableName: 'user_sessions',
    freezeTableName: true,
    timestamps: false,
  });

  return UserSession;
}
