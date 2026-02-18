function searchRecipes(query, category = 'all') {
  const recipes = getAllRecipes();
  const searchTerm = query.toLowerCase().trim();
  
  return recipes.filter(recipe => {
    const matchesCategory = category === 'all' || recipe.category === category;
    
    if (!searchTerm) return matchesCategory;
    
    const matchesTitle = recipe.title.toLowerCase().includes(searchTerm);
    const matchesIngredient = recipe.ingredients.some(ing => 
      ing.toLowerCase().includes(searchTerm)
    );
    const matchesTag = recipe.tags.some(tag => 
      tag.toLowerCase().includes(searchTerm)
    );
    
    return matchesCategory && (matchesTitle || matchesIngredient || matchesTag);
  });
}

function highlightMatch(text, query) {
  if (!query) return text;
  const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
}

function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
