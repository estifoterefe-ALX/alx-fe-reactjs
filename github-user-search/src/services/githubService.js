import api from "./api";
import axios from "axios";
import useSearchUserStore from "./searchuser";

export const fetchUserData = async (userName, query) => {
  const { pageperPage } = useSearchUserStore.getState();
  try {
    const q = [userName].filter(Boolean).join(" ");

    const response = await api.get("https://api.github.com/search/users?q", {
      params: {
        userName: userName,
        per_page: pageperPage,
        minRepos: 10,
        location: "lagos",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error searching GitHub users:", error);
    return null;
  }
};

