import React, { useState } from "react";
import Recipe from "./Recipe";

// functional component to display a list of recipes
function RecipeList  ({ recipes: initialRecipes }) {

  // State variables
  const [searchFood, setSearchFood] = useState(""); // state for searching food items
  const [filters, setFilters] = useState([]); // state for filters
  const [showFavourites, setShowFavourites] = useState(false); // state for favourites
  const [recipes, setRecipes] = useState(initialRecipes || []); // state for recipes (The initialRecipes prop was added in after the initial code was written due to the favourites filter not working and due to the recipes not showing up at all)

  // Function to toggle the favourite status of a recipe
  const toggleFavourite = (recipeId) => {
    // Update the isFavourite property of the recipe with the given id
    const updatedRecipes = recipes.map((recipe) =>
      recipe.id === recipeId
        ? { ...recipe, isFavourite: !recipe.isFavourite }
        : recipe
    );
    // Update the recipes state with the updated recipes array
    setRecipes(updatedRecipes);
    
  };

  // Function to handle the change in the filters
  // (Parts of this function were written by AI as a way of cleaning up the code and making it more efficient. Initial code was very messy and excessive and unnecessary.)
  const handleCheckboxChange = (diet) => {
    if (filters.includes(diet)) {
      // Remove the diet from the filters if it is already selected
      setFilters(filters.filter((item) => item !== diet));
    } else {
      // Add the diet to the filters if it is not already selected
      setFilters([...filters, diet]);
    }
  };

  // Filter the recipes based on the searched word, filters, and favourites
  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.name
      .toLowerCase()
      .includes(searchFood.toLowerCase()); // check if searched word is in recipe name
    const matchesDietary =
      filters.length === 0 ||
      filters.some((diet) => recipe.dietary.includes(diet)); // check if recipe matches filter
    const isFavourite = showFavourites ? recipe.isFavourite : true; // check if recipe is favourite
    return matchesSearch && matchesDietary && isFavourite;
  }) || [];

  return (
    <main> 
    <header>
      {/* Search bar for searching food items */}
      <input className="search-bar"
        type="text"
        placeholder="Search recipes..."
        value={searchFood}
        onChange={(e) => setSearchFood(e.target.value)} // External resource from: https://www.geeksforgeeks.org/react-onchange-event/
      />
      
      </header>
      <section className="filters">
        <fieldset> 
        <legend>Filters:</legend>
        {/* Checkboxes for filtering recipes based on chosen filters */}
        {/* (Initial code was very messy and excessive and unnecessary. Used Chatgpt to clean up code and make it more efficient) */}
          {[
            { label: "Vegan", value: "vegan" },
            { label: "Vegetarian", value: "vegetarian" },
            { label: "Healthy", value: "healthy" },
            { label: "Protein-rich", value: "protein-rich" },
            { label: "Gluten-free", value: "gluten-free" },
            { label: "Light meal", value: "light-meal" },
            { label: "Carb-high", value: "carb-high" },
            { label: "Low-carb", value: "low-carb" },
          ].map(({ label, value }) => (
            <label key={value}>
              {label}
              <input
                type="checkbox"
                value={value}
                checked={filters.includes(value)}
                onChange={() => handleCheckboxChange(value)} // update filters when checkbox is clicked
              />
            </label>
          ))}
        </fieldset>
      </section>

      <div>
        <label>
          {/* Checkbox for favourites */}
        Show Favourites
          <input className="show-favourites"
            type="checkbox"
            checked={showFavourites}
            onChange={() => setShowFavourites(!showFavourites)}
          />
         
        </label>
      </div>
     <section className="recipe-grid"> 
     {/* Map through filtered recipes and display correct recipes */}
      {filteredRecipes.map((recipe) => (
        <Recipe
          key={recipe.id}
          recipe={recipe}
          toggleFavourite={toggleFavourite}
        />
      ))}
    </section>
    </main>
  );
};

export default RecipeList;