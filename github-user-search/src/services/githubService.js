import api from "./api";
import useSearchUserStore from "./searchuser";

export const fetchUserData = async (userName, query) => {
  const { pageperPage } = useSearchUserStore.getState();
  try {
    // Build search query parameters
    const queryParts = [];
    if (userName) {
      queryParts.push(userName);
    }
    if (query) {
      queryParts.push(query);
    }

    // Add minimum repositories filter
    queryParts.push("repos:>=10");

    const q = queryParts.join(" ");

    const response = await api.get("/search/users", {
      params: {
        q: q,
        per_page: pageperPage,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error searching GitHub users:", error);
    return null;
  }
};
