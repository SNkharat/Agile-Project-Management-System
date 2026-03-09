import { Box, List, ListItemButton, ListItemText, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    navigate("/");
  };

  return (
    <Box
      sx={{
        width: 240,
        height: "100vh",
        background: "#1a1a2e",
        color: "white",
        p: 3
      }}
    >
      <Typography variant="h6" mb={4}>
        Admin Panel
      </Typography>

      <List>

        <ListItemButton onClick={() => navigate("/dashboard")}>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton onClick={() => navigate("/users")}>
          <ListItemText primary="Users" />
        </ListItemButton>

        <ListItemButton onClick={handleLogout}>
          <ListItemText primary="Logout" />
        </ListItemButton>

      </List>
    </Box>
  );
}