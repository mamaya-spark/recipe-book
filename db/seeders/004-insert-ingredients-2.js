module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('ingredients', [
      {
        order_no: 1,
        amount: '1 box',
        name: 'Betty Crocker SuperMoist chocolate fudge cake mix',
        recipe_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_no: 2,
        amount: '1 cup',
        name: 'chocolate-flavor syrup, at room temperature',
        recipe_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_no: 3,
        amount: '1 cup',
        name: 'creamy peanut butter',
        recipe_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_no: 4,
        amount: '1 container (8 oz)',
        name: 'Cool Whip frozen whipped topping, thawed',
        recipe_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_no: 5,
        amount: '25',
        name: 'Reese\'s peanut butter cups miniatures, unwrapped',
        recipe_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('ingredients')
}
