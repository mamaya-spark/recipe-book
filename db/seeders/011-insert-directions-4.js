module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('directions', [
      {
        order_no: 1,
        text: 'Spray 4- to 5-quart slow cooker with cooking spray. In slow cooker, mix stock, 1/3 cup of the hoisin sauce, the ketchup, honey, soy sauce, garlic, 1 tablespoon plus 1 teaspoon Sriracha, the gingerroot and 2 teaspoons sesame oil with whisk. Add chicken; toss to coat. Cover; cook on High heat setting 3 to 4 hours.',
        recipe_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_no: 2,
        text: 'During last 30 minutes of cook time, make coleslaw. In large bowl, beat rice vinegar, sugar, 2 teaspoons Sriracha and 1 teaspoon sesame oil with whisk. Add coleslaw mix; toss to coat. Cover and refrigerate 30 minutes, tossing occasionally.',
        recipe_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_no: 3,
        text: 'Remove chicken from slow cooker using slotted spoon. Remove sauce to another bowl. Place chicken on cutting board. Shred chicken using 2 forks, removing any bits of fat.',
        recipe_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_no: 4,
        text: 'Return chicken and 1 1/2 cups of the sauce to slow cooker. Stir in remaining 2 tablespoons hoisin; decrease to Low heat setting. Cook about 20 minutes or until thoroughly heated.',
        recipe_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_no: 5,
        text: 'Serve on buns; top with coleslaw. Serve with remaining sauce, if desired.',
        recipe_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('directions')
}
