const modelPath = '../models/UserSession';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const UserSession = queryInterface.sequelize.import(modelPath);

    return UserSession.sync();
  },
  down: (queryInterface, Sequelize) => {
    const UserSession = queryInterface.sequelize.import(modelPath);

    return UserSession.drop();
  }
}
