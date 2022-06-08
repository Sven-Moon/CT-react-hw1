const convertRecipes = (recipes) => {
  const recipesDTO = {}
  recipes.forEach((recipe, i) => {
    recipe = recipe.recipe
    recipesDTO[i] = {
      name: recipe.label,
      url: recipe.url,
      image: recipe.images.REGULAR.url,
      mealType: recipe.mealType,
      cuisineType: recipe.cuisineType,
      totalTime: recipe.totalTime,
      ingredients: recipe.ingredients
    }
  })
  console.log(recipesDTO);
  return recipesDTO
}

export default convertRecipes