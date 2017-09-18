module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('notes', [
      {
        text: 'Add more or less chopped peanut butter cups to your liking.',
        recipe_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        text: 'Candy-coated peanut butter pieces would be an excellent addition to the cake batter.',
        recipe_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('notes')
}
