import { Box, Typography, Button } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import type { ProductHeaderProps } from "../type";
import { useAppSelector } from "../../../hooks/redux";
export default function ProductHeader({ handleClick }: ProductHeaderProps) {
  const { user } = useAppSelector((s) => s.auth);
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
          Products
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Manage your product
        </Typography>
      </Box>
      {user?.role === "ADMIN" && (
        <Button
          variant="contained"
          size="medium"
          sx={{ whiteSpace: "nowrap" }}
          startIcon={<AddRoundedIcon />}
          onClick={handleClick}
        >
          Create Product
        </Button>
      )}
    </Box>
  );
}
