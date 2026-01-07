import React from "react";
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Container,
} from "@mui/material";

const collections = [
    {
        id: 1,
        title: "Abstract Art",
        image: "https://source.unsplash.com/400x300/?abstract,art",
        description: "Modern abstract artwork collection",
    },
    {
        id: 2,
        title: "Landscape Art",
        image: "https://source.unsplash.com/400x300/?landscape,painting",
        description: "Beautiful nature and landscape paintings",
    },
    {
        id: 3,
        title: "Portrait Art",
        image: "https://source.unsplash.com/400x300/?portrait,art",
        description: "Creative portrait art collection",
    },
    {
        id: 4,
        title: "Modern Art",
        image: "https://source.unsplash.com/400x300/?modern,art",
        description: "Latest modern art designs",
    },
];

const Categorypg = () => {
    return (
        <Box sx={{ py: 6, backgroundColor: "#f9f9f9" }}>
            <Container>
                {/* Page Title */}
                <Typography
                    variant="h4"
                    align="center"
                    fontWeight="bold"
                    gutterBottom
                >
                    Our Art Collections
                </Typography>

                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    mb={5}
                >
                    Explore our exclusive art collections
                </Typography>

                {/* Collection Grid */}
                <Grid container spacing={4}>
                    {collections.map((item) => (
                        <Grid item xs={12} sm={6} md={3} key={item.id}>
                            <Card
                                sx={{
                                    height: "100%",
                                    transition: "0.3s",
                                    "&:hover": {
                                        transform: "translateY(-8px)",
                                        boxShadow: 6,
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={item.image}
                                    alt={item.title}
                                />
                                <CardContent>
                                    <Typography variant="h6" fontWeight="bold">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Categorypg;

