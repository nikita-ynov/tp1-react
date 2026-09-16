import { recipes } from './assets/recipes.json'
import RecipeCard from './components/RecipeCard';

function App() {

  return (
    <>
      <div className="App page-container">
        <h1>Nikita Petrenko</h1>
        <div className="grid-container">
          {recipes.map((recipe) => (
            <RecipeCard
              id={recipe.id}
              image={recipe.image}
              name={recipe.name}
              time={recipe.prepTimeMinutes}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
