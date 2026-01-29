import api from "./api";
import useSearchUserStore from "./searchuser";

export const fetchUserData = async (userName) => {
  const { pageperPage } = useSearchUserStore.getState();

  // Construct GitHub search query correctly
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
      "GitHub API error:",
      error.response?.status,
      error.response?.data
    );
    return null;
  }
};
