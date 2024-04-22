import React from "react";
import RecipeList from "./components/RecipeList";
import { recipeData } from "./Data";
import './components/Recipe.css';
import "./App.css"

// Main App component that holds all the other components and data and showcases the Recipe Book data on web app
function App () {
  return (
    <main>
      <h1 className="heading">Recipe Book</h1>
      <RecipeList recipes={recipeData} />
    </main>
  );
};

export default App;