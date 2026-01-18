import type { ElementType } from "react";

type StatCardType = "totalProduct" | "totalStocks" | "todaySales" | "lowStock";

interface StatCardProps {
  label: string;
  amount: number;
  type: StatCardType;
  Icon: ElementType;
  trend?: number;
  trendLabel?: string;
}

type StatCardConfig = {
  color: "primary" | "success" | "secondary" | "error";
  bg: string;
};

interface SummaryResponse {
  totalProducts: number;
  totalStock: number;
  todaySales: number;
  yesterdaySales: number;
  todayGrowth: number;
  lowStockCount: number;
  weeklySales: weeklySale[];
  lowStockItems: lowStockItem[];
}

interface weeklySale {
  day: day;
  total: number;
}

interface lowStockItem {
  name: string;
  current: number;
  min: number;
}
interface StatsOverviewProps {
  data: SummaryResponse;
}

type day = "Sun" | "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat";
export type {
  StatCardProps,
  StatCardConfig,
  StatCardType,
  SummaryResponse,
  StatsOverviewProps,
};
