import { Box, Typography, Button } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
export default function ProductHeader() {
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
      >
        Create Product
      </Button>
    </Box>
  );
}
