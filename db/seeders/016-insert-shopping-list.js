module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('shopping_lists', [{
      user_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    }]),
  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('shopping_lists')
}
