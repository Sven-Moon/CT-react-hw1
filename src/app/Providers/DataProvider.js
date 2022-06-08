import { createContext, useState } from "react";



const DataProvider = (props) => {

  const [recipe, setRecipe] = useState({name:''})

  return (
    <DataContext.Provider value={{'recipe': recipe, 'setRecipe': setRecipe}}>
      {props.children}
    </DataContext.Provider>
  )

}
export default DataProvider
export let DataContext = createContext()