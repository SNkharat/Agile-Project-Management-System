import { Box } from "@mui/material";
import Sidebar from "./Sidebar";

export default function DashboardLayout({ children }) {

  return (
    <Box display="flex">

      <Sidebar />

      <Box
        sx={{
          flexGrow: 1,
          p: 4,
          background: "#f4f7fb",
          minHeight: "100vh"
        }}
      >
        {children}
      </Box>

    </Box>
  );
}