import React, { useState, useEffect } from "react";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  List, 
  ListItem, 
  ListItemText, 
  IconButton, 
  Menu, 
  MenuItem, 
  Box,
  TextField,
  InputAdornment,
  Fade,
  Paper,
  Divider,
  useMediaQuery
} from '@mui/material';
import { 
  Search as SearchIcon, 
  KeyboardArrowDown,
  Article, 
  Description, 
  Copyright,
  Menu as MenuIcon, 
  AccountCircle,
  VerifiedUser
} from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';
import { isLoggedIn } from '../../utils/authUtils';

// Custom animation styles
const fadeIn = {
  animation: 'fadeIn 0.8s ease-in-out',
  '@keyframes fadeIn': {
    '0%': { opacity: 0 },
    '100%': { opacity: 1 }
  }
};

const slideDown = {
  animation: 'slideDown 0.5s ease-in-out',
  '@keyframes slideDown': {
    '0%': { opacity: 0, transform: 'translateY(-20px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' }
  }
};

const slideUp = {
  animation: 'slideUp 0.8s ease-in-out',
  '@keyframes slideUp': {
    '0%': { opacity: 0, transform: 'translateY(20px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' }
  }
};

const slideRight = {
  animation: 'slideRight 0.8s ease-in-out',
  '@keyframes slideRight': {
    '0%': { opacity: 0, transform: 'translateX(-20px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' }
  }
};

const slideLeft = {
  animation: 'slideLeft 0.8s ease-in-out',
  '@keyframes slideLeft': {
    '0%': { opacity: 0, transform: 'translateX(20px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' }
  }
};

// ======== START: STYLED HEADER COMPONENT ========
// This section contains the modern header styling based on Header.jsx
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
  transition: 'background-color 0.3s ease-in-out',
  position: 'static',
  width: '100%',
  zIndex: 1100,
}));

const ScrolledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(8px)',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
  borderBottom: 'none',
  transition: 'all 0.3s ease-in-out',
  position: 'static',
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

const StyledInputBase = styled(TextField)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
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
// ======== END: STYLED HEADER COMPONENT ========

