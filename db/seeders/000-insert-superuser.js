const DEFAULT_ADMIN = require('../../app.config.json').DEFAULT_ADMIN;
const authUtil      = require('../../util/auth');

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('users', [{
      email:      DEFAULT_ADMIN.EMAIL,
      username:   DEFAULT_ADMIN.USERNAME,
      first_name: DEFAULT_ADMIN.FIRST_NAME,
      last_name:  DEFAULT_ADMIN.LAST_NAME,
      password:   authUtil.encryptPass(DEFAULT_ADMIN.PASSWORD),
      role:       'super',
      created_at: new Date(),
      updated_at: new Date(),
    }]),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('users', [{
      username: DEFAULT_ADMIN.USERNAME
    }])
}
