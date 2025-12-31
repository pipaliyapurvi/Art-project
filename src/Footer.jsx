import React from "react";
import {
    Box,
    Grid,
    Typography,
    TextField,
    Button,
    IconButton,
    Stack,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: "#121212",
                color: "#fff",
                px: { xs: 3, md: 10 },
                py: 8,
            }}
        >
            {/* Single Row Grid with 3 columns */}
            <Grid container spacing={4} alignItems="flex-start">
                {/* LEFT - Newsletter */}
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" fontWeight={700} mb={3}>
                        Sign Up For Our Newsletter And Receive 16% Off Your Next Order
                    </Typography>

                    <Stack direction="row" spacing={2} alignItems="center">
                        <TextField
                            placeholder="Email Address"
                            variant="outlined"
                            fullWidth
                            InputProps={{
                                sx: {
                                    color: "#fff",
                                    borderColor: "#555",
                                },
                            }}
                            sx={{
                                "& fieldset": { borderColor: "#555" },
                            }}
                        />
                        <IconButton
                            sx={{
                                color: "#fff",
                                border: "1px solid #555",
                                p: 1.5,
                            }}
                        >
                            <ArrowForwardIcon />
                        </IconButton>
                    </Stack>
                </Grid>

                {/* CENTER - Brand & Description */}
                <Grid item xs={12} md={4}>
                    <Typography variant="h5" fontWeight={700} mb={3}>
                        One Art
                    </Typography>
                    <Typography color="#bbb" lineHeight={1.7}>
                        Through colors, flowing lines, art uncovers the hidden emotions our
                        hearts quietly hold. What words may hide, a painting boldly
                        expresses through every shade.
                    </Typography>
                </Grid>

                {/* RIGHT - Quick Links & Shop */}
                <Grid item xs={12} md={4}>
                    <Grid container spacing={4}>
                        <Grid item xs={6}>
                            <Typography fontWeight={700} mb={2}>
                                Quick Links
                            </Typography>
                            <Stack spacing={1} color="#bbb">
                                <Typography>Download App</Typography>
                                <Typography>About Us</Typography>
                                <Typography>Exhibitions</Typography>
                                <Typography>Blogs</Typography>
                                <Typography>Contact</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography fontWeight={700} mb={2}>
                                Shop
                            </Typography>
                            <Stack spacing={1} color="#bbb">
                                <Typography>All Wall Art</Typography>
                                <Typography>Under $500</Typography>
                                <Typography>Oil Painting</Typography>
                                <Typography>Pencil Art</Typography>
                                <Typography>Sculpture</Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            {/* Bottom copyright */}
            <Box
                sx={{
                    borderTop: "1px solid #333",
                    mt: 6,
                    pt: 3,
                    textAlign: "center",
                    color: "#777",
                }}
            >
                © {new Date().getFullYear()} One Art. All rights reserved.
            </Box>
        </Box>
    );
};

export default Footer;
