import { Box, Typography, Button } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import type { ProductHeaderProps } from "../type";
export default function ProductHeader({handleClick}:ProductHeaderProps) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography variant="h6">Products</Typography>
        <Typography variant="body2" color="text.secondary">
          Manage your product
        </Typography>
      </Box>

      <Button
        variant="contained"
        size="medium"
        sx={{ whiteSpace: "nowrap" }}
        startIcon={<AddRoundedIcon />}
        onClick={handleClick}
      >
        Create Product
      </Button>
    </Box>
  );
}
