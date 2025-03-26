import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton, Menu, MenuItem, useMediaQuery, Divider } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import './Header.css';

// Styled components for custom design
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#ffffff',
  boxShadow: 'none',
  borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
  position: 'sticky',
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  padding: '12px 0',
}));

const MainLogo = styled(Typography)(({ theme }) => ({
  fontFamily: '"Playfair Display", serif',
  letterSpacing: '0.05em',
  fontWeight: 700,
  fontSize: '2.2rem',
  color: '#121212',
  textTransform: 'uppercase',
  marginBottom: '4px',
  lineHeight: 1.1,
}));

const SubLogo = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  letterSpacing: '0.15em',
  fontSize: '0.75rem',
  color: '#555',
  textTransform: 'uppercase',
  fontWeight: 500,
}));

const DateDisplay = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '0.8rem',
  color: '#777',
  position: 'absolute',
  left: 24,
  top: '50%',
  transform: 'translateY(-50%)',
  display: 'flex',
  alignItems: 'center',
}));

const NavContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  borderTop: '1px solid rgba(0, 0, 0, 0.08)',
  borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
  padding: '10px 0',
}));

const NavButton = styled(Button)(({ theme, active }) => ({
  color: active ? '#d32f2f' : '#333',
  fontWeight: active ? 600 : 500,
  padding: '4px 16px',
  textTransform: 'none',
  fontSize: '0.95rem',
  position: 'relative',
  marginLeft: 8,
  marginRight: 8,
  '&:hover': {
    backgroundColor: 'transparent',
    color: '#d32f2f',
  },
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '40px',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    borderColor: 'rgba(0, 0, 0, 0.2)',
  },
  width: '100%',
  maxWidth: '220px',
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
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '100%',
    fontSize: '0.9rem',
  },
}));

const ActionContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: 24,
  top: '50%',
  transform: 'translateY(-50%)',
  display: 'flex',
  alignItems: 'center',
}));

const HeaderAlt = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();
  const isMobile = useMediaQuery('(max-width:900px)');
  const isSmall = useMediaQuery('(max-width:600px)');

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Latest News', path: '/news' },
    { name: 'Politics', path: '/politics' },
    { name: 'Business', path: '/business' },
    { name: 'Science', path: '/science' },
    { name: 'Opinion', path: '/opinion' },
    { name: 'Arts', path: '/arts' },
  ];

  // Format date in publication style: "MONDAY, MARCH 18, 2024"
  const formatDate = () => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('en-US', options).toUpperCase();
  };

  return (
    <div className="header-container">
      <StyledAppBar>
        <Container maxWidth="lg">
          {!isSmall && (
            <Box sx={{ position: 'relative', height: '36px', display: 'flex', alignItems: 'center' }}>
              <DateDisplay>{formatDate()}</DateDisplay>
              
              <ActionContainer>
                {!isMobile && (
                  <Search sx={{ mr: 2 }}>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search..."
                      inputProps={{ 'aria-label': 'search' }}
                    />
                  </Search>
                )}
                
                <IconButton color="inherit" size="small" sx={{ ml: 1 }} className="header-icon">
                  <NotificationsNoneIcon fontSize="small" />
                </IconButton>
                
                <IconButton 
                  color="inherit" 
                  size="small" 
                  sx={{ ml: 1 }}
                  component={Link}
                  to="/bookmarks"
                  className="header-icon"
                >
                  <BookmarkBorderIcon fontSize="small" />
                </IconButton>
                
                <IconButton 
                  color="inherit" 
                  size="small" 
                  sx={{ ml: 1 }}
                  component={Link}
                  to="/login"
                  className="header-icon"
                >
                  <AccountCircleIcon fontSize="small" />
                </IconButton>
              </ActionContainer>
            </Box>
          )}
          
          <LogoContainer>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <MainLogo variant="h1">The Journal</MainLogo>
              <SubLogo variant="subtitle1">INSIGHT & ANALYSIS</SubLogo>
            </Link>
          </LogoContainer>
          
          {isMobile ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 1 }}>
              <IconButton
                size="medium"
                aria-label="menu button"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                className="header-icon"
              >
                <MenuIcon />
                <Typography variant="body2" sx={{ ml: 1, fontSize: '0.9rem' }}>
                  MENU
                </Typography>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                classes={{
                  paper: 'mobile-menu-backdrop'
                }}
                PaperProps={{
                  style: {
                    maxHeight: '80vh',
                    width: '250px',
                  },
                }}
              >
                {isSmall && (
                  <Box sx={{ p: 2 }}>
                    <Search sx={{ width: '100%', maxWidth: '100%' }}>
                      <SearchIconWrapper>
                        <SearchIcon />
                      </SearchIconWrapper>
                      <StyledInputBase
                        placeholder="Search..."
                        inputProps={{ 'aria-label': 'search' }}
                        fullWidth
                      />
                    </Search>
                  </Box>
                )}
                
                <Divider />
                
                {navItems.map((item) => (
                  <MenuItem 
                    key={item.name} 
                    onClick={handleClose} 
                    component={Link} 
                    to={item.path}
                    selected={isActive(item.path)}
                    className="header-menu-item"
                  >
                    {item.name}
                  </MenuItem>
                ))}
                
                <Divider />
                
                <MenuItem onClick={handleClose} component={Link} to="/login" className="header-menu-item">
                  Login
                </MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/signup" className="header-menu-item">
                  Sign Up
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <NavContainer>
              {navItems.map((item) => (
                <NavButton
                  key={item.name}
                  active={isActive(item.path)}
                  component={Link}
                  to={item.path}
                >
                  {item.name}
                </NavButton>
              ))}
            </NavContainer>
          )}
        </Container>
      </StyledAppBar>
    </div>
  );
};

export default HeaderAlt; 