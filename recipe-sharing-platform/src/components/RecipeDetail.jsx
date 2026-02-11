import { useParams } from "react-router-dom";
import recipesData from "../data.json";
function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipesData.find((recipe) => recipe.id === parseInt(id));
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-4xl font-bold text-center mt-10 mb-4">
        Recipe Detail
      </h1>
      {recipe ? (
        <div
          key={recipe.id}
          className="w-1/4 mx-auto sm:w-1/3 md:w-1/2 lg:w-full border-2 border-gray-200 rounded-lg overflow-hidden p-4 hover:shadow-md hover:scale-105 hover:transition-transform hover:duration-300 cursor-pointer"
        >
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-48 object-cover rounded-lg"
          />
          <h3 className="text-xl font-bold">{recipe.title}</h3>
          <p className="mt-2">{recipe.summary}</p>
        </div>
      ) : (
        <p className="text-center mt-5 text-red-500">
          No featured recipes available.
        </p>
      )}
    </div>
  );
}
export default RecipeDetail;
