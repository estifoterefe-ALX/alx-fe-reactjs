import React from "react";
import useSearchUserStore from "../services/searchuser";
function SearchResult() {
  const searchResult = useSearchUserStore((state) => state.searchResult);
  return (
    <>
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
        <p>No search results found.</p>
      )}
    </>
  );
}
export default SearchResult;
