import api from "./api";
import axios from "axios";

export const fetchUserData = async (userName, query) => {
  try {
    const response = await api.get("/search/users", {
      params: {
        q: `${userName}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log("Error searching GitHub users:", error);
    return null;
  }
};
