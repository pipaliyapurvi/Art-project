import React from "react";
import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    Stack,
    Paper,
} from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import CheckIcon from "@mui/icons-material/Check";

const Categorypg = () => {
    return (
        <>
            <Header />

            <Box
                sx={{
                    backgroundColor: "#1a1a1a",
                    color: "#fff",
                    py: { xs: 6, md: 12 },
                }}
            >
                <Container maxWidth="lg">
                    <Grid
                        container
                        spacing={6}
                        alignItems="center"
                    >
                        {/* LEFT SIDE TEXT */}
                        <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
                            <Stack spacing={3}>
                                <Box
                                    sx={{
                                        border: "1px solid #555",
                                        borderRadius: "20px",
                                        px: 3,
                                        py: 0.7,
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

                        {/* RIGHT SIDE IMAGE */}

                        <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
                            <Box
                                component="img"
                                src="https://demo.egenslab.com/html/artmart/preview/assets/img/home2/home2-banner-img.png"
                                alt="art"
                                sx={{
                                    width: "100%",
                                    maxHeight: 418,
                                    objectFit: "contain",
                                }}
                            />
                        </Grid>

                    </Grid>

                </Container>
            </Box >
            <Box
                sx={{
                    backgroundColor: "#1b1b1b",
                    color: "#fff",
                    py: { xs: 6, md: 10 },
                }}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={6} alignItems="center">

                        {/* LEFT SIDE IMAGE + STATS */}
                        <Grid item xs={12} md={6}>
                            <Box sx={{ position: "relative" }}>
                                {/* IMAGE */}
                                <Box
                                    component="img"
                                    src="https://demo.egenslab.com/html/artmart/preview/assets/img/home2/home2-about-img.jpg"
                                    alt="art"
                                    sx={{
                                        width: "100%",
                                        borderRadius: 2,
                                    }}
                                />

                                {/* STATS OVERLAY */}
                                <Paper
                                    elevation={0}
                                    sx={{
                                        position: "absolute",
                                        bottom: -40,
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                        backgroundColor: "#111",
                                        borderRadius: 2,
                                        px: 4,
                                        py: 3,
                                        width: "90%",
                                        color: "white"
                                    }}
                                >
                                    <Grid container textAlign="center">
                                        {[
                                            { value: "65k", label: "Customers" },
                                            { value: "1.5k", label: "Collections" },
                                            { value: "800", label: "Auctions" },
                                            { value: "1k", label: "Bidders" },
                                        ].map((item, index) => (
                                            <Grid
                                                item
                                                xs={3}
                                                key={item.label}
                                                sx={{
                                                    borderRight:
                                                        index !== 3 ? "1px solid #222" : "none",
                                                }}
                                            >
                                                <Typography variant="h5" fontWeight={700}>
                                                    {item.value}
                                                </Typography>
                                                <Typography sx={{ color: "#aaa", fontSize: 14 }}>
                                                    {item.label}
                                                </Typography>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Paper>
                            </Box>
                        </Grid>

                        {/* RIGHT SIDE CONTENT */}
                        <Grid item xs={12} md={6}>
                            <Stack spacing={3}>
                                <Typography
                                    variant="h3"
                                    sx={{ fontWeight: 700, fontFamily: "serif" }}
                                >
                                    Discover Our Essence
                                </Typography>

                                <Typography sx={{ color: "#cfcfcf", lineHeight: 1.7 }}>
                                    At Artmart, we are passionate art enthusiasts dedicated to
                                    connecting artists and collectors through dynamic and exciting
                                    auctions. Our platform celebrates the creativity and diversity
                                    of artists from around the world, providing a space where their
                                    works can be appreciated and acquired by
                                </Typography>

                                {/* CHECK LIST */}
                                <Grid container spacing={2}>
                                    {["Integrity", "Accessibility", "Diversity", "Support"].map(
                                        (item) => (
                                            <Grid item xs={6} key={item}>
                                                <Stack direction="row" spacing={1} alignItems="center">
                                                    <CheckIcon sx={{ color: "#1dd75b" }} />
                                                    <Typography>{item}</Typography>
                                                </Stack>
                                            </Grid>
                                        )
                                    )}
                                </Grid>

                                {/* LEARN MORE BUTTON */}
                                <Button
                                    sx={{
                                        width: 120,
                                        height: 120,
                                        borderRadius: "50%",
                                        backgroundColor: "#fff",
                                        color: "#000",
                                        fontWeight: 600,
                                        alignSelf: "flex-start",
                                        "&:hover": {
                                            backgroundColor: "#e6e6e6",
                                        },
                                    }}
                                >
                                    Learn
                                    <br />
                                    More
                                </Button>
                            </Stack>
                        </Grid>

                    </Grid>
                </Container>
            </Box>

            <Footer />
        </>
    );
};

export default Categorypg;
