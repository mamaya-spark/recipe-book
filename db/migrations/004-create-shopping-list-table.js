const modelPath = '../models/ShoppingList';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const ShoppingList = queryInterface.sequelize.import(modelPath);

    return ShoppingList.sync();
  },
  down: (queryInterface, Sequelize) => {
    const ShoppingList = queryInterface.sequelize.import(modelPath);

    return ShoppingList.drop();
  }
}
