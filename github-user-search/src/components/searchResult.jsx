import React, { useEffect } from "react";
import useSearchUserStore from "../services/searchuser";
import { useNavigate } from "react-router-dom";
import { fetchUserData } from "../services/githubService";
function SearchResult() {
  const searchResult = useSearchUserStore((state) => state.searchResult);
  const setSearchResult = useSearchUserStore((state) => state.setSearchResult);
  const navigate = useNavigate();
  const [itemsToShow, setItemsToShow] = React.useState(null);
  const incPageNo = useSearchUserStore((state) => state.incPageNo);
  const input = useSearchUserStore((state) => state.input);
  const query = useSearchUserStore((state) => state.query);
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
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <button
        onClick={() => navigate("/")}
        className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200"
      >
        Back to home
      </button>
      {itemsToShow ? (
        itemsToShow.map((user) => {
          return (
            <div
              key={user.id}
              className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md dark:bg-gray-800"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />

              <h2 className="text-xl font-semibold text-center text-gray-800 dark:text-white">
                {user.login}
              </h2>

              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-blue-600 hover:underline mt-2 dark:text-blue-400"
              >
                View GitHub Profile
              </a>
            </div>
          );
        })
      ) : (
        <p>No search results found.</p>
      )}
      {/* Load More Button */}
      {noItems > itemsToShow?.length && (
        <div className="text-center mt-4 mb-4">
          <button
            onClick={handleInc}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 dark:bg-blue-400"
          >
            Load More
          </button>
        </div>
      )}
      {error && <p className="text-red-500 text-center">{error}</p>}
    </div>
  );
}
export default SearchResult;