const MainContent = () => {
  const navigate = useNavigate();
  
  const handleSubmissionClick = () => {
    if (!isLoggedIn()) {
      alert('Please login to make a submission');
      navigate('/login');
    } else {
      navigate('/newsubmission');
    }
  };

  return (
    <Box 
      sx={{ ...slideUp, animationDelay: '300ms' }}
      component={Paper} 
      elevation={2} 
      style={{ padding: 32, borderRadius: 8 }}
    >
      <Typography 
        variant="h3" 
        component="h1" 
        gutterBottom 
        color="primary"
        sx={{ 
          fontWeight: 700, 
          position: 'relative',
          '&:after': {
            content: '""',
            position: 'absolute',
            left: 0,
            bottom: -5,
            height: 4,
            width: 120,
            backgroundColor: '#FFD700',
          }
        }}
      >
        Aims and scope
      </Typography>
      
      <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
        The Global Journal of Construction Management and Engineering (GJCME) serves as a premier scholarly platform for advancing knowledge in the fields of construction management and engineering. Our mission is to foster rigorous research and critical discourse in these domains, providing a forum for high-quality original research papers, case studies, and reviews that contribute to both disciplines and their sub-disciplines.
      </Typography>
      
      <Typography variant="h4" component="h2" gutterBottom color="primary" sx={{ fontWeight: 600, mt: 4 }}>
        Scope and Coverage
      </Typography>
      
      <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
        GJCME publishes original research that advances the understanding and practice of construction management and engineering. We welcome submissions that demonstrate academic rigor, practical relevance, and contribute to the advancement of knowledge in these fields.
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item xs={12} md={4}>
          <Card 
            raised 
            sx={{ 
              height: '100%', 
              borderTop: '4px solid #3f51b5',
              ...slideRight,
              animationDelay: '500ms'
            }}
          >
            <CardContent>
              <Typography variant="h5" component="h3" gutterBottom color="primary" sx={{ fontWeight: 600 }}>
                Management Studies
              </Typography>
              <List>
                <ListItem sx={{ py: 1 }}>
                  <ListItemText primary="Organizational behavior, strategic management, and leadership in construction" />
                </ListItem>
                <ListItem sx={{ py: 1 }}>
                  <ListItemText primary="Human resource management, marketing, and operations in construction projects" />
                </ListItem>
                <ListItem sx={{ py: 1 }}>
                  <ListItemText primary="Entrepreneurship, innovation, and business ethics in construction" />
                </ListItem>
                <ListItem sx={{ py: 1 }}>
                  <ListItemText primary="Project management, supply chain, and technology management" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card 
            raised 
            sx={{ 
              height: '100%', 
              borderTop: '4px solid #f50057',
              ...slideRight,
              animationDelay: '700ms'
            }}
          >
            <CardContent>
              <Typography variant="h5" component="h3" gutterBottom color="primary" sx={{ fontWeight: 600 }}>
                Engineering Studies
              </Typography>
              <List>
                <ListItem sx={{ py: 1 }}>
                  <ListItemText primary="Construction materials and methods" />
                </ListItem>
                <ListItem sx={{ py: 1 }}>
                  <ListItemText primary="Structural engineering and design" />
                </ListItem>
                <ListItem sx={{ py: 1 }}>
                  <ListItemText primary="Geotechnical and environmental engineering" />
                </ListItem>
                <ListItem sx={{ py: 1 }}>
                  <ListItemText primary="Construction safety and risk management" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card 
            raised 
            sx={{ 
              height: '100%', 
              borderTop: '4px solid #4caf50',
              ...slideRight,
              animationDelay: '900ms'
            }}
          >
            <CardContent>
              <Typography variant="h5" component="h3" gutterBottom color="primary" sx={{ fontWeight: 600 }}>
                Interdisciplinary Research
              </Typography>
              <List>
                <ListItem sx={{ py: 1 }}>
                  <ListItemText primary="Integration of management and engineering practices" />
                </ListItem>
                <ListItem sx={{ py: 1 }}>
                  <ListItemText primary="Innovative construction technologies and methodologies" />
                </ListItem>
                <ListItem sx={{ py: 1 }}>
                  <ListItemText primary="Sustainable construction and green building practices" />
                </ListItem>
                <ListItem sx={{ py: 1 }}>
                  <ListItemText primary="Digital transformation in construction" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ mt: 5, p: 3, bgcolor: '#f8f9fa', borderRadius: 2 }}>
        <Typography variant="h4" component="h2" gutterBottom color="primary" sx={{ fontWeight: 600 }}>
          Publication Information
        </Typography>
        
        <Grid container spacing={3} sx={{ mt: 1 }}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="h3" gutterBottom color="textSecondary">
              Publication Frequency
            </Typography>
            <Typography variant="body1">
              Four volumes per year (March, June, October and December)
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="h3" gutterBottom color="textSecondary">
              Language
            </Typography>
            <Typography variant="body1">
              English
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="h3" gutterBottom color="textSecondary">
              Open Access Policy
            </Typography>
            <Typography variant="body1">
              We follow a full open access policy with no submission or publication fees, ensuring free and unrestricted access to all published content.
            </Typography>
          </Grid>
        </Grid>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button 
            variant="contained" 
            color="primary"
            size="large"
            onClick={handleSubmissionClick}
            sx={{ 
              px: 4, 
              py: 1.5, 
              borderRadius: '40px',
              textTransform: 'none',
              fontWeight: 600,
              fontSize: '1.1rem',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              '&:hover': {
                boxShadow: '0 6px 16px rgba(0,0,0,0.2)'
              }
            }}
          >
            Make a Submission
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const Sidebar = () => {
  return (
    <Box sx={{ ...slideLeft, animationDelay: '400ms' }}>
      <Card elevation={3} sx={{ mb: 4, overflow: 'visible', borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600, color: '#1E3A8A' }}>
            Journal Information
          </Typography>
          
          <Box sx={{ 
            height: 4, 
            width: 120, 
            bgcolor: '#FFD700', 
            mb: 3, 
            borderRadius: 1,
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}></Box>
          
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            mb: 3, 
            p: 2, 
            bgcolor: '#f5f7fa', 
            borderRadius: 2 
          }}>
            <Box 
              component="img" 
              src="/cover.jpg" 
              alt="Journal Cover" 
              sx={{ 
                maxWidth: '100%', 
                height: 'auto', 
                borderRadius: 1,
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.03)'
                }
              }} 
            />
          </Box>
          
          <Box sx={{ mt: 2 }}>
            <Typography sx={{ mb: 1.5 }}>
              <Box component="span" sx={{ fontWeight: 600, color: '#1E3A8A', mr: 1 }}>ISSN:</Box>
              0975 9972
            </Typography>
            
            <Typography>
              <Box component="span" sx={{ fontWeight: 600, color: '#1E3A8A', mr: 1 }}>Editor-in-Chief:</Box>
              Dr. Rajeev Kansal
            </Typography>
          </Box>
        </CardContent>
      </Card>
      
      <Card elevation={3} sx={{ borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600, color: '#1E3A8A' }}>
            Author Resources
          </Typography>
          
          <Box sx={{ 
            height: 4, 
            width: 120, 
            bgcolor: '#FFD700', 
            mb: 3, 
            borderRadius: 1,
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}></Box>
          
          <List>
            <ListItem 
              button 
              component={Link} 
              to="/AuthorGuidelines"
              sx={{
                borderRadius: 1,
                mb: 1,
                transition: 'all 0.2s ease',
                '&:hover': {
                  bgcolor: '#f0f4fa',
                  transform: 'translateX(5px)'
                }
              }}
            >
              <Article sx={{ mr: 2, color: '#1E3A8A' }} />
              <ListItemText primary="Author Guidelines" />
            </ListItem>
            
            <ListItem 
              button 
              component={Link} 
              to="/SubmissionTemplate"
              sx={{
                borderRadius: 1,
                mb: 1,
                transition: 'all 0.2s ease',
                '&:hover': {
                  bgcolor: '#f0f4fa',
                  transform: 'translateX(5px)'
                }
              }}
            >
              <Description sx={{ mr: 2, color: '#1E3A8A' }} />
              <ListItemText primary="Submission Template" />
            </ListItem>
            
            <ListItem 
              button 
              component={Link} 
              to="/ResearchEthicsGuidelines"
              sx={{
                borderRadius: 1,
                mb: 1,
                transition: 'all 0.2s ease',
                '&:hover': {
                  bgcolor: '#f0f4fa',
                  transform: 'translateX(5px)'
                }
              }}
            >
              <VerifiedUser sx={{ mr: 2, color: '#1E3A8A' }} />
              <ListItemText primary="Research Ethics Guidelines" />
            </ListItem>
            
            <ListItem 
              button 
              component="a" 
              href="/copyright.pdf" 
              target="_blank"
              sx={{
                borderRadius: 1,
                transition: 'all 0.2s ease',
                '&:hover': {
                  bgcolor: '#f0f4fa',
                  transform: 'translateX(5px)'
                }
              }}
            >
              <Copyright sx={{ mr: 2, color: '#1E3A8A' }} />
              <ListItemText primary="Copyright Form" />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: '#1E3A8A', 
        color: 'white', 
        mt: 6, 
        py: 4,
        boxShadow: '0 -4px 10px rgba(0,0,0,0.05)',
        ...fadeIn,
        animationDelay: '600ms'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
              Global Journal of Construction Management and Engineering
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 600, lineHeight: 1.8 }}>
              A premier scholarly platform for advancing knowledge in construction management and engineering, fostering rigorous research and critical discourse in these vital fields.
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
              Contact Us
            </Typography>
            <Typography variant="body1" paragraph sx={{ mb: 1 }}>
              <Link to="mailto:info@lordtechdatus.com" style={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                Email: info@lordtechdatus.com
              </Link>
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: 18, fontWeight: 500, mb: 1 }}>
              Phone: +91 99817 56433
            </Typography>
            <Typography variant="body1">
              Address: G1, Akansha Apartment, Patel Nagar, City Centre, Gwalior, Near Raj Rajeshwari Apartment, 474002
            </Typography>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 3, bgcolor: 'rgba(255,255,255,0.2)' }} />
        
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          &copy; 2024 Global Journal of Construction Management and Engineering. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

const App = () => {
  return (
    <Box sx={{ ...fadeIn }}>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <MainContent />
          </Grid>
          <Grid item xs={12} md={4}>
            <Sidebar />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
};

export default App;