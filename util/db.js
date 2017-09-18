const Sequelize = require('sequelize');
const path      = require('path');
const db        = require('../db/db.config.json').development;

module.exports = {
  connect() {
    return new Sequelize(db.database, db.username, db.password, {
      host: db.host,
      dialect: db.dialect,
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      }
    });
  },
  connString: `postgres://${db.username}${db.password ? (':' + db.password) : ''}@${db.host}:${db.port}/${db.database}`,
  username: db.username,
  database: db.database,
  host: db.host,
  port: db.port
};
