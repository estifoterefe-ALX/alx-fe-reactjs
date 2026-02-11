import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
function AddRecipeForm() {
  const navigate = useNavigate();
  const imageViewer = useRef(null);
  const lable = useRef(null);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    ingredients: "",
    instructions: "",
    image: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      alert("Recipe submitted successfully!");
      navigate("/");
    } else {
      setErrors(newErrors);
    }
  };
  const validate = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = "Title is required";
    if (!formData.summary) newErrors.summary = "Summary is required";
    if (!formData.ingredients)
      newErrors.ingredients = "Ingredients are required";
    if (!formData.instructions)
      newErrors.instructions = "Instructions are required";
    if (!formData.image) newErrors.image = "Image is required";
    return newErrors;
  };
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setFormData({ ...formData, image: reader.result });
        lable.current.classList.remove("hidden");
        imageViewer.current.classList.remove("hidden");
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-4xl font-bold text-center mt-10 mb-6">
        Add a New Recipe
      </h1>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="w-xl sm:min-w-2xl md:min-w-4xl lg:w-full mx-auto bg-white p-8 rounded-lg shadow-md"
      >
        <div className="mb-4 border-2 border-gray-200 rounded-lg overflow-hidden p-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title
          </label>
          {errors.title && (
            <p className="text-red-500 text-xs italic">{errors.title}</p>
          )}
          <input
            type="text"
            id="title"
            name="title"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <label
            htmlFor="summary"
            className="block text-gray-700 font-bold mb-2"
          >
            Summary
          </label>
          {errors.summary && (
            <p className="text-red-500 text-xs italic">{errors.summary}</p>
          )}
          <textarea
            id="summary"
            name="summary"
            className="w-full min-h-24 px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            value={formData.summary}
            onChange={(e) =>
              setFormData({ ...formData, summary: e.target.value })
            }
          ></textarea>
        </div>

        <div className="mb-4 border-2 border-gray-200 rounded-lg overflow-hidden p-4">
          <label
            htmlFor="ingredients"
            className="block text-gray-700 font-bold mb-2"
          >
            Ingredients
          </label>
          {errors.ingredients && (
            <p className="text-red-500 text-xs italic">{errors.ingredients}</p>
          )}
          <textarea
            id="ingredients"
            name="ingredients"
            className="w-full min-h-24 px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            value={formData.ingredients}
            onChange={(e) =>
              setFormData({ ...formData, ingredients: e.target.value })
            }
          ></textarea>
        </div>

        <div className="mb-4 border-2 border-gray-200 rounded-lg overflow-hidden p-4">
          <label
            htmlFor="instructions"
            className="block text-gray-700 font-bold mb-2"
          >
            Instructions steps
          </label>
          {errors.instructions && (
            <p className="text-red-500 text-xs italic">{errors.instructions}</p>
          )}
          <textarea
            id="instructions"
            name="instructions"
            className="w-full min-h-24 px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            value={formData.instructions}
            onChange={(e) =>
              setFormData({ ...formData, instructions: e.target.value })
            }
          ></textarea>
        </div>
        <div className="mb-4 border-2 border-gray-200 rounded-lg overflow-hidden p-4">
          <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
            image
          </label>
          {errors.image && (
            <p className="text-red-500 text-xs italic">{errors.image}</p>
          )}
          <input
            id="image"
            name="image"
            type="file"
            accept="image/*"
            onChange={(e) => handleUpload(e)}
            className="w-full min-h-12 px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          ></input>
          <label
            htmlFor="Preview"
            className="block text-gray-700 font-bold mb-2 hidden"
            ref={lable}
          >
            Preview
          </label>
          <img
            src={formData.image}
            alt=""
            className="mt-2 max-w-xs hidden"
            ref={imageViewer}
          />
        </div>

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
          >
            Submit Recipe
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline ml-4"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddRecipeForm;
