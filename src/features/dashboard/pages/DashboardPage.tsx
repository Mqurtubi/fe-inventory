import DashboardHeader from "../components/DashboardHeader";
import StatsOverview from "../components/stats/StatsOverview";
import WeeklySalesChart from "../components/charts/WeeklSalesChart";
import useDashboard from "../hooks/useDashboard";
import LowStockAlerts from "../components/alerts/LowStockAlerts";
import { useEffect } from "react";
export default function DashboardPage() {
  const { data, loading } = useDashboard();
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="space-y-5 mx-5 h-screen " >
      <DashboardHeader />
      {loading ? (
        <p>loading</p>
      ) : (
        <div className="grid gap-5">
          <StatsOverview data={data} />
          <div className="grid grid-cols-6 gap-5">
            <WeeklySalesChart data={data?.weeklySales} />
            <LowStockAlerts data={data?.lowStockItems} />
          </div>
        </div>
      )}
    </div>
  );
}
