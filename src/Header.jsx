import React, { useState } from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';

import { Link } from 'react-router-dom';

function Header({ children }) {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const menuItems = [
        { text: 'Home', path: '/' },
        { text: 'Shop', path: '/shop' },
        { text: 'Category', path: '/category' },
        { text: 'Blog', path: '/blog' },
        { text: 'Contact', path: '/contact' },
    ];

    return (
        <>
            <AppBar position="static" sx={{ bgcolor: '#000' }}>
                <Toolbar>

                    {/* Logo */}
                    <Typography
                        component={Link}
                        to="/"
                        sx={{
                            color: '#fff',
                            textDecoration: 'none',
                            fontSize: '22px',
                            fontWeight: '700',
                            flexGrow: 1,
                        }}
                    >
                        ArtStrick
                    </Typography>

                    {/* Desktop Menu */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
                        {menuItems.map(item => (
                            <Typography
                                key={item.text}
                                component={Link}
                                to={item.path}
                                sx={{
                                    color: '#fff',
                                    textDecoration: 'none',
                                    fontSize: '16px'
                                }}
                            >
                                {item.text}
                            </Typography>
                        ))}
                    </Box>

                    {/* Icons */}
                    <Box sx={{ display: 'flex', gap: 2, ml: 3 }}>
                        <IconButton sx={{ color: '#fff' }}>
                            <SearchIcon />
                        </IconButton>
                        <IconButton sx={{ color: '#fff' }}>
                            <PermIdentityIcon />
                        </IconButton>
                        <IconButton sx={{ color: '#fff' }}>
                            <ShoppingCartIcon />
                        </IconButton>

                        {/* Mobile Menu Icon */}
                        <IconButton
                            sx={{ color: '#fff', display: { md: 'none' } }}
                            onClick={() => setDrawerOpen(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Drawer */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                <Box sx={{ width: 260, bgcolor: '#111', height: '100%' }}>
                    <List>
                        {menuItems.map(item => (
                            <ListItem
                                button
                                key={item.text}
                                component={Link}
                                to={item.path}
                                onClick={() => setDrawerOpen(false)}
                            >
                                <ListItemText
                                    primary={item.text}
                                    primaryTypographyProps={{ color: '#fff' }}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>
                
            </Drawer>

            {/* Page Content */}
            {children}
        </>
    );
}

export default Header;





