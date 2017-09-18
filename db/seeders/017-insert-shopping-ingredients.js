module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('shopping_ingredients', [
      {
        amount: '2',
        name: 'egg whites',
        checked: false,
        recipe_id: 1,
        shopping_list_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        amount: '1 cup',
        name: 'creamy peanut butter',
        checked: false,
        recipe_id: 2,
        shopping_list_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        amount: '1 gallon',
        name: '2% milk',
        checked: false,
        shopping_list_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        amount: '1 lb',
        name: 'grapes',
        checked: true,
        shopping_list_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]),
  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('shopping_ingredients');
  }
}
