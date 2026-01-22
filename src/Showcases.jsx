import { Box, Grid, Typography, Button } from "@mui/material";
import { useHistory } from "react-router-dom";

const Showcases = () => {
    const history = useHistory();

    return (
        <Box sx={{ px: { xs: 2, md: 8 }, py: 8 }}>
            <Grid container spacing={4}>

                {/* LEFT COLUMN */}
                <Grid item xs={12} md={5}>
                    {/* Card 1 */}
                    <Box sx={{ mb: 6 }}>
                        <Box
                            component="img"
                            src="	https://oneart.wpengine.com/wp-content/uploads/2025/09/exhibition-list-02-1536x714.jpg"
                            alt="Showcase 1"
                            sx={{
                                width: "100%",
                                height: 260,
                                objectFit: "cover",
                                mb: 2,
                            }}
                        />

                        <Typography variant="h6" fontWeight="bold">
                            Colors In Motion: Visual Journey
                        </Typography>

                        <Typography variant="body2" color="text.secondary" sx={{ my: 1 }}>
                            September 25 - September 26
                        </Typography>

                        <Button
                            variant="text"
                            onClick={() => history.push("/tickets/3")}
                            sx={{
                                px: 0,
                                fontWeight: 600,
                                textTransform: "none",
                            }}
                        >
                            Buy Tickets →
                        </Button>
                    </Box>

                    {/* Card 2 */}
                    <Box>
                        <Box
                            component="img"
                            src="https://oneart.wpengine.com/wp-content/uploads/2025/09/exhibition-list-03-1536x714.jpg"
                            alt="Showcase 2"
                            sx={{
                                width: "100%",
                                height: 260,
                                objectFit: "cover",
                                mb: 2,
                            }}
                        />

                        <Typography variant="h6" fontWeight="bold">
                            Textures Of The Modern Soul In Motion
                        </Typography>

                        <Typography variant="body2" color="text.secondary" sx={{ my: 1 }}>
                            September 25 - September 26
                        </Typography>
                        <Button
                            variant="text"
                            onClick={() => history.push("/tickets/3")}
                            sx={{
                                px: 0,
                                fontWeight: 600,

                                textTransform: "none",
                            }}
                        >
                            Buy Tickets →
                        </Button>
                    </Box>
                </Grid>

                {/* RIGHT COLUMN */}
                <Grid item xs={12} md={7}>
                    <Typography
                        variant="h3"
                        fontWeight="bold"
                        sx={{ mb: 2, fontFamily: "serif" }}

                    >
                        Showcases
                    </Typography>

                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ maxWidth: 520, mb: 4 }}
                    >
                        Art showcases present curated collections that highlight creativity,
                        technique, and visual storytelling. They offer a glimpse into the
                        artist’s vision and emotional depth.
                    </Typography>

                    <Box
                        component="img"
                        src="https://oneart.wpengine.com/wp-content/uploads/2025/09/exhibition-list-01-1536x714.jpg" sizes="(max-width: 1720px) 100vw, 1720px"
                        alt="Main Showcase"
                        sx={{
                            width: "100%",
                            height: "253px",

                        }}
                    />
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ maxWidth: 520, mb: 4 }}
                        paddingTop={5}
                    >
                        Paintings are timeless expressions of human thought, emotion, and imagination. With every brushstroke, artists breathe life onto canvas, turning colors into stories. From bold abstract forms to delicate realism, each style reflects a unique perspective. Paintings can capture a fleeting moment or a dream never seen. They invite us to pause, reflect, and feel beyond words. Whether created with oil, watercolor, or digital tools, they remain a powerful visual language.
                    </Typography>

                    <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{ mt: 2 }}
                    >
                        Echoing Textures Of Modern Mind
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ my: 1 }}>
                        September 25 - September 26
                    </Typography>
                    <Button
                        variant="text"
                        onClick={() => history.push("/tickets/3")}
                        sx={{
                            px: 0,
                            fontWeight: 600,
                            textTransform: "none",
                        }}
                    >
                        Buy Tickets →
                    </Button>
                </Grid>

            </Grid>
        </Box>
    );
};

export default Showcases;
