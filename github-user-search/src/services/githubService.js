import api from "./api";
import axios from "axios";
import useSearchUserStore from "./searchuser";

export const fetchUserData = async (userName, query) => {
  const { pageperPage } = useSearchUserStore.getState();
  try {


    const response = await api.get("/search/users", {
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
