module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('directions', [
      {
        order_no: 1,
        text: 'In blender, place yogurt, strawberries and juice. Cover; blend on medium speed about 2 minutes or until smooth.',
        recipe_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_no: 2,
        text: 'Pour into serving glass. Garnish with pineapple. Serve immediately.',
        recipe_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('directions')
}
