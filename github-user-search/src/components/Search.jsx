import React, { use } from "react";
import { fetchUserData } from "../services/githubService";
import useSearchUserStore from "../services/searchuser";
import { Navigate, useNavigate } from "react-router-dom";
function Search() {
  const [input, setInput] = React.useState("");
  const navigate = useNavigate();
  const [Loading, setLoading] = React.useState(false);
  const setSearchResult = useSearchUserStore((state) => state.setSearchResult);
  const searchResult = useSearchUserStore((state) => state.searchResult);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Searching for:", input);
    setLoading(true);
    try {
      const userData = await fetchUserData(input);
      setSearchResult(userData);
    } catch (error) {
      console.log("Error during search:", error);
    } finally {
      navigate("/searchResults");
      setLoading(false);
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
      {Loading ? <p>Loading...</p> : null}
      {searchResult ? (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
          <img
            src={searchResult.avatar_url}
            alt={searchResult.login}
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold text-center text-gray-800">
            {searchResult.login}
          </h2>
          <p className="text-gray-600 text-center">
            {searchResult.bio || "No bio available"}
          </p>
        </div>
      ) : (
        <p>Looks like we cant find the user</p>
      )}
    </>
  );
}
export default Search;
