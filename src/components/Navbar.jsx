import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Button,
  Box,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const signupData = JSON.parse(localStorage.getItem("SignUpData"));

  const handleSignOut = () => {
    const confirmLogout = window.confirm("Do you really want to sign out?");
    if (confirmLogout) {
      localStorage.removeItem("SignUpData");
      localStorage.removeItem("loginData");
      alert("Signed out successfully!");
      navigate("/signup"); 
    }
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" component="div">
          Admin Dashboard
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        
          <Avatar src={signupData?.name} alt={signupData?.name} />
          {/* User Info */}
          <Box sx={{ display: "flex", flexDirection: "column", color: "#fff" }}>
            <Typography variant="body1">{signupData?.name}</Typography>
            <Typography variant="body2">{signupData?.email}</Typography>
          </Box>

          {/* Sign Out */}
          <Button variant="outlined" color="inherit" onClick={handleSignOut}>
            Sign Out
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
