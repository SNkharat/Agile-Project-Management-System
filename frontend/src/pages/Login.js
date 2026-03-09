import React, { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import GlassCard from "../components/GlassCard";
import PageLayout from "../components/PageLayout";

import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Link
} from "@mui/material";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("login/", {
        email,
        password,
      });

      localStorage.setItem("access_token", res.data.access);
      localStorage.setItem("refresh_token", res.data.refresh);

      navigate("/dashboard");
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <PageLayout>
      <Container maxWidth="xs">
        <GlassCard>
          <Typography variant="h4" align="center" mb={1}>
            Sign in
          </Typography>

          <Typography
            variant="body2"
            align="center"
            color="text.secondary"
            mb={3}
          >
            Sign in with your email
          </Typography>

          <form onSubmit={handleLogin}>

            <TextField
              fullWidth
              label="Email"
              margin="normal"
              sx={{
                "& .MuiOutlinedInput-root": {
                  height: 48,
                  borderRadius: 3
                }
              }}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              margin="normal"
              sx={{
                "& .MuiOutlinedInput-root": {
                  height: 48,
                  borderRadius: 3
                }
              }}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Box display="flex" justifyContent="flex-end" mt={1}>
              <Link component="button" variant="body2">
                Forgot password?
              </Link>
            </Box>

            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              sx={{
                mt: 3,
                height: 48,
                borderRadius: 3
              }}
            >
              Sign In
            </Button>

          </form>

        </GlassCard>

      </Container>
    </PageLayout>
  );
}

export default Login;