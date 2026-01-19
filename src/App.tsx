import { useEffect } from "react";
import AppRouter from "./app/router/AppRouter";
import { useAppDispatch } from "./hooks/redux";
import { fetchProfile } from "./features/auth/authThunk";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);
  return <AppRouter />;
}

export default App;
