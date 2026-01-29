import api from "./api";
import axios from "axios";

export const fetchUserData = async (userName, query) => {
  try {
    const q = [userName, query].filter(Boolean).join(" ");

    const response = await api.get("/search/users", {
      params: {
        q,
        per_page: 10,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error searching GitHub users:", error);
    return null;
  }
};
