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
  const setQuery = useSearchUserStore((state) => state.setQuery);
  const setInputStore = useSearchUserStore((state) => state.setInput);
  const setNoItems = useSearchUserStore((state) => state.setNoItems);
  const query = "location:lagos";
  const [itemsToShow, setItemsToShow] = React.useState(null);
  const incPageNo = useSearchUserStore((state) => state.incPageNo);
  const noItems = useSearchUserStore((state) => state.noItems);
  const handleInc = async () => {
    console.log("Loading more users...");
    incPageNo();
    try {
      const userData = await fetchUserData(input, query);
      setSearchResult(userData.items);
    } catch (error) {
      console.log("Error loading more users:", error);
    }
  };
  console.log("Search Result:", searchResult);

  useEffect(() => {
    setItemsToShow(searchResult);
  }, [searchResult]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Searching for:", input);
    setInputStore(input);
    setQuery(query);
    setLoading(true);
    try {
      const userData = await fetchUserData(input, query);
      setSearchResult(userData.items);
      setNoItems(userData.total_count);
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
      {Loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {itemsToShow ? (
            itemsToShow.map((user) => {
              return (
                <div
                  key={user.id}
                  className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md"
                >
                  <img
                    src={user.avatar_url}
                    alt={user.login}
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                  />

                  <h2 className="text-xl font-semibold text-center text-gray-800">
                    {user.login}
                  </h2>

                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center text-blue-600 hover:underline mt-2"
                  >
                    View GitHub Profile
                  </a>
                </div>
              );
            })
          ) : (
            <p>Looks like we cant find the user</p>
          )}
          {noItems > itemsToShow?.length && (
            <div className="text-center mt-4 mb-4">
              <button
                onClick={handleInc}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Load More
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
}
export default Search;
