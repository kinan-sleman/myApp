import axiosCLient from "../axiosClient"

export function searchMeals({commit} ,keyword) {
  axiosCLient.get(`search.php?s=${keyword}`)
  .then(({data}) => {
    commit('SET_SEARCHED_MEALS',data.meals)
  })
}

export function searchMealsByLetter({commit} ,letter) {
  axiosCLient.get(`search.php?f=${letter}`)
  .then(({data}) => {
    commit('SET_MEALS_BY_LETTER',data.meals)
  })
}

export function searchMealsByIngredient({commit} ,ing) {
  axiosCLient.get(`filter.php?i=${ing}`)
  .then(({data}) => {
    commit('SET_MEALS_BY_INGREDIENTS',data.meals)
  })
}