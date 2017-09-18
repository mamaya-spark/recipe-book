module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('recipes', [
      {
        name: 'Skinny Chicken Milanese with Balsamic Arugula Salad',
        img_url: 'https://images-gmi-pmc.edge-generalmills.com/327a7763-6faa-44bf-a8cf-9e21879cb26b.jpg',
        description: 'Peppery arugula and crispy chicken join forces in this dish that makes a lovely light dinner or a filling and flavorful lunch for two',
        cuisine_id: 39,
        calories: 380,
        servings: 2,
        prep_time: 30,
        saved: true,
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Peanut Butter-Chocolate Poke Cake',
        img_url: 'https://images-gmi-pmc.edge-generalmills.com/9601f8fe-1d64-423d-b242-c7d503488e47.jpg',
        description: 'Betty Crocker SuperMoist chocolate fudge cake mix, creamy peanut butter, chocolate syrup, and a classic candy come together to make this crowd-pleasing poke cake.',
        cuisine_id: 18,
        calories: 720,
        servings: 10,
        prep_time: 15,
        cook_time: 65,
        saved: true,
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Strawberry Smoothie',
        img_url: 'https://images-gmi-pmc.edge-generalmills.com/9b012bef-3a3a-4ba9-a930-821877eb4dc6.jpg',
        description: 'Tropical yogurt and fresh fruit mix it up in this terrific blender drink.',
        cuisine_id: 42,
        calories: 230,
        servings: 1,
        prep_time: 10,
        saved: true,
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Slow-Cooker Asian Pulled Chicken Sandwiches',
        img_url: 'https://images-gmi-pmc.edge-generalmills.com/e4af4ae1-94b5-49a4-86d0-ca68a9419f3f.jpg',
        description: 'Hoison sauce, Sriracha sauce and Progresso chicken stock gives this moist, "pass-me-the-napkins" sandwich a spicy sweetness. It\s topped with ultra-easy coleslaw for a fresh taste and addictive crunch.',
        cuisine_id: 5,
        calories: 100,
        servings: 8,
        prep_time: 35,
        cook_time: 235,
        saved: false,
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Cheesy Reuben Appetizer',
        img_url: 'https://images-gmi-pmc.edge-generalmills.com/21db7af0-3ccf-4e96-800b-0f147aeb62f4.jpg',
        description: 'If you\'re a Reuben sandwich fan, you\'ll love these easy-to-make appetizers.',
        cuisine_id: 3,
        calories: 220,
        servings: 20,
        prep_time: 10,
        cook_time: 15,
        saved: false,
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('recipes')
}