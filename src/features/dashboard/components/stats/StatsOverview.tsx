import StatCard from "./StatCard";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import type { StatsOverviewProps } from "../../type";
export default function StatsOverview({ data }: StatsOverviewProps) {
  if (!data) return <p>loading</p>;
  return (
    <div className="grid grid-cols-4 gap-5">
      <StatCard
        label="Total Products"
        amount={data.totalProducts}
        type="totalProduct"
        Icon={ViewInArOutlinedIcon}
      />
      <StatCard
        label="Total Stock"
        amount={data.totalStock}
        type="totalStocks"
        Icon={InventoryOutlinedIcon}
      />
      <StatCard
        label="Today's Sale"
        amount={data.todaySales}
        type="todaySales"
        Icon={TrendingUpIcon}
        trend={data.todayGrowth}
        trendLabel={"from last yesterday"}
      />
      <StatCard
        label="Low Stock"
        amount={data.lowStockCount}
        type="lowStock"
        Icon={WarningAmberRoundedIcon}
      />
    </div>
  );
}
