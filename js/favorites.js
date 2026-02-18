const FAVORITES_KEY = 'baking-recipes-favorites';

function getFavorites() {
  try {
    const stored = localStorage.getItem(FAVORITES_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    return [];
  }
}

function saveFavorites(favorites) {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch (e) {
    console.error('Failed to save favorites:', e);
  }
}

function isFavorite(recipeId) {
  const favorites = getFavorites();
  return favorites.includes(recipeId);
}

function toggleFavorite(recipeId) {
  const favorites = getFavorites();
  const index = favorites.indexOf(recipeId);
  
  if (index > -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push(recipeId);
  }
  
  saveFavorites(favorites);
  return index === -1;
}

function addFavorite(recipeId) {
  const favorites = getFavorites();
  if (!favorites.includes(recipeId)) {
    favorites.push(recipeId);
    saveFavorites(favorites);
  }
}

function removeFavorite(recipeId) {
  const favorites = getFavorites();
  const index = favorites.indexOf(recipeId);
  if (index > -1) {
    favorites.splice(index, 1);
    saveFavorites(favorites);
  }
}
