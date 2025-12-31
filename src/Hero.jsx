import { Box, Typography, Button, IconButton } from "@mui/material";
import Slider from "react-slick";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
    {
        title: "Where Art Comes Alive",
        desc: "Discover creative paintings, digital art & unique visual stories.",
        image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968",
    },
    {
        title: "Creative Visual Stories",
        desc: "Art that speaks emotions and imagination.",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    {
        title: "Inspired by Colors",
        desc: "Unique handmade & digital artworks.",
        image: "https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1",
    },
];

const Hero = () => {
    let sliderRef = null;

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
    };

    return (
        <Box sx={{ position: "relative", height: "100vh" }}>
            <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
                {slides.map((slide, index) => (
                    <Box key={index}>
                        {/* SLIDE */}
                        <Box
                            sx={{
                                height: "100vh",
                                backgroundImage: `linear-gradient(
                  rgba(0,0,0,0.6),
                  rgba(0,0,0,0.6)
                ), url(${slide.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            {/* CENTER TEXT */}
                            <Box
                                sx={{
                                    textAlign: "center",
                                    color: "#fff",
                                    maxWidth: 700,
                                    px: 2,
                                }}
                            >
                                <Typography
                                    variant="h2"
                                    fontWeight="bold"
                                    mb={2}
                                    sx={{ fontSize: { xs: "2rem", md: "3.5rem" } }}
                                >
                                    {slide.title}
                                </Typography>

                                <Typography
                                    variant="h6"
                                    mb={4}
                                    sx={{ opacity: 0.9 }}
                                >
                                    {slide.desc}
                                </Typography>

                                <Box>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            mr: 2,
                                            px: 4,
                                            py: 1.5,
                                            borderRadius: "30px",
                                            backgroundColor: "#90caf9",
                                            "&:hover": { backgroundColor: "#90caf9" },
                                        }}
                                    >
                                        Explore Art
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        sx={{
                                            px: 4,
                                            py: 1.5,
                                            borderRadius: "30px",
                                            color: "#fff",
                                            borderColor: "#fff",
                                            "&:hover": {
                                                borderColor: "#90caf9",
                                                color: "#90caf9",
                                            },
                                        }}
                                    >
                                        Contact Artist
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Slider>

            {/* PREV */}
            <IconButton
                onClick={() => sliderRef?.slickPrev()}
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: 20,
                    transform: "translateY(-50%)",
                    color: "#fff",
                    backgroundColor: "rgba(0,0,0,0.4)",
                }}
            >
                <ArrowBackIosNewIcon />
            </IconButton>

            {/* NEXT */}
            <IconButton
                onClick={() => sliderRef?.slickNext()}
                sx={{
                    position: "absolute",
                    top: "50%",
                    right: 20,
                    transform: "translateY(-50%)",
                    color: "#fff",
                    backgroundColor: "rgba(0,0,0,0.4)",
                }}
            >
                <ArrowForwardIosIcon />
            </IconButton>
        </Box>
    );
};


export default Hero;
