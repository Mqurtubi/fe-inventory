import { http } from "../../services/http";
import type { DataRequest } from "./type";

const register = async (data: DataRequest) => {
  const userRegister = await http.post("/auth/register", data);
  return userRegister;
};

export { register };
