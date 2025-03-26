import React, { useState } from 'react';
import { Container, CssBaseline, Avatar, Typography, TextField, Button, FormControlLabel, Checkbox, Link, Grid, Box, Paper, InputAdornment, IconButton, Fade, Grow, Zoom } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';

export default function SignInPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #8a2387 0%, #e94057 50%, #f27121 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Background elements with CSS animations */}
      <Box
        sx={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          top: '-50px',
          right: '-50px',
          animation: 'pulse 8s infinite ease-in-out',
          '@keyframes pulse': {
            '0%': { opacity: 0.3, transform: 'scale(1)' },
            '50%': { opacity: 0.5, transform: 'scale(1.1)' },
            '100%': { opacity: 0.3, transform: 'scale(1)' }
          }
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          bottom: '-100px',
          left: '-100px',
          animation: 'float 10s infinite ease-in-out',
          '@keyframes float': {
            '0%': { opacity: 0.3, transform: 'scale(1)' },
            '50%': { opacity: 0.5, transform: 'scale(1.2)' },
            '100%': { opacity: 0.3, transform: 'scale(1)' }
          }
        }}
      />

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Fade in={true} timeout={800}>
          <Paper
            elevation={10}
            sx={{
              p: 5,
              borderRadius: 4,
              backdropFilter: 'blur(16px)',
              background: 'rgba(255, 255, 255, 0.2)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              color: 'white',
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                zIndex: 1,
              }}
            >
              <Zoom in={true} style={{ transitionDelay: '300ms' }}>
                <Avatar
                  sx={{ 
                    bgcolor: 'transparent', 
                    width: 70, 
                    height: 70, 
                    mb: 2,
                    background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  <LockOutlinedIcon sx={{ fontSize: 32, color: 'white' }} />
                </Avatar>
              </Zoom>
              <Fade in={true} style={{ transitionDelay: '500ms' }}>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 'bold', 
                    color: '#fff',
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                    mb: 1
                  }}
                >
                  Welcome Back
                </Typography>
              </Fade>
              <Fade in={true} style={{ transitionDelay: '600ms' }}>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.9)', 
                    mb: 4,
                    textAlign: 'center' 
                  }}
                >
                  Enter your credentials to access your account
                </Typography>
              </Fade>
              <Box 
                component="form" 
                noValidate 
                sx={{ width: '100%' }}
              >
                <Fade in={true} style={{ transitionDelay: '700ms' }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon sx={{ color: 'rgba(255, 255, 255, 0.7)' }} />
                        </InputAdornment>
                      ),
                      sx: { 
                        borderRadius: '12px', 
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        color: 'white',
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'transparent'
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'rgba(255, 255, 255, 0.5)'
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'rgba(255, 255, 255, 0.8)'
                        }
                      },
                    }}
                    InputLabelProps={{
                      sx: { color: 'rgba(255, 255, 255, 0.7)' }
                    }}
                  />
                </Fade>
                <Fade in={true} style={{ transitionDelay: '800ms' }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    autoComplete="current-password"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
                          >
                            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                          </IconButton>
                        </InputAdornment>
                      ),
                      sx: { 
                        borderRadius: '12px', 
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        color: 'white',
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'transparent'
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'rgba(255, 255, 255, 0.5)'
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'rgba(255, 255, 255, 0.8)'
                        }
                      },
                    }}
                    InputLabelProps={{
                      sx: { color: 'rgba(255, 255, 255, 0.7)' }
                    }}
                  />
                </Fade>
                <Fade in={true} style={{ transitionDelay: '900ms' }}>
                  <FormControlLabel
                    control={<Checkbox sx={{ 
                      color: 'rgba(255, 255, 255, 0.7)',
                      '&.Mui-checked': {
                        color: 'white',
                      },
                    }} />}
                    label="Remember me"
                    sx={{ color: 'rgba(255, 255, 255, 0.9)', my: 1 }}
                  />
                </Fade>
                <Grow in={true} style={{ transitionDelay: '1000ms' }}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 3,
                      p: 1.8,
                      fontSize: '1rem',
                      fontWeight: 'bold',
                      letterSpacing: '1px',
                      borderRadius: '12px',
                      background: 'linear-gradient(90deg, #f09433, #e6683c, #dc2743)',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                      textTransform: 'none',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: 'linear-gradient(90deg, #dc2743, #e6683c, #f09433)',
                        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
                        transform: 'scale(1.03)'
                      },
                      '&:active': {
                        transform: 'scale(0.98)'
                      }
                    }}
                  >
                    Sign In
                  </Button>
                </Grow>
                <Fade in={true} style={{ transitionDelay: '1100ms' }}>
                  <Grid 
                    container 
                    spacing={1}
                  >
                    <Grid item xs={12} sm={6} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                      <Link 
                        component="button" 
                        variant="body2" 
                        onClick={() => navigate('/reset-password')} 
                        sx={{ 
                          color: 'rgba(255, 255, 255, 0.9)',
                          textDecoration: 'none',
                          '&:hover': {
                            color: 'white',
                            textDecoration: 'underline'
                          }
                        }}
                      >
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ textAlign: { xs: 'center', sm: 'right' } }}>
                      <Link 
                        variant="body2" 
                        onClick={() => navigate('/signup')}  
                        sx={{ 
                          color: 'rgba(255, 255, 255, 0.9)',
                          textDecoration: 'none',
                          cursor: 'pointer',
                          '&:hover': {
                            color: 'white',
                            textDecoration: 'underline'
                          }
                        }}
                      >
                        New user? Sign up
                      </Link>
                    </Grid>
                  </Grid>
                </Fade>
              </Box>
            </Box>
          </Paper>
        </Fade>
      </Container>
    </Box>
  );
}
