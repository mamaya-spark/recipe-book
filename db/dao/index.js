const db = require('../../util/db');

function dao() {
  const sequelize = db.connect();

  sequelize.authenticate()
    .then(() => console.log(
      `User ${db.username} established a connection to ${db.database} on ${db.host}:${db.port}.`
    ))
    .catch(() => console.log(
      `User ${db.username} failed to establish a connection to ${db.database} on ${db.host}:${db.port}.`
    ));

    const user         = require('./user')(sequelize);
    const recipe       = require('./recipe')(sequelize);
    const shoppingList = require('./shoppingList')(sequelize);

  return {
    user,
    recipe,
    shoppingList,
  }
}

module.exports = dao();
