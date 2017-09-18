const modelPath = '../models/Ingredient';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const Ingredient = queryInterface.sequelize.import(modelPath);

    return Ingredient.sync();
  },
  down: (queryInterface, Sequelize) => {
    const Ingredient = queryInterface.sequelize.import(modelPath);

    return Ingredient.drop();
  }
}
