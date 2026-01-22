import React, { useState } from "react";
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Button
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";

import { Link } from "react-router-dom";

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const menuItems = [
        { text: "Home", path: "/" },
        { text: "Shop", path: "/shop" },
        { text: "Category", path: "/category" },
        { text: "Blog", path: "/blog" },
        { text: "Contact", path: "/contact" },
    ];

    return (
        <>
            <AppBar position="sticky" sx={{ bgcolor: "#000" }}>
                <Toolbar>

                    {/* LOGO */}
                    <Typography
                        component={Link}
                        to="/"
                        sx={{
                            color: "#fff",
                            textDecoration: "none",
                            fontSize: "22px",
                            fontWeight: 700,
                            flexGrow: 1,
                        }}
                    >
                        ArtStrick
                    </Typography>

                    {/* DESKTOP MENU */}
                    <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
                        {menuItems.map((item) => (
                            <Typography
                                key={item.text}
                                component={Link}
                                to={item.path}
                                sx={{
                                    color: "#fff",
                                    textDecoration: "none",
                                    fontSize: "16px",
                                    "&:hover": { color: "#aaa" },
                                }}
                            >
                                {item.text}
                            </Typography>
                        ))}
                    </Box>

                    {/* DESKTOP ICONS */}
                    <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1, ml: 3 }}>
                        <IconButton sx={{ color: "#fff" }}>
                            <SearchIcon />
                        </IconButton>
                        <IconButton sx={{ color: "#fff" }}>
                            <PermIdentityIcon />
                        </IconButton>
                        <IconButton sx={{ color: "#fff" }}>
                            <ShoppingCartIcon />
                        </IconButton>

                        <Button
                            component={Link}
                            to="/login"
                            variant="outlined"
                            sx={{
                                color: "#fff",
                                borderColor: "#fff",
                                ml: 1,
                                "&:hover": {
                                    bgcolor: "#fff",
                                    color: "#000",
                                },
                            }}
                        >
                            Login
                        </Button>
                    </Box>

                    {/* MOBILE MENU ICON */}
                    <IconButton
                        sx={{ color: "#fff", display: { md: "none" } }}
                        onClick={() => setDrawerOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>

                </Toolbar>
            </AppBar>

            {/* DRAWER (MOBILE MENU) */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                <Box sx={{ width: 260, bgcolor: "#111", height: "100%" }}>
                    <List>
                        {menuItems.map((item) => (
                            <ListItem
                                button
                                key={item.text}
                                component={Link}
                                to={item.path}
                                onClick={() => setDrawerOpen(false)}
                            >
                                <ListItemText
                                    primary={item.text}
                                    primaryTypographyProps={{ color: "#fff" }}
                                />
                            </ListItem>
                        ))}

                        {/* LOGIN IN DRAWER */}
                        <ListItem
                            button
                            component={Link}
                            to="/login"
                            onClick={() => setDrawerOpen(false)}
                        >
                            <ListItemText
                                primary="Login"
                                primaryTypographyProps={{ color: "#fff" }}
                            />
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </>
    );
};

export default Header;
