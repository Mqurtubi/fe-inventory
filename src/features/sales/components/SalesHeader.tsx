import { Box, Typography, Button } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import type { SalesHeaderProps } from "../types";
export default function SalesHeader({ handleClick }: SalesHeaderProps) {
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
          Sales
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Manage sales transactions
        </Typography>
      </Box>

      <Button
        variant="contained"
        size="medium"
        sx={{ whiteSpace: "nowrap" }}
        startIcon={<AddRoundedIcon />}
        onClick={handleClick}
      >
        Create Sale
      </Button>
    </Box>
  );
}
