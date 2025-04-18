import { useState } from 'react';
import axios from 'axios';
import { Button, FormControl, InputLabel, OutlinedInput, Typography, Box } from '@mui/material';
import { useCart } from "../CartContext";
import { useNavigate } from 'react-router-dom';
import qs from "qs";

export default function AuthLogin() {
    const [form, setForm] = useState({ email: '', password: '' });
    const [message, setMessage] = useState('');
    const { syncCartToDatabase } = useCart();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        try {
            console.log("Login form values:", form);

            const res = await axios.post(
                'http://localhost:3010/user/loginuser',
                qs.stringify(form), // convert to urlencoded string
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    withCredentials: true,
                }
            );

            const { token, user } = res.data;
            setMessage(res.data.message || "Login successful! 🎉");

            if (token && user) {
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));

                // ✅ Sync local cart to backend
                await syncCartToDatabase(user, token);

                navigate('/'); // Optional: redirect after login
            }
        } catch (err) {
            setMessage(err.response?.data?.error || "Login failed.");
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                maxWidth: 400,
                margin: "200px auto",
                padding: 4,
                borderRadius: 2,
                boxShadow: 3,
                backgroundColor: "#f9f9f9",
            }}
        >
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                Login
            </Typography>
            <FormControl fullWidth margin="normal">
                <InputLabel htmlFor="login-email">Email</InputLabel>
                <OutlinedInput
                    id="login-email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    label="Email"
                    sx={{ borderRadius: 2 }}
                />
            </FormControl>
            <FormControl fullWidth margin="normal">
                <InputLabel htmlFor="login-password">Password</InputLabel>
                <OutlinedInput
                    id="login-password"
                    name="password"
                    type="password"
                    value={form.password}
                    onChange={handleChange}
                    label="Password"
                    sx={{ borderRadius: 2 }}
                />
            </FormControl>
            <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mt: 2, backgroundColor: "#007bff", color: "white", fontWeight: "bold", borderRadius: 2 }}
            >
                Login
            </Button>
            <Button
                variant="outlined"
                fullWidth
                sx={{ mt: 2, borderRadius: 2 }}
                onClick={() => navigate("/register")}
            >
                Don't have an account? Register
            </Button>
            {message && (
                <Typography
                    sx={{
                        mt: 2,
                        fontWeight: "bold",
                        color: message.includes("successful") ? "green" : "red",
                        textAlign: "center",
                    }}
                >
                    {message}
                </Typography>
            )}
        </Box>
    );

}
