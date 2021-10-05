import { recipes } from '../recipes.js';
import { Recipe } from '../class/Recipe.js';

const container = document.querySelector('.section-result');
const search = document.querySelector('#search');
search.oninput = startSearch;
function startSearch() {
  if (search.value.length > 3) {
    container.innerHTML = '';
    let result = [];

    recipes.forEach(element => {
      if (element.name.toLocaleLowerCase().includes(search.value.toLocaleLowerCase())) {
        result.push(element);
      }

      if (element.description.toLocaleLowerCase().includes(search.value.toLocaleLowerCase())) {
        result.push(element);
      }

      if (element.ingredients.find(element => element.ingredient.toLocaleLowerCase().includes(search.value.toLocaleLowerCase()))) {
        result.push(element);
      }
    })
    
    result.forEach(element => {
      const recipe = new Recipe(element.id, element.name, element.servings, element.ingredients, element.time, element.description, element.appliance, element.ustensils);
      recipe.render();
    })
  }

  if (search.value.length === 0) {
    container.innerHTML = '';
    recipes.forEach(element => {
      const recipe = new Recipe(element.id, element.name, element.servings, element.ingredients, element.time, element.description, element.appliance, element.ustensils);
      recipe.render();
    })
  }
}

//export {startSearch};