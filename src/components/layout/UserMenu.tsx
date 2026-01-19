import { useState } from "react";
import {
  Avatar,
  Box,
  Chip,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface UserMenuProps {
  name: string;
  role: "ADMIN" | "STAFF" | "VIEWER";
  onLogout: () => void;
}

export default function UserMenu({ name, role, onLogout }: UserMenuProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        onClick={handleOpen}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          cursor: "pointer",
        }}
      >
        <Avatar sx={{ width: 36, height: 36 }}>{name.charAt(0)}</Avatar>

        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Typography fontSize={14} fontWeight={500}>
            {name}
          </Typography>
          <Chip
            label={role}
            size="small"
            color={role === "ADMIN" ? "success" : "default"}
            sx={{ height: 18, fontSize: 11 }}
          />
        </Box>

        <IconButton size="small">
          <KeyboardArrowDownIcon />
        </IconButton>
      </Box>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            onLogout();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
