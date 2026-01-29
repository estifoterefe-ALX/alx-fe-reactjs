import api from "./api";
import useSearchUserStore from "./searchuser";

export const fetchUserData = async (userName) => {
  const { pageperPage } = useSearchUserStore.getState();

  // Build proper GitHub search query
  const query = `${userName}+repos:>10+location:lagos`;

  try {
    const response = await api.get("/search/users", {
      params: {
        q: query,
        per_page: pageperPage,
      },
    });

    return response.data;
  } catch (error) {
    console.error(
      "Error searching GitHub users:",
      error.response?.status,
      error.response?.data,
    );
    return null;
  }
};
