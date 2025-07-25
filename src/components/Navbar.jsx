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

  // Dummy user data
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    avatar: "", // Optional profile image URL
  });

  const handleSignOut = () => {
    const confirmLogout = window.confirm("Do you really want to sign out?");
    if (confirmLogout) {
      setUser(null); // Clear user state (or handle auth logout)
      alert("Signed out successfully!");
      navigate("/login"); // Redirect to login
    }
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" component="div">
          Admin Dashboard
        </Typography>

        {user && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {/* Avatar */}
            {user.avatar ? (
              <Avatar src={user.avatar} alt={user.name} />
            ) : (
              <Avatar>
                <AccountCircleIcon />
              </Avatar>
            )}

            {/* User Info */}
            <Box sx={{ display: "flex", flexDirection: "column", color: "#fff" }}>
              <Typography variant="body1">{user.name}</Typography>
              <Typography variant="body2">{user.email}</Typography>
            </Box>

            {/* Sign Out */}
            <Button variant="outlined" color="inherit" onClick={handleSignOut}>
              Sign Out
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
