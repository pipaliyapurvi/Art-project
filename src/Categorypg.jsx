import React from "react";
import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    Stack,
} from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";

const Categorypg = () => {
    return (
        <>
            <Header></Header>
            <Box
                sx={{
                    backgroundColor: "#1a1a1a",
                    color: "#fff",
                    py: { xs: 8, md: 14 },
                }}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={6} alignItems="center">
                        {/* LEFT CONTENT */}
                        <Grid item xs={12} md={6}>
                            <Stack spacing={3}>
                                <Box
                                    sx={{
                                        display: "inline-block",
                                        border: "1px solid #555",
                                        borderRadius: "20px",
                                        px: 2.5,
                                        py: 0.6,
                                        width: "fit-content",
                                    }}
                                >
                                    <Typography variant="body2">
                                        Explore Exclusive Collections
                                    </Typography>
                                </Box>

                                <Typography
                                    variant="h2"
                                    sx={{
                                        fontWeight: 700,
                                        fontFamily: "serif",
                                        lineHeight: 1.2,
                                    }}
                                >
                                    Discover, Bid, and Collect <br />
                                    Art from Around the <br />
                                    World
                                </Typography>

                                <Typography
                                    variant="body1"
                                    sx={{ color: "#cfcfcf", maxWidth: 480 }}
                                >
                                    Unlock a world of imagination with our curated collection of
                                    original artworks.
                                </Typography>

                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "#fff",
                                        color: "#000",
                                        width: "fit-content",
                                        px: 4,
                                        py: 1.4,
                                        borderRadius: 1,
                                        fontWeight: 600,
                                        "&:hover": {
                                            backgroundColor: "#e6e6e6",
                                        },
                                    }}
                                >
                                    Explore Auctions
                                </Button>
                            </Stack>
                        </Grid>

                        {/* RIGHT IMAGES */}
                        <Grid item xs={12} md={6}>
                            <Grid container spacing={2}>
                                <Grid item xs={7}>
                                    <Box
                                        component="img"
                                        src="https://i.imgur.com/5ZQ0Z5S.jpg"
                                        alt="art-1"
                                        sx={{
                                            width: "100%",
                                            borderRadius: 1,
                                            height: "100%",
                                            objectFit: "cover",
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={5}>
                                    <Stack spacing={2}>
                                        <Box
                                            component="img"
                                            src="https://i.imgur.com/IfkqZzU.jpg"
                                            alt="art-2"
                                            sx={{
                                                width: "100%",
                                                borderRadius: 1,
                                                height: 220,
                                                objectFit: "cover",
                                            }}
                                        />

                                        <Box
                                            component="img"
                                            src="https://i.imgur.com/4AiXzf8.jpg"
                                            alt="art-3"
                                            sx={{
                                                width: "100%",
                                                borderRadius: 1,
                                                height: 220,
                                                objectFit: "cover",
                                            }}
                                        />
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Footer></Footer>
        </>

    );
};

export default Categorypg;

