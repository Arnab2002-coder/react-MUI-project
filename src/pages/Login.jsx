import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Link
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError((prevErrors)=>({
      ...prevErrors,
      [name]: "",
    }));
  };

  //Validating input values
    const validate = () => {
      const newError = {};

      if (!formData.email.trim()) {
        newError.email = "Email is required";
      } else if (!formData.email.includes("@") || !formData.email.includes(".")){
        newError.email = "Email is invalid";
      }

      if (!formData.password.trim()){
        newError.password = "Password is required";
      }else if(formData.password.length < 6) {
        newError.password = "Password must be at least 6 characters"
      }
      setError(newError);

      console.log("Validation errors:", newError);
      
      return Object.keys(newError).length === 0;
      
    }

    const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Login successful!");
      navigate("/admin/list");
    } else {
      alert("Please fix the errors before submitting.");
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f9f9f9"
      }}
    >
      <Paper elevation={3} sx={{ p: 4, width: 350 }}>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            required
            margin="normal"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!error.email}
            helperText={error.email}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            required
            margin="normal"
            name="password"
             value={formData.password}
            onChange={handleChange}
            error={!!error.password}
            helperText={error.password}
          />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Login
          </Button>
        </form>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Don't have an account?{" "}
          <Link href="/signup" underline="hover">
            Sign up
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;
