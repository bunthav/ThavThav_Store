import { useState } from 'react';
import axios from 'axios';
import { Button, FormControl, InputLabel, OutlinedInput, Typography, Box } from '@mui/material';
import { useCart } from "../CartContext";
import { useNavigate } from 'react-router-dom';

export default function AuthRegister() {
    const [form, setForm] = useState({ name: '', email: '', password: '' });
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
            const res = await axios.post(
                'http://localhost:3010/user/registeruser',
                form,
                { withCredentials: true }
            );

            const { token, user } = res.data;
            setMessage(res.data.message || "Registration successful! 🎉");

            if (token && user) {
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));

                // ✅ Move local cart to database after successful registration
                await syncCartToDatabase(user, token);
            }
        } catch (err) {
            setMessage(err.response?.data?.error || "Registration failed.");
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: 400,
            margin: "200px auto",
            padding: 4,
            borderRadius: 2,
            boxShadow: 3,
            backgroundColor: "#f9f9f9",
        }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>Create an Account</Typography>
            <FormControl fullWidth margin="normal">
                <InputLabel htmlFor="register-name">Username</InputLabel>
                <OutlinedInput id="register-name" name="name" value={form.name} onChange={handleChange} label="Username" />
            </FormControl>
            <FormControl fullWidth margin="normal">
                <InputLabel htmlFor="register-email">Email</InputLabel>
                <OutlinedInput id="register-email" name="email" value={form.email} onChange={handleChange} label="Email" />
            </FormControl>
            <FormControl fullWidth margin="normal">
                <InputLabel htmlFor="register-password">Password</InputLabel>
                <OutlinedInput id="register-password" name="password" type="password" value={form.password} onChange={handleChange} label="Password" />
            </FormControl>
            <Button type="submit" variant="contained" fullWidth sx={{ mt: 2, backgroundColor: "#007bff", color: "white", fontWeight: "bold" }}>Register</Button>
            <Button variant="outlined" fullWidth sx={{ mt: 2 }} onClick={() => navigate("/login")}>Already have an account? Login</Button>
            {message && <Typography sx={{ mt: 2, fontWeight: "bold", color: message.includes("successful") ? "green" : "red" }}>{message}</Typography>}
        </Box>
    );
}
