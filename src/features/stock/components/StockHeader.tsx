import { Box, Typography } from "@mui/material";
export default function StockHeader() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography variant="h4" fontWeight={600}>
          Stock Management
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Track and manage inventory movements
        </Typography>
      </Box>
    </Box>
  );
}
