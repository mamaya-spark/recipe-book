const modelPath = '../models/Recipe';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const Recipe = queryInterface.sequelize.import(modelPath);

    return Recipe.sync();
  },
  down: (queryInterface, Sequelize) => {
    const Recipe = queryInterface.sequelize.import(modelPath);

    return Recipe.drop();
  }
}
