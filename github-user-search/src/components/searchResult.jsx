import React from "react";
import useSearchUserStore from "../services/searchuser";
import { useNavigate } from "react-router-dom";
function SearchResult() {
  const searchResult = useSearchUserStore((state) => state.searchResult);
  const navigate = useNavigate();
  console.log("Search Result:", searchResult);
  return (
    <>
      <button
        onClick={() => navigate("/")}
        className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200"
      >
        Back to home
      </button>
      {searchResult ? (
        searchResult.map((user) => {
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
        <p>No search results found.</p>
      )}
    </>
  );
}
export default SearchResult;
