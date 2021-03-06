import { Recipe } from '../class/Recipe.js';
import { applyFilter } from './applyFilter.js';

function renderRecipes(recipesArray) {
  // RESET
  document.querySelector('.section-result').innerHTML = '';

  recipesArray = applyFilter(recipesArray);

  // RENDEMENT
  recipesArray.forEach(element => {
    const recipe = new Recipe(element.id, element.name, element.servings, element.ingredients, element.time, element.description, element.appliance, element.ustensils);
    recipe.render();
  })
}

export { renderRecipes };