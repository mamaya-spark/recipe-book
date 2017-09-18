module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('directions', [
      {
        order_no: 1,
        text: 'Heat oven to 400°F.',
        recipe_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_no: 2,
        text: 'Mix cream cheese, 1 cup of the Swiss cheese, the dressing and corned beef. Spread in pie plate, 9x1 1/4 inches, or quiche dish, 9x1 1/2 inches. Top with sauerkraut and remaining 1/2 cup Swiss cheese. (Cover and refrigerate up to 24 hours if desired.)',
        recipe_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_no: 3,
        text: 'Bake about 15 minutes or until bubbly around edge. Serve hot with pretzel crackers or cocktail bread. Garnish with chives and radishes.',
        recipe_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('directions')
}
