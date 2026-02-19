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
      "240g active sourdough starter",
      "360ml warm water",
      "500g bread flour",
      "9g salt"
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
  },
  {
    id: "easy-chocolate-cake",
    title: "Easy Chocolate Cake",
    category: "cakes",
    prepTime: "15 min",
    cookTime: "25 min",
    servings: 8,
    ingredients: [
      "175g self-raising flour",
      "175g caster sugar",
      "175g unsalted butter, softened",
      "3 medium eggs",
      "40g cocoa powder",
      "1 tsp baking powder",
      "2-3 tbsp milk"
    ],
    instructions: [
      "Preheat oven to 180°C (160°C fan) / Gas 4.",
      "Grease and line two 20cm round sandwich tins (or use one deep tin).",
      "In a large bowl, beat together the butter and sugar until light and fluffy.",
      "Add the eggs one at a time, mixing well.",
      "Sift in the flour, cocoa, and baking powder. Gently fold together.",
      "Stir in the milk until the mixture is smooth and drops easily off the spoon.",
      "Divide between tins and bake for 20–25 minutes (or 35–40 mins if one deep tin), until a skewer comes out clean.",
      "Cool in tins for 10 mins, then turn out onto a wire rack to cool completely."
    ],
    tags: ["chocolate", "easy", "cakes", "classic"]
  },
  {
    id: "american-style-pancakes",
    title: "American-Style Pancakes",
    category: "breakfast",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: 4,
    ingredients: [
      "300g plain flour",
      "4 tbsp caster sugar",
      "4 tsp baking powder",
      "Pinch of salt",
      "400ml milk",
      "2 large eggs",
      "4 tbsp melted butter (plus extra for frying)"
    ],
    instructions: [
      "Mix the flour, sugar, baking powder, and salt in a bowl.",
      "Whisk the milk, eggs, and melted butter together in a jug.",
      "Pour wet ingredients into dry and stir gently until just mixed (a few lumps are fine).",
      "Heat a lightly greased non-stick pan over medium heat.",
      "Add about 2 tbsp of batter per pancake.",
      "Cook 1–2 minutes until bubbles form on the surface.",
      "Flip and cook another 1–2 minutes until golden brown.",
      "Serve warm with syrup, fruit, bacon, chocolate spread, or your favorite toppings."
    ],
    tags: ["breakfast", "pancakes", "easy", "family-friendly"]
  },
  {
    id: "easy-plain-focaccia",
    title: "Easy Plain Focaccia",
    category: "bread",
    prepTime: "15 min",
    cookTime: "25 min",
    servings: 8,
    ingredients: [
      "500g strong white bread flour",
      "7g sachet fast-action dried yeast",
      "10g fine sea salt",
      "400ml warm water",
      "4 tbsp olive oil (plus extra for the tin and topping)",
      "Flaky sea salt (for topping)"
    ],
    instructions: [
      "Put the flour, yeast and salt into a large bowl and stir together.",
      "Add the warm water and 4 tbsp olive oil.",
      "Mix with a spoon until you have a soft, sticky dough.",
      "Cover the bowl with cling film or a clean tea towel.",
      "Leave in a warm place for 1 hour, or until doubled in size.",
      "Generously oil your baking tin with olive oil.",
      "Tip the dough into the tin and gently stretch it to fit the corners.",
      "Cover and leave to rise again for 30–45 minutes.",
      "Heat oven to 220°C (200°C fan).",
      "Oil your fingers and press deep dimples all over the dough.",
      "Drizzle generously with olive oil and sprinkle with flaky sea salt.",
      "Bake for 20–25 minutes until golden brown.",
      "Cool for 10 minutes, then slice and serve warm."
    ],
    tags: ["focaccia", "bread", "easy", "beginner-friendly"]
  },
  {
    id: "breakfast-waffles",
    title: "Breakfast Waffles",
    category: "breakfast",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: 4,
    ingredients: [
      "225g plain flour",
      "1 tbsp baking powder",
      "1 tbsp caster sugar",
      "½ tsp salt",
      "2 large eggs",
      "300ml unsweetened almond milk",
      "1 tbsp vinegar or lemon juice",
      "90g unsalted butter or neutral oil, melted",
      "1 tsp vanilla extract"
    ],
    instructions: [
      "Preheat your waffle maker according to the manufacturer's instructions.",
      "In a jug, mix the almond milk with 1 tbsp vinegar or lemon juice. Let it sit for 5 minutes to curdle slightly.",
      "In a large bowl, sift together the flour, baking powder, caster sugar, and salt.",
      "In another bowl, whisk the eggs, then add the prepared almond milk, melted butter or oil, and vanilla extract. Mix well.",
      "Pour the wet ingredients into the dry ingredients and gently whisk until just combined. Avoid overmixing—small lumps are fine.",
      "Lightly brush the waffle maker with melted butter or oil. Pour enough batter to cover the plates (about 60–75ml per waffle).",
      "Close the lid and cook for 3–5 minutes, or until golden and crisp.",
      "Keep waffles warm in a low oven (100°C) while you cook the rest. Serve immediately with your favourite toppings."
    ],
    tags: ["breakfast", "waffles", "easy", "family-friendly"]
  },
  {
    id: "crepe-pancakes",
    title: "Crêpe Pancakes",
    category: "breakfast",
    prepTime: "5 min",
    cookTime: "15 min",
    servings: 8,
    ingredients: [
      "100g plain flour, sifted",
      "2 large eggs",
      "300ml semi-skimmed milk",
      "1 tbsp sunflower oil or melted butter",
      "Pinch of salt",
      "1 tsp caster sugar (optional)"
    ],
    instructions: [
      "Sift the flour and salt into a large bowl. Make a well in the centre.",
      "Crack the eggs into the well, then gradually whisk in the milk, drawing in the flour as you go.",
      "Add the oil or melted butter and whisk until smooth. The batter should be thin and runny, like single cream.",
      "Let the batter rest for at least 15 minutes (or up to an hour if possible).",
      "Heat a non-stick frying pan over medium-high heat. Add a tiny knob of butter or a drizzle of oil, then wipe with kitchen paper.",
      "Pour a small ladle of batter into the pan, tilting and swirling it to coat the base evenly.",
      "Cook for about 1 minute until the edges lift and the base is golden. Flip with a spatula and cook the other side for 30 seconds.",
      "Stack the pancakes on a plate and keep warm while you cook the rest.",
      "Serve with lemon wedges and caster sugar, jam, chocolate spread, or fresh berries."
    ],
    tags: ["breakfast", "pancakes", "crepe", "easy"]
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

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { recipes, getAllRecipes, getRecipeById, getRecipesByCategory };
}
