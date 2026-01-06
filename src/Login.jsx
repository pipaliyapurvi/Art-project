import React from 'react';
import { Box, Typography, TextField, Button, Paper } from '@mui/material';

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Login submitted!');
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
            <Paper
                elevation={6}
                sx={{
                    p: 4,
                    width: 350,
                    borderRadius: 3,
                    backgroundColor: '#111',
                }}
            >
                <Typography
                    variant="h4"
                    textAlign="center"
                    mb={3}
                    sx={{ color: '#fff', fontWeight: 'bold' }}
                >
                    Login
                </Typography>

                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                >
                    <TextField
                        label="Email"
                        variant="outlined"
                        required
                        InputLabelProps={{ style: { color: '#aaa' } }}
                        InputProps={{ style: { color: '#fff' } }}
                        sx={{
                            '& .MuiOutlinedInput-root fieldset': {
                                borderColor: '#444',
                            },
                            '& .MuiOutlinedInput-root:hover fieldset': {
                                borderColor: '#90caf9',
                            },
                        }}
                    />

                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        required
                        InputLabelProps={{ style: { color: '#aaa' } }}
                        InputProps={{ style: { color: '#fff' } }}
                        sx={{
                            '& .MuiOutlinedInput-root fieldset': {
                                borderColor: '#444',
                            },
                            '& .MuiOutlinedInput-root:hover fieldset': {
                                borderColor: '#90caf9',
                            },
                        }}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            mt: 1,
                            py: 1.2,
                            borderRadius: '25px',
                            backgroundColor: '#90caf9',
                            fontWeight: 'bold',
                            '&:hover': { backgroundColor: '#64b5f6' },
                        }}
                    >
                        Login
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default Login;
