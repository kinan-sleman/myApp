export function SET_SEARCHED_MEALS (state, meals){ 
  state.searchedMeals = meals || [];
}

export function SET_MEALS_BY_LETTER (state, meals){ 
  state.mealsByLetter = meals || [];
}

export function SET_MEALS_BY_INGREDIENTS (state, meals){ 
  state.mealsByIngredient = meals || [];
}