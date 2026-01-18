import { Box, Typography } from "@mui/material";
export default function DashboardHeader() {
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
          Dashboard Overview
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Monitor your inventory and sales performance
        </Typography>
      </Box>
    </Box>
  );
}
