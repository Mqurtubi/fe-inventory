import { useState } from "react";
import { register } from "../api";

export default function RegisterPage() {
  const [data, setData] = useState({
    name: "",
    email: "",
    passwordHash: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await register(data);
      console.log("berhasil registrasi");
      setData({
        name: "",
        email: "",
        passwordHash: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="nama"
        name="name"
        value={data.name}
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="email"
        name="email"
        value={data.email}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="password"
        name="passwordHash"
        value={data.passwordHash}
        onChange={handleChange}
      />
      <button type="submit">register</button>
    </form>
  );
}
