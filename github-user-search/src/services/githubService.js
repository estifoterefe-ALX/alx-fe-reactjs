import api from "./api";

export const searchGitHubUsers = async (userName) => {
  try {
    const response = await api.get(`/users/${userName}`);
    return response.data;
  } catch (error) {
    console.log("Error searching GitHub users:", error);
    return null;
  }
};
