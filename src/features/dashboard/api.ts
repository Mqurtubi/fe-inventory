import { http } from "../../services/http";

const getSummary = async () => {
  const responseSummary = await http.get("/summary");
  return responseSummary.data;
};

export { getSummary };
