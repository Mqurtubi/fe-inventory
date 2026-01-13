import { useEffect } from "react";
import AppRouter from "./app/router/AppRouter";
import { useAppDispatch } from "./hooks/redux";
import { me } from "./features/auth/api";
import { setUser, setLoading, clearUser } from "./features/auth/authSlice";
import { useNavigate } from "react-router-dom";

function App() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUser = async () => {
      dispatch(setLoading());
      try {
        const userResponse = await me();
        dispatch(setUser(userResponse.data.data));
      } catch (error) {
        console.log(error);
        dispatch(clearUser());
      }
    };
    fetchUser();
  }, [dispatch, navigate]);
  return <AppRouter />;
}

export default App;
