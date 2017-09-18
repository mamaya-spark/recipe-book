const modelPath = '../models/User';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const User = queryInterface.sequelize.import(modelPath);

    return User.sync();
  },
  down: (queryInterface, Sequelize) => {
    const User = queryInterface.sequelize.import(modelPath);

    return User.drop();
  }
}
