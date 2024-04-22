import React from "react";

// functional component to display a single recipe 
function Recipe ({ recipe, toggleFavourite }) {
  // Destructure the recipe object and pull out relevant properties.
  const { name, description, cookingTime, dietary, ingredients, foodImage, isFavourite } = recipe;

  return (
    <article className="food">
      <h3 className="name">{name}</h3>
      <p>{description}</p>
      <p>Cooking Time: {cookingTime} minutes</p>
      <p>Dietary: {dietary.join(", ")}</p>
      <p>Ingredients: {ingredients}</p>
      <img src={foodImage} alt="food-images" />
      <button onClick={() => toggleFavourite(recipe.id)}>
        {isFavourite ? "Unfavourite" : "Favourite"}
      </button>
    </article>
  );
};

export default Recipe;