import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import CategoryIcon from '@mui/icons-material/Category';
import ArticleIcon from '@mui/icons-material/Article';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { styled, alpha } from '@mui/material/styles';

/* ================= Styled Components ================= */
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha('#fff', 0.15),
    '&:hover': {
        backgroundColor: alpha('#fff', 0.25),
    },
    marginRight: theme.spacing(2),
    display: 'none',
    [theme.breakpoints.up('md')]: {
        display: 'block',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    position: 'absolute',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#fff',
    '& .MuiInputBase-input': {
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        width: '20ch',
    },
}));

const CartBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 8,
        border: `2px solid #000`,
    },
}));

/* ================= Header Component ================= */
function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [showAdmin, setShowAdmin] = useState(false); // show admin panel full page
    const [authPage, setAuthPage] = useState('login'); // login or signup

    const cartItems = 3;

    const menuItems = [
        { text: 'Home', icon: <HomeIcon /> },
        { text: 'Shop', icon: <StoreIcon /> },
        { text: 'Collection', icon: <CategoryIcon /> },
        { text: 'Blog', icon: <ArticleIcon /> },
        { text: 'Contact', icon: <ContactMailIcon /> },
    ];

    const handleTabChange = (newValue) => setAuthPage(newValue);

    // Full-page admin panel
    const adminPanel = (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                bgcolor: '#f5f5f5',
                zIndex: 9999,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                p: 5,
            }}
        >
            <Typography variant="h3" sx={{ mb: 3, color: '#90caf9', fontWeight: '700' }}>
                Login
            </Typography>

            {/* Tabs */}


            {/* Forms */}
            {authPage === 'login' && (
                <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', maxWidth: 400 }}>
                    <InputBase placeholder="Email" sx={{ border: '1px solid #ccc', p: 1, borderRadius: 1 }} />
                    <InputBase placeholder="Password" type="password" sx={{ border: '1px solid #ccc', p: 1, borderRadius: 1 }} />
                    <Button sx={{ bgcolor: '#063', color: '#fff', '&:hover': { bgcolor: '#045' } }}>Login</Button>
                </Box>
            )}

            {authPage === 'signup' && (
                <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', maxWidth: 400 }}>
                    <InputBase placeholder="Name" sx={{ border: '1px solid #ccc', p: 1, borderRadius: 1 }} />
                    <InputBase placeholder="Email" sx={{ border: '1px solid #ccc', p: 1, borderRadius: 1 }} />
                    <InputBase placeholder="Password" type="password" sx={{ border: '1px solid #ccc', p: 1, borderRadius: 1 }} />
                    <InputBase placeholder="Confirm Password" type="password" sx={{ border: '1px solid #ccc', p: 1, borderRadius: 1 }} />
                    <Button sx={{ bgcolor: '#063', color: '#fff', '&:hover': { bgcolor: '#045' } }}>Signup</Button>
                </Box>
            )}

            <Button sx={{ mt: 3, bgcolor: '#ccc', color: '#000', '&:hover': { bgcolor: '#aaa' } }} onClick={() => setShowAdmin(false)}>
                Back to Website
            </Button>
        </Box>
    );

    // Render
    return (
        <>
            {showAdmin ? (
                adminPanel
            ) : (
                <>
                    <AppBar position="static" sx={{ backgroundColor: '#000', color: '#fff' }}>
                        <Toolbar sx={{ minHeight: 70 }}>

                            {/* Logo */}
                            <Box sx={{ display: 'flex', alignItems: 'center', mr: 3 }}>
                                <Typography sx={{ fontWeight: 700, color: '#fff' }}>Art</Typography>
                                <Typography sx={{ ml: 0.5, color: '#fff' }}>Strick</Typography>
                            </Box>

                            {/* Menu Desktop */}
                            <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, gap: 4 }}>
                                {menuItems.map(item => (
                                    <Typography key={item.text} sx={{ cursor: 'pointer', color: '#fff' }}>
                                        {item.text}
                                    </Typography>
                                ))}
                            </Box>

                            {/* Search */}
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase placeholder="Search..." />
                            </Search>

                            {/* Right Icons */}
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <IconButton sx={{ display: { xs: 'flex', md: 'none' }, color: '#fff' }}>
                                    <SearchIcon />
                                </IconButton>

                                <IconButton sx={{ display: { xs: 'none', sm: 'flex' }, color: '#fff' }}>
                                    <PermIdentityIcon />
                                </IconButton>

                                <IconButton sx={{ color: '#fff' }}>
                                    <CartBadge badgeContent={cartItems} color="primary">
                                        <ShoppingCartIcon />
                                    </CartBadge>
                                </IconButton>

                                <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 2 }}>
                                    <Button
                                        variant="outlined"
                                        size="small"
                                        sx={{ color: '#fff', borderColor: '#fff' }}
                                        onClick={() => setShowAdmin(true)} // Open admin panel
                                    >
                                        Login
                                    </Button>
                                </Box>

                                {/* Mobile Menu */}
                                <IconButton sx={{ display: { md: 'none' }, color: '#fff' }} onClick={() => setDrawerOpen(true)}>
                                    <MenuIcon />
                                </IconButton>
                            </Box>
                        </Toolbar>
                    </AppBar>

                    {/* Drawer */}
                    <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                        <Box sx={{ width: 280, backgroundColor: '#111', height: '100%', color: '#fff' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
                                <Typography variant="h6">Menu</Typography>
                                <IconButton sx={{ color: '#fff' }} onClick={() => setDrawerOpen(false)}>
                                    <CloseIcon />
                                </IconButton>
                            </Box>

                            <Divider sx={{ backgroundColor: '#333' }} />

                            <List>
                                {menuItems.map(item => (
                                    <ListItem button key={item.text}>
                                        <ListItemIcon sx={{ color: '#fff' }}>{item.icon}</ListItemIcon>
                                        <ListItemText primary={item.text} />
                                    </ListItem>
                                ))}
                            </List>

                            <Divider sx={{ backgroundColor: '#333' }} />

                            <Box sx={{ p: 2 }}>
                                <Button fullWidth variant="contained" onClick={() => setShowAdmin(true)}>
                                    Login
                                </Button>
                            </Box>
                        </Box>
                    </Drawer>
                </>
            )}
        </>
    );
}

export default Header;



