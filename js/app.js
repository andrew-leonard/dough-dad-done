function createRecipeCard(recipe) {
  const card = document.createElement('article');
  card.className = 'recipe-card';
  
  const isFav = isFavorite(recipe.id);
  
  card.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: flex-start;">
      <div>
        <span class="category-badge">${recipe.category}</span>
        <h3><a href="recipe.html?id=${recipe.id}">${recipe.title}</a></h3>
      </div>
      <button class="favorite-btn ${isFav ? 'active' : ''}" data-recipe-id="${recipe.id}" aria-label="Toggle favorite">
        ${isFav ? '♥' : '♡'}
      </button>
    </div>
    <div class="meta">
      Prep: ${recipe.prepTime} | Cook: ${recipe.cookTime} | Serves: ${recipe.servings}
    </div>
    <div class="tags">
      ${recipe.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
    </div>
  `;
  
  const favBtn = card.querySelector('.favorite-btn');
  favBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const nowFav = toggleFavorite(recipe.id);
    favBtn.classList.toggle('active', nowFav);
    favBtn.innerHTML = nowFav ? '♥' : '♡';
  });
  
  return card;
}

function renderRecipeGrid(recipesToRender) {
  const grid = document.getElementById('recipe-grid');
  const noResults = document.getElementById('no-results');
  
  grid.innerHTML = '';
  
  if (recipesToRender.length === 0) {
    noResults.style.display = 'block';
  } else {
    noResults.style.display = 'none';
    recipesToRender.forEach(recipe => {
      grid.appendChild(createRecipeCard(recipe));
    });
  }
}

function setupCategoryFilters() {
  const buttons = document.querySelectorAll('.category-btn');
  
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const category = btn.dataset.category;
      const query = document.getElementById('search-input')?.value || '';
      const results = searchRecipes(query, category);
      renderRecipeGrid(results);
    });
  });
}

function setupSearch() {
  const searchInput = document.getElementById('search-input');
  if (!searchInput) return;
  
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value;
    const activeCategory = document.querySelector('.category-btn.active');
    const category = activeCategory ? activeCategory.dataset.category : 'all';
    const results = searchRecipes(query, category);
    renderRecipeGrid(results);
  });
}

function loadRecipeDetail() {
  const params = new URLSearchParams(window.location.search);
  const recipeId = params.get('id');
  
  if (!recipeId) {
    document.getElementById('recipe-detail').style.display = 'none';
    document.getElementById('recipe-not-found').style.display = 'block';
    return;
  }
  
  const recipe = getRecipeById(recipeId);
  
  if (!recipe) {
    document.getElementById('recipe-detail').style.display = 'none';
    document.getElementById('recipe-not-found').style.display = 'block';
    return;
  }
  
  document.getElementById('recipe-title').textContent = recipe.title;
  document.getElementById('recipe-category').textContent = recipe.category;
  document.getElementById('recipe-prep-time').textContent = `Prep: ${recipe.prepTime}`;
  document.getElementById('recipe-cook-time').textContent = `Cook: ${recipe.cookTime}`;
  document.getElementById('recipe-servings').textContent = `Serves: ${recipe.servings}`;
  
  const ingredientsList = document.getElementById('recipe-ingredients');
  ingredientsList.innerHTML = recipe.ingredients
    .map(ing => `<li>${ing}</li>`)
    .join('');
  
  const instructionsList = document.getElementById('recipe-instructions');
  instructionsList.innerHTML = recipe.instructions
    .map(step => `<li>${step}</li>`)
    .join('');
  
  const tagsContainer = document.getElementById('recipe-tags');
  tagsContainer.innerHTML = recipe.tags
    .map(tag => `<span class="tag">${tag}</span>`)
    .join('');
  
  const favoriteBtn = document.getElementById('favorite-btn');
  const favoriteIcon = document.getElementById('favorite-icon');
  
  function updateFavoriteBtn() {
    const isFav = isFavorite(recipe.id);
    favoriteIcon.textContent = isFav ? '♥' : '♡';
    favoriteBtn.innerHTML = `<span id="favorite-icon">${isFav ? '♥' : '♡'}</span> ${isFav ? 'Remove from Favorites' : 'Add to Favorites'}`;
  }
  
  updateFavoriteBtn();
  
  favoriteBtn.addEventListener('click', () => {
    toggleFavorite(recipe.id);
    updateFavoriteBtn();
  });
  
  document.getElementById('print-btn').addEventListener('click', () => {
    window.print();
  });
}

function loadFavoritesPage() {
  const favorites = getFavorites();
  const grid = document.getElementById('favorites-grid');
  const noFavorites = document.getElementById('no-favorites');
  
  if (favorites.length === 0) {
    grid.style.display = 'none';
    noFavorites.style.display = 'block';
    return;
  }
  
  grid.style.display = 'grid';
  noFavorites.style.display = 'none';
  
  const allRecipes = getAllRecipes();
  const favoriteRecipes = allRecipes.filter(recipe => favorites.includes(recipe.id));
  
  favoriteRecipes.forEach(recipe => {
    const card = createRecipeCard(recipe);
    grid.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('recipe-grid')) {
    renderRecipeGrid(getAllRecipes());
    setupCategoryFilters();
    setupSearch();
  }
});
