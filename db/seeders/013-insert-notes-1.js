module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('notes', [
      {
        text: 'Pounding the chicken thinly and broiling reduces cooking time and helps keep the super-lean chicken breasts tender and moist.',
        recipe_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        text: 'Arugula and balsamic vinegar are a natural pair, but it can be fun to mix up greens and vinegars. Try out spinach or baby kale; fresh lemon juice or sherry vinegar are fun alternatives to the balsamic.',
        recipe_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('notes')
}
