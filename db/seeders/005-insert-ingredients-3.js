module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('ingredients', [
      {
        order_no: 1,
        amount: '1 container (6 oz)',
        name: 'Yoplait Original yogurt strawberry, strawberry kiwi, or strawberry mango',
        recipe_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_no: 2,
        amount: '1/2 cup',
        name: 'sliced fresh or frozen strawberries',
        recipe_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_no: 3,
        amount: '1/2 cup',
        name: 'orange or pineapple juice',
        recipe_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_no: 4,
        name: 'pineapple chunks, strawberries, or kiwi fruit slices, if desired',
        recipe_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('ingredients')
}
