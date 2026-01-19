import { useState } from "react";
import { useAppDispatch } from "../../../hooks/redux";
import { useNavigate } from "react-router-dom";
import { loginThunk } from "../loginThunk";

export default function LoginPage() {
  const [data, setData] = useState({
    email: "",
    passwordHash: "",
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const handlerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await dispatch(loginThunk(data));
    if (loginThunk.fulfilled.match(result)) {
      navigate("/dashboard", { replace: true });
    }
  };
  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={data.email}
          onChange={handlerChange}
        />
        <input
          type="password"
          name="passwordHash"
          placeholder="password"
          value={data.passwordHash}
          onChange={handlerChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
