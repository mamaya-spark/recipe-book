const modelPath = '../models/ShoppingIngredient';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const ShoppingIngredient = queryInterface.sequelize.import(modelPath);

    return ShoppingIngredient.sync();
  },
  down: (queryInterface, Sequelize) => {
    const ShoppingIngredient = queryInterface.sequelize.import(modelPath);

    return ShoppingIngredient.drop();
  }
}
