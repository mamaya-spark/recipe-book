module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('directions', [
      {
        order_no: 1,
        text: 'Heat oven to 350°F (325°F for dark or nonstick pans). Grease and lightly flour 13x9-inch pan. Make and bake cake as directed on box for 13x9-inch pan. Cool completely in pan.',
        recipe_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_no: 2,
        text: 'Poke holes in cake using fork or skewer. Pour 3/4 cup of the chocolate syrup over cake; let stand until most of the syrup soaks into cake.',
        recipe_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_no: 3,
        text: 'In large bowl, beat peanut butter and whipped topping with electric mixer on medium speed until combined. Spread over cake.',
        recipe_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_no: 4,
        text: 'Using large chef’s knife, cut peanut butter cups into fourths. Scatter over frosting. Drizzle with remaining 1/4 cup chocolate syrup.',
        recipe_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_no: 5,
        text: 'Cover and refrigerate cake, but bring to room temperature before serving. Cover and refrigerate any remaining cake.',
        recipe_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('directions')
}
