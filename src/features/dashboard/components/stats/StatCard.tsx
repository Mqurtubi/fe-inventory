import type { StatCardConfig, StatCardProps, StatCardType } from "../type";
import TrendIndicator from "./TrendIndicator";
const TYPE_CONFIG: Record<StatCardType, StatCardConfig> = {
  totalProduct: {
    color: "primary",
    bg: "rgba(59,130,246,0.12)",
  },
  totalStocks: {
    color: "success",
    bg: "rgba(34,197,94,0.12)",
  },
  todaySales: {
    color: "secondary",
    bg: "rgba(168,85,247,0.12)",
  },
  lowStock: {
    color: "error",
    bg: "rgba(239,68,68,0.12)",
  },
};

export default function StatCard({
  label,
  amount,
  type,
  Icon,
  trend = 0,
  trendLabel = "",
}: StatCardProps) {
  const config = TYPE_CONFIG[type];
  return (
    <div className="bg-white p-8 rounded-2xl border border-slate-300 space-y-2">
      <div className="flex items-center gap-5 justify-between">
        <div className="space-y-2 text-lg ">
          <p className=" text-slate-500">{label}</p>
          <p>{amount}</p>
        </div>
        <div className="">
          <Icon
            sx={{
              fontSize: "55px",
              backgroundColor: config.bg,
              padding: "10px",
              borderRadius: "10px",
            }}
            color={config.color}
          />
        </div>
      </div>
      {trendLabel && <TrendIndicator label={trendLabel} value={trend} />}
    </div>
  );
}
