import React from "react";
import {
    Box,
    Container,
    Typography,
    TextField,
    Button,
    Grid,
    Paper,
} from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";

const Contactpg = () => {
    return (
        <>
            <Header></Header>
            <Box
                sx={{
                    minHeight: "100vh",
                    background: "linear-gradient(180deg, #0f0f0f, #1c1c1c)",
                    display: "flex",
                    alignItems: "center",
                    py: 6,
                }}
            >
                <Container maxWidth="md">
                    <Paper
                        elevation={6}
                        sx={{
                            backgroundColor: "#1f1f1f",
                            p: { xs: 3, md: 5 },
                            color: "#fff",
                        }}
                    >
                        <Typography variant="h4" fontWeight="bold" gutterBottom>
                            Contact Us by Email
                        </Typography>

                        <Typography variant="body1" sx={{ mb: 4, color: "#cfcfcf" }}>
                            Join us for an exhilarating live auction experience where art meets
                            excitement.
                        </Typography>

                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="First Name *"
                                    placeholder="Mr. Harry"
                                    variant="outlined"
                                    InputLabelProps={{ style: { color: "#bdbdbd" } }}
                                    InputProps={{
                                        style: { color: "#fff" },
                                    }}
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            backgroundColor: "#2a2a2a",
                                        },
                                    }}
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="Email Address *"
                                    placeholder="info@example.com"
                                    variant="outlined"
                                    InputLabelProps={{ style: { color: "#bdbdbd" } }}
                                    InputProps={{
                                        style: { color: "#fff" },
                                    }}
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            backgroundColor: "#2a2a2a",
                                        },
                                    }}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Message"
                                    placeholder="Write your message"
                                    multiline
                                    rows={6}
                                    variant="outlined"
                                    InputLabelProps={{ style: { color: "#bdbdbd" } }}
                                    InputProps={{
                                        style: { color: "#fff" },
                                    }}
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            backgroundColor: "#2a2a2a",
                                        },
                                    }}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "#ffffff",
                                        color: "#000",
                                        px: 4,
                                        py: 1.2,
                                        fontWeight: "bold",
                                        "&:hover": {
                                            backgroundColor: "#e0e0e0",
                                        },
                                    }}
                                >
                                    Submit Here
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Container>
            </Box>
            <Footer></Footer>
        </>
    );
};

export default Contactpg;
