import React from "react";
import { Box, Typography, List, ListItemButton, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const refresh = localStorage.getItem("refresh_token");

    await API.post("logout/", { refresh });

    localStorage.clear();
    navigate("/");
  };

  return (
    <Box display="flex">

      {/* Sidebar */}
      <Box
        sx={{
          width: 240,
          height: "100vh",
          backgroundColor: "#1a1a2e",
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

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          p: 4,
          backgroundColor: "#f4f7fb",
          minHeight: "100vh"
        }}
      >
        <Typography variant="h4">
          Welcome to Dashboard
        </Typography>
      </Box>

    </Box>
  );
}

export default Dashboard;