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
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold text-slate-800">
            Welcome Back 👋
          </h1>
          <p className="text-sm text-slate-500">
            Sign in to your inventory dashboard
          </p>
        </div>

        <form onSubmit={handlerSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-sm text-slate-600">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={data.email}
              onChange={handlerChange}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm text-slate-600">Password</label>
            <input
              type="password"
              name="passwordHash"
              placeholder="••••••••"
              value={data.passwordHash}
              onChange={handlerChange}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
          >
            Login
          </button>
        </form>

        <p className="text-xs text-center text-slate-400">
          Inventory Management System
        </p>
      </div>
    </div>
  );
}
