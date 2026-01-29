import React, { use } from "react";
import { fetchUserData } from "../services/githubService";
import useSearchUserStore from "../services/searchuser";
import { Navigate, useNavigate } from "react-router-dom";
function Search() {
  const [input, setInput] = React.useState("");
  const navigate = useNavigate();
  const setSearchResult = useSearchUserStore((state) => state.setSearchResult);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Searching for:", input);
    try {
      const userData = await fetchUserData(input);
      setSearchResult(userData);
    } catch (error) {
      console.log("Error during search:", error);
    } finally {
      navigate("/searchResults");
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md flex flex-col gap-4"
      >
        <label htmlFor="search" className="text-gray-700 font-semibold">
          GitHub Users
        </label>
        <input
          type="text"
          id="search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter GitHub username"
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200"
        >
          Search
        </button>
      </form>
    </>
  );
}
export default Search;
