const { describe, it } = require('node:test');
const assert = require('node:assert');

const { recipes } = require('../js/recipes.js');
const { searchRecipes, highlightMatch, escapeRegex } = require('../js/search.js');

describe('searchRecipes', () => {
  it('should return all recipes when query is empty', () => {
    const results = searchRecipes('');
    assert.strictEqual(results.length, recipes.length);
  });

  it('should search by title (case insensitive)', () => {
    const results = searchRecipes('chocolate');
    assert.strictEqual(results.length, 3);
    assert.ok(results.some(r => r.title.includes('Chocolate Chip')));
    assert.ok(results.some(r => r.title.includes('Chocolate Cake')));
    assert.ok(results.some(r => r.title.includes('Mini Egg')));
  });

  it('should search by ingredients (case insensitive)', () => {
    const results = searchRecipes('butter');
    assert.ok(results.length > 0);
    assert.ok(results.every(r => 
      r.ingredients.some(ing => ing.toLowerCase().includes('butter'))
    ));
  });

  it('should search by tags (case insensitive)', () => {
    const results = searchRecipes('easy');
    assert.ok(results.length > 0);
    assert.ok(results.every(r => r.tags.includes('easy')));
  });

  it('should trim whitespace from query', () => {
    const resultsTrimmed = searchRecipes('  cake  ');
    const resultsNormal = searchRecipes('cake');
    assert.deepStrictEqual(resultsTrimmed, resultsNormal);
  });

  it('should filter by category', () => {
    const results = searchRecipes('', 'bread');
    assert.ok(results.length > 0);
    assert.ok(results.every(r => r.category === 'bread'));
  });

  it('should combine category filter with search query', () => {
    const results = searchRecipes('chocolate', 'cakes');
    assert.ok(results.length > 0);
    assert.ok(results.every(r => r.category === 'cakes'));
    assert.ok(results.every(r => 
      r.title.toLowerCase().includes('chocolate') ||
      r.ingredients.some(ing => ing.toLowerCase().includes('chocolate')) ||
      r.tags.some(tag => tag.toLowerCase().includes('chocolate'))
    ));
  });

  it('should return empty array when no matches found', () => {
    const results = searchRecipes('nonexistent-recipe-xyz');
    assert.strictEqual(results.length, 0);
  });

  it('should handle special characters in search query', () => {
    const results = searchRecipes('1/2');
    assert.ok(results.length >= 0);
  });
});

describe('highlightMatch', () => {
  it('should wrap matching text in mark tags', () => {
    const result = highlightMatch('Chocolate Cake', 'cake');
    assert.ok(result.includes('<mark>Cake</mark>'));
    assert.ok(result.startsWith('Chocolate '));
  });

  it('should be case insensitive', () => {
    const result = highlightMatch('Chocolate Cake', 'CHOCOLATE');
    assert.strictEqual(result, '<mark>Chocolate</mark> Cake');
  });

  it('should handle multiple matches', () => {
    const result = highlightMatch('Banana Banana Bread', 'banana');
    assert.strictEqual(result, '<mark>Banana</mark> <mark>Banana</mark> Bread');
  });

  it('should return original text when query is empty', () => {
    const result = highlightMatch('Some text', '');
    assert.strictEqual(result, 'Some text');
  });

  it('should return original text when no matches', () => {
    const result = highlightMatch('Chocolate Cake', 'vanilla');
    assert.strictEqual(result, 'Chocolate Cake');
  });
});

describe('escapeRegex', () => {
  it('should escape special regex characters', () => {
    assert.strictEqual(escapeRegex('.'), '\\.');
    assert.strictEqual(escapeRegex('*'), '\\*');
    assert.strictEqual(escapeRegex('+'), '\\+');
    assert.strictEqual(escapeRegex('?'), '\\?');
    assert.strictEqual(escapeRegex('^'), '\\^');
    assert.strictEqual(escapeRegex('$'), '\\$');
    assert.strictEqual(escapeRegex('['), '\\[');
    assert.strictEqual(escapeRegex(']'), '\\]');
    assert.strictEqual(escapeRegex('('), '\\(');
    assert.strictEqual(escapeRegex(')'), '\\)');
    assert.strictEqual(escapeRegex('{'), '\\{');
    assert.strictEqual(escapeRegex('}'), '\\}');
    assert.strictEqual(escapeRegex('|'), '\\|');
    assert.strictEqual(escapeRegex('\\'), '\\\\');
  });

  it('should not escape normal characters', () => {
    assert.strictEqual(escapeRegex('abc'), 'abc');
    assert.strictEqual(escapeRegex('123'), '123');
  });

  it('should handle mixed content', () => {
    assert.strictEqual(escapeRegex('1.5 cups'), '1\\.5 cups');
  });
});
