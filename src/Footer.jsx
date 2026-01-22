import React from "react";
import {
    Box,
    Grid,
    Typography,
    TextField,
    IconButton,
    Stack,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                background: "linear-gradient(180deg, #1a1a1a 0%, #121212 100%)",
                color: "#fff",
                px: { xs: 3, md: 10 },
                py: { xs: 6, md: 10 },
            }}
        >
            <Grid container spacing={6}>
                {/* Newsletter */}
                <Grid item xs={12} md={3}>
                    <Typography
                        fontSize={20}
                        fontWeight={700}
                        lineHeight={1.4}
                        mb={4}
                    >
                        Sign Up For Our Newsletter And Receive
                        <br />
                        16% Off Your Next Order
                    </Typography>

                    <Stack direction="row" spacing={2} alignItems="center">
                        <TextField
                            placeholder="Email Address"
                            variant="outlined"
                            fullWidth
                            InputProps={{
                                sx: {
                                    color: "#fff",
                                },
                            }}
                            sx={{
                                "& fieldset": {
                                    borderColor: "#90caf9",
                                },
                                "&:hover fieldset": {
                                    borderColor: "#aaa",
                                },
                            }}
                        />

                        <IconButton
                            sx={{
                                border: "1px solid #90caf9",
                                color: "#fff",
                                p: 1.5,
                            }}
                        >
                            <ArrowForwardIcon />
                        </IconButton>
                    </Stack>
                </Grid>

                {/* Brand */}
                <Grid item xs={12} md={3}>
                    <Stack direction="row" spacing={2} alignItems="center" mb={3}>
                        {/* Logo Placeholder */}


                        <Typography variant="h5" fontWeight={700}>
                            Art Strick
                        </Typography>
                    </Stack>

                    <Typography color="#bbb" lineHeight={1.8}>
                        Through colors, flowing lines, art <br />uncovers the hidden emotions our
                        hearts <br />quietly hold. What words may hide, a <br /> painting boldly
                        expresses through every <br />shade.
                    </Typography>
                </Grid>

                {/* Quick Links */}
                <Grid item xs={12} md={3}>
                    <Typography fontWeight={700} mb={3}>
                        Quick Links
                    </Typography>

                    <Stack spacing={1.5} color="#bbb">
                        <Typography>Download App</Typography>
                        <Typography>Shop</Typography>
                        <Typography>Collection</Typography>
                        <Typography>Blogs</Typography>
                        <Typography>Contact</Typography>
                    </Stack>
                </Grid>

                {/* Shop */}
                <Grid item xs={12} md={3}>
                    <Typography fontWeight={700} mb={3}>
                        Shop
                    </Typography>

                    <Stack spacing={1.5} color="#bbb">
                        <Typography>All Wall Art</Typography>
                        <Typography>Under $500</Typography>
                        <Typography>Oil Painting</Typography>
                        <Typography>Pencil Art</Typography>
                        <Typography>Sculpture</Typography>
                    </Stack>
                </Grid>
            </Grid>

            {/* Bottom */}
            <Box
                sx={{
                    borderTop: "1px solid #333",
                    mt: 8,
                    pt: 3,
                    textAlign: "center",
                    color: "#777",
                    fontSize: 14,

                }}
            >
                © {new Date().getFullYear()} Frontend by Pipaliya Purvi
            </Box>
        </Box>
    );
};

export default Footer;
