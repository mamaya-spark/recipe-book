module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('notes', [
      {
        text: 'Make this fruity drink to order! Have a supply of flavored yogurts and fruits on ice, and let your imagination run wild.',
        recipe_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        text: 'You could also serve this smoothie as a chilled soup. Pour it into a hollowed-out pineapple or melon bowl, and top with a bit of whipped cream and a dash of cinnamon.',
        recipe_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('notes')
}
