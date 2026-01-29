import api from "./api";
import axios from "axios";

export const fetchUserData = async (userName) => {
  try {
    const response = await api.get(`https://api.github.com/users/${userName}`);
    return response.data;
  } catch (error) {
    console.log("Error searching GitHub users:", error);
    return null;
  }
  
};
