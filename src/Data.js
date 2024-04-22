// Importing Images
// (Layout taken from class example)
import food1 from "./Images/1.jpeg";
import food2 from "./Images/2.jpeg";
import food3 from "./Images/3.jpeg";
import food4 from "./Images/4.jpeg";
import food5 from "./Images/5.jpeg";
import food6 from "./Images/6.jpeg";
import food7 from "./Images/7.jpeg";
import food8 from "./Images/8.jpeg";
import food9 from "./Images/9.jpeg";
import food10 from "./Images/10.jpeg";




// Recipe Data
export const recipeData = [

    {
        id: 1,
        name: "Vegetarian Pasta",
        description: "A classic pasta dish made with fresh vegetables and marinara sauce.",
        cookingTime: 30,
        dietary: ["vegetarian"],
        ingredients: ["8 oz pasta, 2 cups marinara sauce, 1 cup chopped bell peppers, 1 cup sliced mushrooms, 1/2 cup chopped onions, 2 cloves garlic, minced, 2 tbsp olive oil, Salt and pepper to taste"],
        foodImage: food1,
        isFavourite: false,
      },
      {
        id: 2,
        name: "Vegan Stir Fry",
        description: "A flavorful stir-fry dish with tofu and mixed vegetables.",
        cookingTime: 25,
        dietary: ["vegan", "healthy", "light-meal"],
        ingredients: ["1 cup broccoli, 1 cup snap peas, 1 cup carrots, 1 cup bell peppers, 1 cup tofu, 1/4 cup soy sauce, 1/4 cup hoisin sauce, 1/4 cup water, 1 tbsp cornstarch, 1 tbsp oil"],
        foodImage: food2,
        isFavourite: false,
      },
      {
        id: 3,
        name: "Spinach and Feta Stuffed Chicken",
        description: "Tender chicken breasts stuffed with spinach and feta cheese, baked to perfection.",
        cookingTime: 40,
        dietary: ["healthy", "protein-rich"],
        ingredients: ["4 boneless, skinless chicken breasts, 2 cups fresh spinach, 1/2 cup crumbled feta cheese, 2 cloves garlic, minced, 1 tbsp olive oil, Salt and pepper to taste"],
        foodImage: food3,
        isFavourite: false,
      },
      {
        id: 4,
        name: "Quinoa Salad",
        description: "A refreshing and nutritious salad made with quinoa, vegetables, and a zesty dressing.",
        cookingTime: 20,
        dietary: ["vegetarian", "gluten-free", "light-meal", "healthy", "low-carb"],
        ingredients: ["1 cup quinoa, 2 cups water, 1 cup cherry tomatoes, halved, 1 cup cucumber, diced, 1/2 cup red onion, finely chopped, 1/4 cup chopped fresh parsley, 2 tbsp olive oil, 2 tbsp lemon juice, 1 tsp honey, Salt and pepper to taste"],
        foodImage: food4,
        isFavourite: false,
      },
      {
        id: 5,
        name: "Classic Beef Lasagna",
        description: "Layers of rich tomato sauce, creamy cheese, and tender pasta sheets make this classic lasagna a family favorite.",
        cookingTime: 60,
        dietary: ["carb-high", "protein-rich"],
        ingredients: ["1 lb ground beef, 1 onion, finely chopped, 2 cloves garlic, minced, 2 cups marinara sauce, 1 cup ricotta cheese, 1 cup shredded mozzarella cheese, 1/2 cup grated Parmesan cheese, 9 lasagna noodles, cooked, 2 tbsp olive oil, Salt and pepper to taste"],
        foodImage: food5,
        isFavourite: false,
      },
      {
        id: 6,
        name: "Thai Red Curry",
        description: "A fragrant and spicy Thai curry made with red curry paste, coconut milk, and mixed vegetables.",
        cookingTime: 35,
        dietary: ["vegan", "vegetarian"],
        ingredients: ["1 can (14 oz) coconut milk, 2 tbsp red curry paste, 2 cups mixed vegetables (bell peppers, carrots, bamboo shoots, etc.), 1 cup tofu or chickpeas, 1 tbsp soy sauce, 1 tbsp brown sugar, 1/4 cup fresh basil leaves, Cooked rice for serving"],
        foodImage: food6,
        isFavourite: false,
      },
      {
        id: 7,
        name: "Mushroom Risotto",
        description: "Creamy and comforting risotto made with Arborio rice and mushrooms.",
        cookingTime: 45,
        dietary: ["vegetarian", "light-meal"],
        ingredients: ["1 cup Arborio rice, 4 cups vegetable broth, 1 cup sliced mushrooms, 1/2 cup dry white wine, 1/2 cup grated Parmesan cheese, 1/4 cup chopped fresh parsley, 2 tbsp butter, 1 tbsp olive oil, 2 cloves garlic, minced, Salt and pepper to taste"],
        foodImage: food7,
        isFavourite: false,
      },
      {
        id: 8,
        name: "Honey Garlic Salmon",
        description: "Delicious salmon fillets marinated in honey, garlic, and soy sauce, then baked to perfection.",
        cookingTime: 25,
        dietary: ["healthy", "protein-rich"],
        ingredients: ["4 salmon fillets, 1/4 cup honey, 2 tbsp soy sauce, 2 cloves garlic, minced, 1 tbsp olive oil, 1 tbsp lemon juice, 1 tsp dried thyme, Salt and pepper to taste"],
        foodImage: food8,
        isFavourite: false,
      },
      {
        id: 9,
        name: "Caprese Salad",
        description: "A simple and elegant salad made with ripe tomatoes, fresh mozzarella, and basil.",
        cookingTime: 10,
        dietary: ["vegetarian", "gluten-free", "light-meal", "low-carb", "healthy"],
        ingredients: ["2 large tomatoes, sliced, 8 oz fresh mozzarella cheese, sliced, 1/4 cup fresh basil leaves, 2 tbsp balsamic glaze, 2 tbsp extra virgin olive oil, Salt and pepper to taste"],
        foodImage: food9,
        isFavourite: false,
      },
      {
        id: 10,
        name: "Chicken Alfredo Pasta",
        description: "Creamy Alfredo sauce tossed with tender chicken and fettuccine pasta.",
        cookingTime: 35,
        dietary: ["carb-high", "protein-rich"],
        ingredients: ["8 oz fettuccine pasta, 2 boneless, skinless chicken breasts, cut into strips, 1 cup heavy cream, 1/2 cup grated Parmesan cheese, 2 cloves garlic, minced, 2 tbsp butter, 1 tbsp olive oil, Salt and pepper to taste"],
        foodImage: food10,
        isFavourite: false,
      }
  ];