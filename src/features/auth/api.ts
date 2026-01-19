import { http } from "../../services/http";
import type { DataLogin, DataRegister } from "./type";

const register = async (data: DataRegister) => {
  const userRegister = await http.post("/auth/register", data);
  return userRegister;
};

const login = async (data: DataLogin) => {
  const userLogin = await http.post("/auth/login", data);
  return userLogin;
};

const me = async () => {
  const userProfile = await http.get("/auth/me");
  return userProfile;
};

const logout = async () => {
  const logout = await http.post("/auth/logout");
  return logout;
};
export { register, login, me, logout };
