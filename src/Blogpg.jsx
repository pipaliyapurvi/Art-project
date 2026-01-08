import React from "react";
import {
    Box, Container, Typography, Button, Grid, Stack, Card,
    CardContent,
    Avatar,
} from "@mui/material";
import Header from "./Header";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import Footer from "./Footer";


const testimonials = [
    {
        title: "Wonderful Bidding Deal",
        message:
            "I purchased a beautiful painting from this site, and the quality is incredible. The buying process was seamless, and the delivery was prompt. Highly recommend for anyone looking to buy unique art.",
        name: "Mr. Abid",
        role: "Exhibition Manager",
        date: "Jan 20, 2024 · 10:30 PM",
        avatar: "https://i.pravatar.cc/150?img=12"
    },
    {
        title: "Excellent Item for Auctions!",
        message:
            "I purchased a beautiful painting from this site, and the quality is incredible. The buying process was seamless, and the delivery was prompt. Highly recommend for anyone looking to buy unique art.",
        name: "Mrs. Lucas",
        role: "Art Teacher",
        date: "Jul 10, 2024 · 12:25 PM",
        avatar: "https://i.pravatar.cc/150?img=32"
    },
    {
        title: "Amazing Bidding Items!",
        message:
            "I purchased a beautiful painting from this site, and the quality is incredible. The buying process was seamless, and the delivery was prompt. Highly recommend for anyone looking to buy unique art.",
        name: "John Doe",
        role: "Artist",
        date: "Aug 23, 2024 · 12:25 PM",
        avatar: "https://i.pravatar.cc/150?img=56"
    }
];
const Blogpg = () => {
    return (
        <>
            <Header></Header>
            <Box
                sx={{
                    height: "100vh",
                    backgroundImage:
                        "url('	https://demo.egenslab.com/html/artmart/preview/assets/img/home1/home1-banner-bg1.jpg')", // replace with your image
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    color: "#fff",
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        inset: 0,
                        backgroundColor: "rgba(0,0,0,0.45)",
                    },
                }}
            >
                {/* Content */}
                <Container
                    maxWidth="lg"
                    sx={{
                        position: "relative",
                        zIndex: 1,
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 700,
                            mb: 2,
                            maxWidth: 700,
                            fontFamily: "serif",
                        }}
                    >
                        Art That Speaks To <br /> Your Soul
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            maxWidth: 520,
                            mb: 4,
                            color: "#e0e0e0",
                            lineHeight: 1.7,
                        }}
                    >
                        Unlock a world of imagination with our curated collection of original
                        artworks. From bold abstracts to serene landscapes, discover pieces
                        that inspire, captivate.
                    </Typography>

                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#fff",
                            color: "#000",
                            px: 4,
                            py: 1.3,
                            fontWeight: 600,
                            borderRadius: 1,
                            "&:hover": {
                                backgroundColor: "#e6e6e6",
                            },
                        }}
                    >
                        Explore Now
                    </Button>
                </Container>
            </Box>
            <Box
                sx={{
                    backgroundColor: "#1b1b1b",
                    py: { xs: 6 },
                    color: "#fff",
                }}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={6} alignItems="center">
                        {/* LEFT IMAGES */}
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    position: "relative",
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                {/* Background Image */}
                                <Box
                                    component="img"
                                    src="https://demo.egenslab.com/html/artmart/preview/assets/img/home1/artistic-img.png"
                                    alt="Artwork"
                                    sx={{
                                        width: "100%",
                                        maxWidth: 495,
                                        borderRadius: 1,
                                    }}
                                />

                                {/* Framed Image */}

                            </Box>
                        </Grid>

                        {/* RIGHT CONTENT */}
                        <Grid item xs={12} md={6}>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 700,
                                    mb: 2,
                                    fontFamily: "serif",
                                }}
                            >
                                Our Artistic Endeavor
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    color: "#cfcfcf",
                                    mb: 3,
                                    lineHeight: 1.7,
                                }}
                            >
                                At Artmart, our mission is to revolutionize the art experience.
                                We are committed to:
                            </Typography>

                            <Stack spacing={2} sx={{ mb: 4 }}>
                                {[
                                    "Empowering Artists",
                                    "Connecting Collectors",
                                    "Fostering Diversity",
                                    "Ensuring Integrity",
                                    "Building Community",
                                ].map((item, index) => (
                                    <Stack
                                        key={index}
                                        direction="row"
                                        spacing={1.5}
                                        alignItems="center"
                                    >
                                        <ArrowForwardIcon sx={{ color: "#2ecc71" }} />
                                        <Typography variant="body1">{item}</Typography>
                                    </Stack>
                                ))}
                            </Stack>

                            <Typography
                                variant="body2"
                                sx={{
                                    color: "#bdbdbd",
                                    lineHeight: 1.7,
                                    maxWidth: 480,
                                }}
                            >
                                We believe that art has the power to inspire, transform, and
                                connect people. Our goal is to bring this power to life by
                                creating.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box
                sx={{
                    backgroundColor: "#1b1b1b",
                    py: { xs: 6, md: 10 },
                    color: "#fff",

                }}
            >
            </Box>
            <Box sx={{ backgroundColor: "#0f0f0f", py: 8, pb: "175px" }}>
                <Container>
                    <Typography variant="h4" color="white" fontWeight="bold">
                        Client Acknowledgment
                    </Typography>

                    <Typography color="gray" mt={1} mb={5}>
                        Join us for an exhilarating live auction experience where art meets excitement.
                    </Typography>

                    <Grid
                        container
                        spacing={4}
                        wrap="nowrap"
                        sx={{
                            overflowX: "auto",
                            pb: 2,
                            "&::-webkit-scrollbar": {
                                height: 6,
                            },
                            "&::-webkit-scrollbar-thumb": {
                                backgroundColor: "#333",
                                borderRadius: 3,
                            },
                        }}
                    >
                        {testimonials.map((item, index) => (
                            <Grid item key={index} sx={{ minWidth: 340 }}>
                                <Card
                                    sx={{
                                        backgroundColor: "#1a1a1a",
                                        color: "white",
                                        height: "100%",
                                        borderRadius: 3,
                                        position: "relative",
                                    }}
                                >
                                    <CardContent>
                                        <FormatQuoteIcon
                                            sx={{
                                                fontSize: 50,
                                                color: "#333",
                                                position: "absolute",
                                                top: 16,
                                                right: 16,
                                            }}
                                        />

                                        <Typography variant="h6" fontWeight="bold" mb={2}>
                                            {item.title}
                                        </Typography>

                                        <Typography color="gray" mb={4}>
                                            "{item.message}"
                                        </Typography>

                                        <Stack direction="row" spacing={2} alignItems="center">
                                            <Avatar src={item.avatar} />
                                            <Box>
                                                <Typography fontWeight="bold">{item.name}</Typography>
                                                <Typography variant="body2" color="gray">
                                                    {item.role}
                                                </Typography>
                                            </Box>
                                        </Stack>

                                        <Typography variant="caption" color="gray" mt={2} display="block">
                                            {item.date}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
            <Footer></Footer>

        </>
    );
};

export default Blogpg;
