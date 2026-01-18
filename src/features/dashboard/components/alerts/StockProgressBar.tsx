import LinearProgress from "@mui/material/LinearProgress";

export default function StockProgressBar({
  current,
  min,
}: {
  current: number;
  min: number;
}) {
  const percentage = Math.min((current / min) * 100, 100);

  return (
    <LinearProgress
      variant="determinate"
      value={percentage}
      sx={{
        height: 6,
        borderRadius: 4,
        backgroundColor: "#f1f5f9",
        "& .MuiLinearProgress-bar": {
          backgroundColor: percentage < 50 ? "#ef4444" : "#f97316",
        },
      }}
    />
  );
}
