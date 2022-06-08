import { useState, useContext } from "react"
import axios from "axios"
import convertRecipes from "./services"
import { DataContext } from "../app/Providers/DataProvider"

const RecipeSearch = () => {

  const [recipes, setRecipes] = useState()
  const {recipe,setRecipe} = useContext(DataContext)

  const getRecipesData = async () => {
    let url = `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=ddba5a19&app_key=fc624084506dce76e8cd97a4e05ed249&ingr=3-20&mealType=Dinner`
    let response = await axios.get(url)
    return response.status === 200 ? response.data.hits : null 
  }
  const loadRecipesData = async () => {
    // e.preventDefault()
    console.log('about to retrieve data');
    let data = await getRecipesData();
    setRecipes(convertRecipes(data))
  }

  const fillMealType = (text) => {
    const input = document.getElementById("ingredient")
    input.value = text
  }

  const selectRecipeForView = (index) => {
    console.log('recipe:',recipes[index]);
    setRecipe(recipes[index])
    console.log('recipe:',recipe);   // TODO: why not set?
  }

  const RecipePreview = (data) => {
    const {r, index} = data
    return (
      <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
        <button className="card mb-3" style={{ "maxWidth": 540 + "px" }} onClick={() => selectRecipeForView(data.index)}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={r.image} className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{r.name}</h5>
                <p className="card-text">{r.cuisineType.join(", ")}</p>
                <p className="card-text"><span className="badge badge-primary badge-pill text-light bg-dark">{r.totalTime.toFixed(0)}</span>Minutes</p>
                <p className="card-text"><small className="text-muted">{r.mealType.join(", ")}</small></p>
              </div>
            </div>
          </div>
        </button>
      </li>
    )
  }

   return(
  <div id="recipeSearch" className="container">
       {/* SEARCH BAR */}
     <form className="form-inline my-2 my-lg-0">
       <label htmlFor=""></label>
       <input id="ingredient" className="form-control mr-sm-2 mb-2" type="search" placeholder="Search" aria-label="Search" />
      {/* MEAL TYPE BUTTONS */}
        <div className="btn-group w-100" role="group" aria-label="Basic example">
           <button type="button" className="btn btn-secondary" onClick={() => fillMealType('Breakfast')}>Breakfast</button>
           <button type="button" className="btn btn-secondary" onClick={() => fillMealType('Lunch')}>Lunch</button>
           <button type="button" className="btn btn-secondary" onClick={() => fillMealType('Dinner')}>Dinner</button>
           <button type="button" className="btn btn-secondary" onClick={() => fillMealType('Snack')}>Snack</button>
        </div>

        <label htmlFor="">Get Recipes</label>
        <button className="btn btn-outline-success my-2 my-sm-0 mx-2" type="button" onClick={() => loadRecipesData()}>Search</button>
     </form>
     {/* RESULTS LIST */}
     <ul className="list-group">
     {
        recipes ? 
        Object.values(recipes).map((recipe, index) => {
          return(
            <RecipePreview r={recipe} index={index} />)
        }): null 
      }      
     </ul>
  </div>

 )
}


export default RecipeSearch