module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('directions', [
      {
        order_no: 1,
        text: 'Line cookie sheet with foil; top with wire rack. Spray rack with cooking spray.',
        recipe_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_no: 2,
        text: 'In small bowl, lightly beat egg whites with fork; set aside. Place chicken between 2 sheets of plastic wrap, and pound to about 1/4 inch. Add to bowl with egg whites, and coat thoroughly.',
        recipe_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_no: 3,
        text: 'Move oven rack 8 inches from heating element. Heat broiler to high. In small bowl, mix bread crumbs, Italian seasoning and pepper flakes. Let excess egg white drip from chicken, then sprinkle chicken with 1/8 teaspoon salt. Add chicken to bowl with bread crumb mixture, pressing onto chicken. Place on rack. Broil 5 to 6 minutes; turn, and broil 3 to 5 minutes on other side or until chicken is cooked through and coating begins to brown.',
        recipe_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_no: 4,
        text: 'Meanwhile, in large bowl, mix vinegar, sugar, pepper, 1/8 teaspoon salt and the oil. Add onion, and toss to coat. Let stand until chicken is finished cooking, then add arugula, and toss to coat.',
        recipe_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_no: 5,
        text: 'Divide salad between 2 plates. Top with chicken breast, then tomatoes, followed by Parmesan cheese. Serve immediately.',
        recipe_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('directions')
}
