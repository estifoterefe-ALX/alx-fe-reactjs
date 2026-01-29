import api from "./api";
import axios from "axios";
import useSearchUserStore from "./searchuser";

export const fetchUserData = async (userName, query) => {
  const { pageperPage } = useSearchUserStore.getState();
  try {
    const q = [userName, query].filter(Boolean).join(" ");

    const response = await api.get("/search/users", {
      params: {
        q,
        per_page: pageperPage,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error searching GitHub users:", error);
    return null;
  }
};
