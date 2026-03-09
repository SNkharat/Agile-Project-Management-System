import { Paper } from "@mui/material";

export default function GlassCard({ children }) {
  return (
    <Paper
      elevation={6}
      sx={{
        p: 4,
        width: 400,
        borderRadius: 3,
        backdropFilter: "blur(12px)",
        background: "rgba(255,255,255,0.75)",
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      }}
    >
      {children}
    </Paper>
  );
}