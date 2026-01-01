import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
        alert('Login submitted!');
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
            }}
        >
            <Typography variant="h4" mb={2}>Login</Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '300px' }}>
                <TextField label="Email" variant="outlined" required />
                <TextField label="Password" type="password" variant="outlined" required />
                <Button type="submit" variant="contained">Login</Button>
            </Box>
        </Box>
    );
};

export default Login;
