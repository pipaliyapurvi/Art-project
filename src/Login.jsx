import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Login submitted!');
        setEmail('');
        setPassword('');
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                backgroundColor: '#000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',


            }}
        >
            <Paper elevation={6} sx={{ p: 4, width: 350, borderRadius: 3, backgroundColor: '#fff', color: '#fff' }}>
                <Typography variant="h4" textAlign="center" mb={3} sx={{ color: '#000', fontWeight: 'bold' }}>
                    Login
                </Typography>

                <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <TextField
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <Button type="submit" variant="contained">
                        Login
                    </Button>
                    <Button
                        component={RouterLink}
                        to="/"
                        fullWidth
                        variant="outlined"

                    >
                        Back to Website
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default Login;
