import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

interface WeeklySalesChartProps {
  data: {
    day: string;
    total: number;
  }[];
}

export default function WeeklySalesChart({ data }: WeeklySalesChartProps) {
  if (!data?.length) return null;

  return (
    <div className="h-120 w-full bg-white pb-20 pt-5 px-10 space-y-5 border border-slate-300 rounded-2xl ">
      <div>
        <p className="text-xl">Sales Overview</p>
        <p className="text-lg text-slate-500">Daily sales for this week</p>
      </div>
      <ResponsiveContainer width="90%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 20, bottom: 5, left: 0 }}
        >
          <CartesianGrid strokeDasharray="5 5" />

          <XAxis dataKey="day" />
          <YAxis />

          <Tooltip formatter={(value: number) => value.toLocaleString()} />

          <Legend />

          <Line
            type="monotone"
            dataKey="total"
            stroke="#7c3aed"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
            name="Sales"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
