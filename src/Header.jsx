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

// ================= Styled Components =================
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
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
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        width: '20ch',
    },
}));

const CartBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 8,
        border: `2px solid ${theme.palette.background.paper}`,
    },
}));

// ================= Header Component =================
function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const cartItems = 3;

    const menuItems = [
        { text: 'Home', icon: <HomeIcon /> },
        { text: 'Shop', icon: <StoreIcon /> },
        { text: 'Collection', icon: <CategoryIcon /> },
        { text: 'Blog', icon: <ArticleIcon /> },
        { text: 'Contact', icon: <ContactMailIcon /> },
    ];

    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
                <Toolbar sx={{ minHeight: 70 }}>

                    {/* Logo */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mr: 3 }}>
                        <Typography className="logo">Art</Typography>
                        <Typography className="logo-1">Strick</Typography>
                    </Box>

                    {/* Menu Desktop */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, gap: 4 }}>
                        {menuItems.map(item => (
                            <Typography key={item.text} sx={{ cursor: 'pointer' }}>
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

                        <IconButton sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <SearchIcon />
                        </IconButton>

                        <IconButton sx={{ display: { xs: 'none', sm: 'flex' } }}>
                            <PermIdentityIcon />
                        </IconButton>

                        <IconButton>
                            <CartBadge badgeContent={cartItems} color="primary">
                                <ShoppingCartIcon />
                            </CartBadge>
                        </IconButton>

                        {/* ===== Login / Signup Buttons (Desktop) ===== */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, ml: 2 }}>
                            <Button variant="contained" size="small">
                                Login
                            </Button>
                        </Box>

                        {/* Mobile Menu */}
                        <IconButton
                            sx={{ display: { md: 'none' } }}
                            onClick={() => setDrawerOpen(true)}
                        >
                            <MenuIcon />
                        </IconButton>

                    </Box>
                </Toolbar>
            </AppBar>

            {/* ================= Drawer (Mobile) ================= */}
            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <Box sx={{ width: 280 }}>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
                        <Typography variant="h6">Menu</Typography>
                        <IconButton onClick={() => setDrawerOpen(false)}>
                            <CloseIcon />
                        </IconButton>
                    </Box>

                    <Divider />

                    <List>
                        {menuItems.map(item => (
                            <ListItem button key={item.text}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItem>
                        ))}
                    </List>

                    <Divider />

                    {/* Login /  */}
                    <Box sx={{ p: 2 }} className="btn">
                        <Button fullWidth variant="contained">
                            Login
                        </Button>
                    </Box>

                </Box>
            </Drawer>
        </>
    );
}

export default Header;
