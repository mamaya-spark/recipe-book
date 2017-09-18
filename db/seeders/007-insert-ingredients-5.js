module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('ingredients', [
      {
        order_no: 1,
        amount: '1 package (8 ounces)',
        name: 'cream cheese, softened',
        recipe_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_no: 2,
        amount: '1 1/2 cups (6 ounces)',
        name: 'shredded Swiss cheese',
        recipe_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_no: 3,
        amount: '1/2 cup',
        name: 'Thousand Island dressing',
        recipe_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_no: 4,
        amount: '4 ounces',
        name: 'deli sliced corned beef, chopped',
        recipe_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_no: 5,
        amount: '1/2 cup',
        name: 'well-drained sauerkraut',
        recipe_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_no: 6,
        name: 'pretzel crackers, if desired',
        recipe_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_no: 7,
        name: 'cocktail rye bread slices, if desired',
        recipe_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_no: 8,
        name: 'chopped fresh chives, if desired',
        recipe_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_no: 9,
        name: 'sliced radishes, if desired',
        recipe_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('ingredients')
}
