# Baking Recipes

A simple, fast, and mobile-friendly baking recipe website hosted on GitHub Pages.

## Live Site

Visit the site at: `https://andrew-leonard.github.io/baking-recipes`

## Features

- Clean, responsive design using Pico CSS
- Search recipes by name, ingredients, or tags
- Filter by category (cookies, cakes, bread, pastries, pies)
- Save your favorite recipes to local storage
- Print-friendly recipe pages
- No JavaScript frameworks - pure vanilla JS

## Adding New Recipes

1. Open `js/recipes.js`
2. Copy an existing recipe object and paste it after the last one
3. Update all fields with your recipe data:
   - `id`: URL-friendly unique identifier (e.g., "vanilla-cake")
   - `title`: Display name
   - `category`: One of: cookies, cakes, bread, pastries, pies
   - `prepTime`: Preparation time (e.g., "15 min")
   - `cookTime`: Cooking time (e.g., "30 min")
   - `servings`: Number of servings
   - `ingredients`: Array of ingredient strings
   - `instructions`: Array of step-by-step instructions
   - `tags`: Array of descriptive tags
4. Save the file
5. Commit and push to GitHub
6. Changes will auto-deploy to GitHub Pages within a few minutes

## Local Development

Simply open `index.html` in your browser - no build step required!

## License

MIT License
