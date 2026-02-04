import React, { use } from "react";
import { fetchUserData } from "../services/githubService";
import useSearchUserStore from "../services/searchuser";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "../utils/themeToggle";

function Search() {
  const [input, setInput] = React.useState("");
  const navigate = useNavigate();
  const [Loading, setLoading] = React.useState(false);
  const setSearchResult = useSearchUserStore((state) => state.setSearchResult);
  const searchResult = useSearchUserStore((state) => state.searchResult);
  const setQuery = useSearchUserStore((state) => state.setQuery);
  const setInputStore = useSearchUserStore((state) => state.setInput);
  const setNoItems = useSearchUserStore((state) => state.setNoItems);
  const query = "location:lagos";
  const [itemsToShow, setItemsToShow] = React.useState(null);
  const incPageNo = useSearchUserStore((state) => state.incPageNo);
  const noItems = useSearchUserStore((state) => state.noItems);
  const [error, setError] = React.useState(null);
  const handleInc = async () => {
    incPageNo();
    try {
      const userData = await fetchUserData(input, query);
      setSearchResult(userData.items);
    } catch (error) {
      setError("Failed to load more users.", error);
    }
  };

  useEffect(() => {
    setItemsToShow(searchResult);
  }, [searchResult]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setInputStore(input);
    setQuery(query);
    setLoading(true);
    try {
      const userData = await fetchUserData(input, query);
      setSearchResult(userData.items);
      setNoItems(userData.total_count);
    } catch (error) {
      setError("Failed to fetch users.", error);
    } finally {
      navigate("/searchResults");
      setLoading(false);
    }
  };
  return (
    <>
      <ThemeToggle />
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md flex flex-col gap-4 dark:bg-gray-800"
      >
        <label
          htmlFor="search"
          className="text-gray-700 font-semibold dark:text-white"
        >
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
