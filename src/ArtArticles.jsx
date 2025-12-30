import React from "react";
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    useTheme,
    useMediaQuery,
    Divider,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const articles = [
    {
        date: "Oct 28, 2025",
        title: "Capturing Feeling: Abstract Painting And Artistic Expression",
        image:
            "https://oneart.wpengine.com/wp-content/uploads/2025/09/blog-img-01-1536x752.jpg",
    },
    {
        date: "Sep 16, 2025",
        title:
            "An Artistic Flight: Painting The Beautiful European Robin In A Watercolor",
        image:
            "https://oneart.wpengine.com/wp-content/uploads/2025/09/blog-img-03-1536x752.jpg",
    },
    {
        date: "Aug 16, 2025",
        title: "Visualizing Vulnerability: Art To Express Emotions For Mental Health",
        image:
            "https://oneart.wpengine.com/wp-content/uploads/2025/09/blog-img-04-1536x752.jpg",
    },
];

const ArtArticles = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const cardWidth = isMobile ? "90vw" : `calc((100vw - 96px) / 3)`;

    return (
        <Box
            component="section"
            sx={{
                backgroundColor: "#000",
                py: { xs: 6, md: 10 },
                px: { xs: 2, md: 6 },
                color: "#fff",
            }}
        >
            {/* Section Heading */}
            <Box sx={{ mb: 6, textAlign: "center" }}>
                <Typography
                    variant="overline"
                    sx={{ color: "#90caf9", fontWeight: 700, letterSpacing: 2 }}
                >
                    FEATURED ARTICLES
                </Typography>
                <Typography
                    variant={isMobile ? "h4" : "h3"}
                    component="h2"
                    sx={{ fontWeight: 700, mt: 1 }}
                >
                    Explore Our Latest Art Stories
                </Typography>
                <Divider
                    sx={{
                        width: 64,
                        height: 3,
                        backgroundColor: "#90caf9",
                        mx: "auto",
                        mt: 2,
                        borderRadius: 1,
                    }}
                />
            </Box>

            {/* Articles Cards */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 3,
                    flexWrap: isMobile ? "wrap" : "nowrap",
                    overflowX: "hidden",
                }}
            >
                {articles.map((item, index) => (
                    <Card
                        key={index}
                        sx={{
                            backgroundColor: "#111",
                            color: "#fff",
                            width: cardWidth,
                            display: "flex",
                            flexDirection: "column",
                            flexShrink: 0,
                            boxShadow:
                                "0 4px 20px rgba(144, 202, 249, 0.2), 0 0 10px rgba(144, 202, 249, 0.1)",
                            transition: "transform 0.3s ease",
                            "&:hover": {
                                transform: "translateY(-8px)",
                                boxShadow:
                                    "0 10px 30px rgba(144, 202, 249, 0.4), 0 0 20px rgba(144, 202, 249, 0.3)",
                            },
                        }}
                    >
                        <Box sx={{ overflow: "hidden" }}>
                            <CardMedia
                                component="img"
                                src={item.image}
                                alt={item.title}
                                sx={{
                                    width: "100%",
                                    height: "auto",
                                    display: "block",
                                }}
                            />
                        </Box>

                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography variant="body2" sx={{ color: "#aaa", mb: 1 }}>
                                {item.date}
                            </Typography>

                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 600,
                                    lineHeight: 1.4,
                                    mb: 3,
                                    wordBreak: "break-word",
                                }}
                            >
                                {item.title}
                            </Typography>

                            <Button
                                endIcon={<ArrowForwardIcon />}
                                sx={{
                                    color: "#90caf9",
                                    textTransform: "none",
                                    px: 0,
                                    fontWeight: 700,
                                    "&:hover": {
                                        backgroundColor: "transparent",
                                        color: "#fff",
                                    },
                                }}
                            >
                                Read Article
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default ArtArticles;
