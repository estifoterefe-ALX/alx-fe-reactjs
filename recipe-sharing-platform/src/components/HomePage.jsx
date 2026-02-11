import { useState, useEffect } from "react";
import recipesData from "../data.json";
function HomePage() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    if (recipesData.length > 0) {
      setRecipes((prev) => [...prev, ...recipesData]);
    }
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-4xl font-bold text-center mt-10">
        Welcome to the Recipe Sharing Platform
      </h1>
      <p className="text-center mt-5">
        Discover and share amazing recipes from around the world.
      </p>
      <div>
        <h2 className="text-2xl font-semibold mt-10">Featured Recipes</h2>
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-5 xl:grid-cols-5">
            {recipes.length > 0 ? (
              recipes?.map((recipe) => (
                <div
                  key={recipe.id}
                  className="border-2 border-gray-200 rounded-lg overflow-hidden p-4 hover:shadow-md hover:scale-105 hover:transition-transform hover:duration-300 cursor-pointer"
                >
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <h3 className="text-xl font-bold">{recipe.title}</h3>
                  <p className="mt-2">{recipe.summary}</p>
                </div>
              ))
            ) : (
              <p className="text-center mt-5 text-red-500">
                No featured recipes available.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
