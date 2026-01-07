import React from "react";
import {
    Box,
    Typography,
    Container,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Stack,
    Checkbox,
    Button,
    TextField,
    Select,
    MenuItem,
    IconButton,
    Divider,
    Slider,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Header from "./Header";
import Footer from "./Footer";

const artists = [
    "Frida Kahlo",
    "Pablo Picasso",
    "Leonardo Da Vinci",
    "Gustav Klimt",
    "Yayoi Kusama",
];

const categories = [
    "Painting",
    "Sculpture",
    "Print",
    "Nature",
    "Street Art",
];

const artworks = [
    {
        title: "Frida Kahlo Cat love’s",
        artist: "Frida Kahlo",
        price: 200,
        image:
            "https://demo.egenslab.com/html/artmart/preview/assets/img/inner-page/auction-details-img.jpg",
    },
    {
        title: "A masterpiece that invites you to dream",
        artist: "Frida Kahlo",
        price: 200,
        image:
            "https://demo.egenslab.com/html/artmart/preview/assets/img/inner-page/auction-details-img8.jpg",
    },
    {
        title: "More than just art—it's a feeling",
        artist: "Frida Kahlo",
        price: 200,
        image:
            "https://demo.egenslab.com/html/artmart/preview/assets/img/inner-page/auction-details-img3.jpg",
    },

];
const artData = [
    {
        title: "Frida Kahlo Cat love’s",
        artist: "Frida Kahlo",
        price: 200,
        image:
            "	https://demo.egenslab.com/html/artmart/preview/assets/img/inner-page/auction-details-img7.jpg",
    },
    {
        title: "A masterpiece that invites you to dream",
        artist: "Frida Kahlo",
        price: 200,
        image:
            "	https://demo.egenslab.com/html/artmart/preview/assets/img/home1/general-art-img6.jpg",
    },
    {
        title: "More than just art—it's a feeling",
        artist: "Frida Kahlo",
        price: 200,
        image:
            "https://demo.egenslab.com/html/artmart/preview/assets/img/inner-page/auction-details-img3.jpg",
    },

];



const Shoppg = () => {
    return (
        <>
            <Header />

            {/* HERO */}
            <Box
                sx={{
                    height: 435,
                    backgroundImage: `
          linear-gradient(to right, rgba(0,0,0,0.75), rgba(0,0,0,0.4), rgba(0,0,0,0)),
          url("https://demo.egenslab.com/html/artmart/preview/assets/img/inner-page/breadcrumb-image2.jpg")
        `,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Container>
                    <Box sx={{ maxWidth: 520, color: "#fff" }}>
                        <Typography variant="h2" fontWeight={700} fontFamily="serif">
                            Art Catalog
                        </Typography>
                        <Typography sx={{ mt: 2, opacity: 0.9 }}>
                            An art catalog is a curated assembly of artworks gathered by an
                            individual, institution, or group.
                        </Typography>
                    </Box>
                </Container>
            </Box>

            {/* MAIN SECTION */}
            <Box sx={{ bgcolor: "#0e0e0e", color: "#fff", py: 6, mb: "5px" }}>
                <Container maxWidth="xl">
                    <Grid container spacing={4}>
                        {/* LEFT SIDEBAR */}
                        <Grid item xs={12} md={3}>
                            <Typography variant="h6" mb={2}>
                                Shop Catalog
                            </Typography>

                            {["Auction Art", "General Art", "Upcoming Auction Art"].map(
                                (item) => (
                                    <Stack direction="row" alignItems="center" key={item}>
                                        <Checkbox sx={{ color: "#aaa" }} />
                                        <Typography>{item}</Typography>
                                    </Stack>
                                )
                            )}

                            <Divider sx={{ my: 3, borderColor: "#333" }} />

                            <Typography variant="h6" mb={2}>
                                Artist Name
                            </Typography>
                            {artists.map((artist) => (
                                <Stack direction="row" alignItems="center" key={artist}>
                                    <Checkbox sx={{ color: "#aaa" }} />
                                    <Typography>{artist}</Typography>
                                </Stack>
                            ))}

                            <Divider sx={{ my: 3, borderColor: "#333" }} />

                            <Typography variant="h6" mb={2}>
                                Category
                            </Typography>
                            {categories.map((cat) => (
                                <Stack direction="row" alignItems="center" key={cat}>
                                    <Checkbox sx={{ color: "#aaa" }} />
                                    <Typography>{cat}</Typography>
                                </Stack>
                            ))}

                            <Divider sx={{ my: 3, borderColor: "#333" }} />

                            <Typography variant="h6">Price Filter</Typography>
                            <Slider
                                defaultValue={[10, 700]}
                                min={10}
                                max={700}
                                sx={{ color: "#fff", mt: 2 }}
                            />
                            <Stack direction="row" justifyContent="space-between">
                                <Typography>$10</Typography>
                                <Typography>$700</Typography>
                            </Stack>
                        </Grid>

                        {/* RIGHT CONTENT */}
                        <Grid item xs={12} md={9}>

                            {/* SEARCH & SORT */}
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    mb: 4,
                                    gap: 2,
                                }}
                            >
                                <TextField
                                    size="small"
                                    placeholder="Search Artist"
                                    sx={{
                                        bgcolor: "#1a1a1a",
                                        borderRadius: 1,
                                        input: { color: "#fff" },
                                    }}
                                />

                                <Select
                                    size="small"
                                    defaultValue="sorting"
                                    sx={{ bgcolor: "#1a1a1a", color: "#fff" }}
                                >
                                    <MenuItem value="sorting">Sorting</MenuItem>
                                    <MenuItem value="price">Price</MenuItem>
                                    <MenuItem value="latest">Latest</MenuItem>
                                </Select>
                            </Box>

                            {/* ART GRID */}
                            <Grid container spacing={3}>
                                {artworks.map((art, index) => (
                                    <Grid item xs={12} sm={6} md={4} key={index}>
                                        <Card sx={{ bgcolor: "#1a1a1a", color: "#fff" }}>
                                            <Box sx={{ position: "relative" }}>
                                                <CardMedia
                                                    component="img"
                                                    height="260"
                                                    image={art.image}
                                                />

                                                <Box
                                                    sx={{
                                                        position: "absolute",
                                                        top: 10,
                                                        left: 10,
                                                        bgcolor: "red",
                                                        px: 1,
                                                        py: 0.5,
                                                        borderRadius: 1,
                                                        fontSize: 12,
                                                    }}
                                                >
                                                    Live
                                                </Box>

                                                <IconButton
                                                    sx={{
                                                        position: "absolute",
                                                        top: 10,
                                                        right: 10,
                                                        color: "#fff",
                                                    }}
                                                >
                                                    <FavoriteBorderIcon />
                                                </IconButton>
                                            </Box>

                                            <Box
                                                sx={{
                                                    bgcolor: "#000",
                                                    textAlign: "center",
                                                    py: 1,
                                                    fontSize: 13,
                                                }}
                                            >
                                                00D : 00H : 00M : 00Sec
                                            </Box>

                                            <CardContent>
                                                <Typography fontWeight={600}>
                                                    {art.title}
                                                </Typography>
                                                <Typography sx={{ color: "#aaa", my: 1 }}>
                                                    Artist : {art.artist}
                                                </Typography>
                                                <Typography>
                                                    Current Bidding : <b>${art.price}.00</b>
                                                </Typography>

                                                <Button
                                                    fullWidth
                                                    variant="outlined"
                                                    sx={{
                                                        mt: 2,
                                                        color: "#fff",
                                                        borderColor: "#555",
                                                    }}
                                                >
                                                    Bidding Start
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                            <Grid container spacing={3}>
                                {artData.map((art, index) => (
                                    <Grid item xs={12} sm={6} md={4} key={index}>
                                        <Card sx={{ bgcolor: "#1a1a1a", color: "#fff", mb: "90px" }}>
                                            <Box sx={{ position: "relative" }}>
                                                <CardMedia
                                                    component="img"
                                                    height="260"
                                                    image={art.image}
                                                />

                                                <Box
                                                    sx={{
                                                        position: "absolute",
                                                        top: 10,
                                                        left: 10,
                                                        bgcolor: "red",
                                                        px: 1,
                                                        py: 0.5,
                                                        borderRadius: 1,
                                                        fontSize: 12,
                                                    }}
                                                >
                                                    Live
                                                </Box>

                                                <IconButton
                                                    sx={{
                                                        position: "absolute",
                                                        top: 10,
                                                        right: 10,
                                                        color: "#fff",
                                                    }}
                                                >
                                                    <FavoriteBorderIcon />
                                                </IconButton>
                                            </Box>

                                            <Box
                                                sx={{
                                                    bgcolor: "#000",
                                                    textAlign: "center",
                                                    py: 1,
                                                    fontSize: 13,
                                                }}
                                            >
                                                00D : 00H : 00M : 00Sec
                                            </Box>

                                            <CardContent>
                                                <Typography fontWeight={600}>
                                                    {art.title}
                                                </Typography>
                                                <Typography sx={{ color: "#aaa", my: 1 }}>
                                                    Artist : {art.artist}
                                                </Typography>
                                                <Typography>
                                                    Current Bidding : <b>${art.price}.00</b>
                                                </Typography>

                                                <Button
                                                    fullWidth
                                                    variant="outlined"
                                                    sx={{
                                                        mt: 2,
                                                        color: "#fff",
                                                        borderColor: "#555",
                                                    }}
                                                >
                                                    Bidding Start
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Footer></Footer>

        </>
    );
};

export default Shoppg;
