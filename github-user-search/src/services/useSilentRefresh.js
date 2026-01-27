// hooks/useSilentAuth.js
import { useLayoutEffect } from "react";
import api from "../api";
import { useAuthStore } from "../services/authStore";

export const useSilentAuth = () => {
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);

  useLayoutEffect(() => {
    const refresh = async () => {
      try {
        const res = await api.post(
          "/auth/refresh",
          {},
          { withCredentials: true },
        );
        const { accessToken, user, permissions } = res.data;
        login(user, accessToken, permissions);
      } catch {
        logout();
      }
    };

    refresh();
  }, [login, logout]);
};
