import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
type TrendIndicatorProps = {
  label: string;
  value: number;
};
export default function TrendIndicator({ label, value }: TrendIndicatorProps) {
  const isUp = value >= 0;
  return (
    <p
      className={`flex items-center gap-1 ${isUp ? "text-green-500" : "text-red-500"} text-sm`}
    >
      {isUp ? (
        <ArrowUpwardIcon fontSize="small" />
      ) : (
        <ArrowDownwardIcon fontSize="small" />
      )}
      <span>
        {Math.abs(value)}% {label}
      </span>
    </p>
  );
}
