const modelPath = '../models/Direction';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const Direction = queryInterface.sequelize.import(modelPath);

    return Direction.sync();
  },
  down: (queryInterface, Sequelize) => {
    const Direction = queryInterface.sequelize.import(modelPath);

    return Direction.drop();
  }
}
