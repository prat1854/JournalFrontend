import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton, Menu, MenuItem, useMediaQuery } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Header.css';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
  transition: 'background-color 0.3s ease-in-out',
  position: 'fixed',
  width: '100%',
  zIndex: 1100,
}));

const ScrolledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(8px)',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
  borderBottom: 'none',
  transition: 'all 0.3s ease-in-out',
  position: 'fixed',
  width: '100%',
  zIndex: 1100,
}));

const LogoContainer = styled(Typography)(({ theme }) => ({
  fontFamily: '"Playfair Display", serif',
  letterSpacing: '0.03em',
  fontWeight: 700,
  fontSize: '1.7rem',
  color: '#1a1a1a',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-4px',
    left: '0',
    width: '30px',
    height: '2px',
    backgroundColor: '#d32f2f',
  }
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '40px',
  backgroundColor: alpha(theme.palette.common.black, 0.03),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.06),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  maxWidth: '260px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
  transition: 'all 0.2s ease-in-out',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: alpha(theme.palette.common.black, 0.4),
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
    fontSize: '0.9rem',
  },
}));

const NavButton = styled(Button)(({ theme, active }) => ({
  color: active ? '#d32f2f' : '#333',
  fontWeight: active ? 600 : 500,
  padding: '8px 16px',
  textTransform: 'none',
  fontSize: '0.95rem',
  position: 'relative',
  '&:hover': {
    backgroundColor: 'transparent',
    '&::after': {
      width: '70%',
      opacity: 1,
    }
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '4px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: active ? '70%' : '0%',
    height: '2px',
    backgroundColor: '#d32f2f',
    transition: 'all 0.2s ease-in-out',
    opacity: active ? 1 : 0,
  }
}));

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();
  const isMobile = useMediaQuery('(max-width:900px)');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenu = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const isActive = (path) => location.pathname === path;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Articles', path: '/articles' },
    { name: 'Journal Overview', path: '/JournalOverview' },
    { name: 'About the Journal', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const RenderAppBar = scrolled ? ScrolledAppBar : StyledAppBar;

  return (
    <div className="header-container">
      <RenderAppBar>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 1.5 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LogoContainer variant="h6" component={Link} to="/" sx={{ textDecoration: 'none' }} className="header-logo">
                Global Journal 
              </LogoContainer>
              {!isMobile && (
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase placeholder="Search articles…" inputProps={{ 'aria-label': 'search' }} style={{ color: '#2d3436' }} />
                </Search>
              )}
            </Box>
            {isMobile ? (
              <Box sx={{ flexGrow: 0 }}>
                <IconButton size="large" onClick={handleMenu} color="inherit" className="header-icon">
                  <MenuIcon  style={{ color: '#2d3436' }} />
                </IconButton>
                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                  {navItems.map((item) => (
                    <MenuItem key={item.name} onClick={handleClose} component={Link} to={item.path} selected={isActive(item.path)}>
                      {item.name}
                    </MenuItem>
                  ))}
                  <MenuItem onClick={handleClose} component={Link} to="/login">
                    Login
                  </MenuItem>
                </Menu>
              </Box>
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ mr: 2 }}>
                  {navItems.map((item) => (
                    <NavButton key={item.name} active={isActive(item.path)} component={Link} to={item.path}>
                      {item.name}
                    </NavButton>
                  ))}
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <IconButton color="#fff" size="small" sx={{ ml: 1 }}>
                    <BookmarkBorderIcon />
                  </IconButton>
                  <IconButton color="#fff" size="small" sx={{ ml: 1 }} component={Link} to="/login">
                    <AccountCircleIcon />
                  </IconButton>
                </Box>
              </Box>
            )}
          </Toolbar>
        </Container>
      </RenderAppBar>
    </div>
  );
};

export default Header;
