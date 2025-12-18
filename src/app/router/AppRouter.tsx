import { Routes, Route } from "react-router-dom";
import LoginPage from "../../features/auth/pages/LoginPage";
import RegisterPage from "../../features/auth/pages/RegisterPage";

export default function AppRouter(){
    return(
        <Routes>
            <Route path="/Login" element={<LoginPage/>}/>
            <Route path="/regiter" element={<RegisterPage/>}/>
        </Routes>
    )
}