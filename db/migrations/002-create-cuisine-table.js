const modelPath = '../models/Cuisine';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const Cuisine = queryInterface.sequelize.import(modelPath);

    return Cuisine.sync();
  },
  down: (queryInterface, Sequelize) => {
    const Cuisine = queryInterface.sequelize.import(modelPath);

    return Cuisine.drop();
  }
}
