import React from "react";
import Search from "./Search";
import useSearchUserStore from "../services/searchuser";
function Home() {
  const clearSearchResult = useSearchUserStore(
    (state) => state.clearSearchResult,
  );

  React.useEffect(() => {
    // Clear previous search results when Home component mounts
    clearSearchResult();
  }, [clearSearchResult]);
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center dark:bg-gray-900">
      <Search />
    </div>
  );
}
export default Home;
