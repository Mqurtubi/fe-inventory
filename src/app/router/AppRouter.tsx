import { Routes, Route } from "react-router-dom";
import LoginPage from "../../features/auth/pages/LoginPage";
import RegisterPage from "../../features/auth/pages/RegisterPage";
import ProductPage from "../../features/product/pages/ProductPage";
import { ProtectedRoute } from "./ProtectedRouter";
import StockPage from "../../features/stock/pages/StockPage";
import SalesPage from "../../features/sales/pages/SalesPage";
import DashboardPage from "../../features/dashboard/pages/DashboardPage";
import DashboardLayout from "../../components/layout/DashboardLayout";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route
        path="/"
        element={
          <ProtectedRoute roles={["ADMIN", "STAFF", "VIEWER"]}>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route
          path="dashboard"
          element={
            <ProtectedRoute roles={["ADMIN", "STAFF", "VIEWER"]}>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="product"
          element={
            <ProtectedRoute roles={["ADMIN"]}>
              <ProductPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="stock"
          element={
            <ProtectedRoute roles={["ADMIN", "STAFF"]}>
              <StockPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="sale"
          element={
            <ProtectedRoute roles={["ADMIN", "STAFF", "VIEWER"]}>
              <SalesPage />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
}
