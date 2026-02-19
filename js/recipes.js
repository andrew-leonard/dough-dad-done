const recipes = [
  {
    id: 'mini-egg-banana-bread',
    title: 'Mini Egg Banana Bread',
    category: 'bread',
    prepTime: '10 min',
    cookTime: '60 min',
    servings: 8,
    ingredients: [
      '3 bananas mashed',
      '150g butter',
      '150g caster sugar',
      '2 eggs',
      '1 tsp vanilla extract',
      '150g self-raising flour',
      '1 bag mini eggs (100g)',
      '75g milk chocolate chips',
      '75g white chocolate chips'
    ],
    instructions: [
      'Preheat oven to 160°C (320°F).',
      'Grease and flour a loaf pan.',
      'In a large bowl, cream together butter and sugar until light and fluffy.',
      'Beat in eggs one at a time, then stir in vanilla.',
      'Mix in mashed bananas.',
      'Sift in flour and fold until just combined.',
      'Gently fold in mini eggs and chocolate chips.',
      'Pour batter into prepared loaf pan and smooth the top.',
      'Bake for 60 minutes or until a toothpick inserted into the center comes out clean.',
      'Allow to cool in the pan for 10 minutes, then turn out onto a wire rack to cool completely.'
    ],
    tags: ['banana', 'chocolate', 'easy', 'mini eggs']
  },
  {
    id: "chocolate-chip-cookies",
    title: "Chocolate Chip Cookies",
    category: "cookies",
    prepTime: "15 min",
    cookTime: "12 min",
    servings: 24,
    ingredients: [
      "2 1/4 cups all-purpose flour",
      "1 tsp baking soda",
      "1 tsp salt",
      "1 cup unsalted butter, softened",
      "3/4 cup granulated sugar",
      "3/4 cup packed brown sugar",
      "2 large eggs",
      "2 tsp vanilla extract",
      "2 cups chocolate chips"
    ],
    instructions: [
      "Preheat oven to 375°F (190°C).",
      "In a small bowl, mix flour, baking soda, and salt.",
      "In a large bowl, beat butter and sugars until creamy.",
      "Add eggs and vanilla, beat well.",
      "Gradually blend in flour mixture.",
      "Stir in chocolate chips.",
      "Drop by rounded tablespoon onto ungreased baking sheets.",
      "Bake for 9 to 11 minutes or until golden brown.",
      "Cool on baking sheets for 2 minutes, then transfer to wire racks."
    ],
    tags: ["easy", "classic", "family-favorite"]
  },
  {
    id: "classic-sourdough-bread",
    title: "Classic Sourdough Bread",
    category: "bread",
    prepTime: "30 min",
    cookTime: "45 min",
    servings: 1,
    ingredients: [
      "1 cup active sourdough starter",
      "1 1/2 cups warm water",
      "4 cups bread flour",
      "1 1/2 tsp salt"
    ],
    instructions: [
      "In a large bowl, mix starter and water.",
      "Add flour and mix until no dry flour remains.",
      "Cover and let rest for 30 minutes (autolyse).",
      "Add salt and fold dough to incorporate.",
      "Perform stretch and folds every 30 minutes for 2 hours.",
      "Cover and let rise at room temperature for 4-6 hours.",
      "Shape dough and place in a floured banneton.",
      "Refrigerate overnight (8-24 hours). Or let rise at room temperature for 2-4 hours until doubled.",
      "Preheat Dutch oven to 450°F (230°C).",
      "Score dough and bake covered for 20 minutes.",
      "Remove lid and bake 20-25 minutes more until golden brown.",
      "Cool completely on wire rack before slicing."
    ],
    tags: ["artisan", "fermentation", "weekend-project"]
  }
];

function getAllRecipes() {
  return recipes;
}

function getRecipeById(id) {
  return recipes.find(recipe => recipe.id === id);
}

function getRecipesByCategory(category) {
  if (category === 'all') return recipes;
  return recipes.filter(recipe => recipe.category === category);
}
