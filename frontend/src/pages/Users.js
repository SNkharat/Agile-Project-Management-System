import { useEffect, useState } from "react";
import API from "../services/api";
import DashboardLayout from "../components/DashboardLayout";
import { Typography, Box } from "@mui/material";

export default function Users() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {

    const res = await API.get("users/");
    setUsers(res.data);

  };

  return (
    <DashboardLayout>

      <Typography variant="h4" mb={3}>
        Users
      </Typography>

      {users.map((user) => (
        <Box key={user.id}>
          {user.email}
        </Box>
      ))}

    </DashboardLayout>
  );
}