import React, { useState } from 'react';
import {
  Container, CssBaseline, Avatar, Typography, TextField, Button, Box, Paper, 
  FormControlLabel, Checkbox, Grid, InputAdornment, IconButton, Fade, Zoom, Grow, Stepper, Step, StepLabel
} from '@mui/material';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BusinessIcon from '@mui/icons-material/Business';
import PublicIcon from '@mui/icons-material/Public';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';

export default function SignUpPage() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [formData, setFormData] = useState({
    givenName: '',
    familyName: '',
    affiliation: '',
    country: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    agreeToPrivacy: false,
  });

  const [errors, setErrors] = useState({});

  const steps = ['Personal Information', 'Account Credentials', 'Privacy Settings'];

  // Handle Input Changes
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  // Validate current step fields
  const validateStep = (step) => {
    let tempErrors = {};
    let isValid = true;

    if (step === 0) {
      if (!formData.givenName) {
        tempErrors.givenName = 'Required';
        isValid = false;
      }
      if (!formData.affiliation) {
        tempErrors.affiliation = 'Required';
        isValid = false;
      }
      if (!formData.country) {
        tempErrors.country = 'Required';
        isValid = false;
      }
    } else if (step === 1) {
      if (!formData.email) {
        tempErrors.email = 'Required';
        isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        tempErrors.email = 'Invalid email format';
        isValid = false;
      }
      if (!formData.username) {
        tempErrors.username = 'Required';
        isValid = false;
      }
      if (!formData.password) {
        tempErrors.password = 'Required';
        isValid = false;
      } else if (formData.password.length < 8) {
        tempErrors.password = 'Password must be at least 8 characters';
        isValid = false;
      }
      if (!formData.confirmPassword) {
        tempErrors.confirmPassword = 'Required';
        isValid = false;
      }
      if (formData.password !== formData.confirmPassword) {
        tempErrors.confirmPassword = 'Passwords do not match';
        isValid = false;
      }
    } else if (step === 2) {
      if (!formData.agreeToPrivacy) {
        tempErrors.agreeToPrivacy = 'You must agree to privacy policy';
        isValid = false;
      }
    }

    setErrors(tempErrors);
    return isValid;
  };

  // Handle Form Submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateStep(2)) {
      console.log('Form submitted successfully:', formData);
      // Here you would typically make an API call to register the user
      // For now we'll just show a success message and redirect
      alert('Account created successfully!');
      navigate('/login');
    }
  };

  const handleNext = () => {
    if (validateStep(activeStep)) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // Render step content
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Fade in={true} timeout={500}>
            <Box>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Given Name *"
                name="givenName"
                value={formData.givenName}
                onChange={handleChange}
                error={!!errors.givenName}
                helperText={errors.givenName}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleIcon sx={{ color: 'rgba(255, 255, 255, 0.7)' }} />
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
              <TextField
                margin="normal"
                fullWidth
                label="Family Name"
                name="familyName"
                value={formData.familyName}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleIcon sx={{ color: 'rgba(255, 255, 255, 0.7)' }} />
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
              <TextField
                margin="normal"
                required
                fullWidth
                label="Affiliation *"
                name="affiliation"
                value={formData.affiliation}
                onChange={handleChange}
                error={!!errors.affiliation}
                helperText={errors.affiliation}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <BusinessIcon sx={{ color: 'rgba(255, 255, 255, 0.7)' }} />
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
              <TextField
                margin="normal"
                required
                fullWidth
                label="Country *"
                name="country"
                value={formData.country}
                onChange={handleChange}
                error={!!errors.country}
                helperText={errors.country}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PublicIcon sx={{ color: 'rgba(255, 255, 255, 0.7)' }} />
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
            </Box>
          </Fade>
        );
      case 1:
        return (
          <Fade in={true} timeout={500}>
            <Box>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Email *"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
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
              <TextField
                margin="normal"
                required
                fullWidth
                label="Username *"
                name="username"
                value={formData.username}
                onChange={handleChange}
                error={!!errors.username}
                helperText={errors.username}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleIcon sx={{ color: 'rgba(255, 255, 255, 0.7)' }} />
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
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password *"
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon sx={{ color: 'rgba(255, 255, 255, 0.7)' }} />
                    </InputAdornment>
                  ),
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
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password *"
                type={showConfirmPassword ? 'text' : 'password'}
                value={formData.confirmPassword}
                onChange={handleChange}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon sx={{ color: 'rgba(255, 255, 255, 0.7)' }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
                      >
                        {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
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
            </Box>
          </Fade>
        );
      case 2:
        return (
          <Fade in={true} timeout={500}>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1" sx={{ color: '#fff', mb: 3, lineHeight: 1.7 }}>
                By signing up, you agree to our privacy policy. Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
              </Typography>
              
              <FormControlLabel 
                control={
                  <Checkbox
                    checked={formData.agreeToPrivacy}
                    onChange={handleChange}
                    name="agreeToPrivacy"
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.7)',
                      '&.Mui-checked': {
                        color: 'white',
                      },
                    }}
                  />
                } 
                label="Yes, I agree to have my data collected and stored according to the privacy statement."
                sx={{ color: 'white', display: 'flex', alignItems: 'flex-start' }}
              />
              {errors.agreeToPrivacy && (
                <Typography sx={{ color: '#ff867c', fontSize: '0.8rem', mt: 1 }}>
                  {errors.agreeToPrivacy}
                </Typography>
              )}
            </Box>
          </Fade>
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Background animated elements */}
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

      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Fade in={true} timeout={800}>
          <Paper
            elevation={10}
            sx={{
              p: 4,
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
                    background: 'linear-gradient(45deg, #43cea2, #185a9d)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  <PersonAddOutlinedIcon sx={{ fontSize: 32, color: 'white' }} />
                </Avatar>
              </Zoom>
              <Fade in={true} style={{ transitionDelay: '500ms' }}>
                <Typography 
                  component="h1" 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 'bold', 
                    color: '#fff',
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                    mb: 1
                  }}
                >
                  Create Account
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
                  Join our community in just a few steps
                </Typography>
              </Fade>

              {/* Stepper */}
              <Fade in={true} style={{ transitionDelay: '700ms' }}>
                <Box sx={{ width: '100%', mb: 4 }}>
                  <Stepper 
                    activeStep={activeStep} 
                    alternativeLabel
                    sx={{
                      '& .MuiStepLabel-root .Mui-completed': {
                        color: 'white', 
                      },
                      '& .MuiStepLabel-root .Mui-active': {
                        color: 'white', 
                      },
                      '& .MuiStepLabel-label': {
                        color: 'rgba(255, 255, 255, 0.7)',
                      },
                      '& .MuiStepLabel-label.Mui-active': {
                        color: 'white',
                      },
                      '& .MuiStepIcon-root': {
                        color: 'rgba(255, 255, 255, 0.3)',
                      },
                      '& .MuiStepIcon-root.Mui-active': {
                        color: 'white',
                      },
                      '& .MuiStepIcon-root.Mui-completed': {
                        color: 'rgba(255, 255, 255, 0.8)',
                      },
                      '& .MuiStepConnector-line': {
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                      }
                    }}
                  >
                    {steps.map((label) => (
                      <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                </Box>
              </Fade>

              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ width: '100%' }}>
                {getStepContent(activeStep)}
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    variant="outlined"
                    sx={{
                      px: 3,
                      borderRadius: '10px',
                      color: 'white',
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                      '&:hover': {
                        borderColor: 'white',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)'
                      }
                    }}
                  >
                    Back
                  </Button>
                  <Box>
                    <Button
                      onClick={() => navigate('/login')}
                      sx={{
                        mr: 1,
                        px: 3,
                        borderRadius: '10px',
                        color: 'rgba(255, 255, 255, 0.9)',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.1)'
                        }
                      }}
                    >
                      Cancel
                    </Button>
                    {activeStep === steps.length - 1 ? (
                      <Grow in={true} style={{ transitionDelay: '1000ms' }}>
                        <Button
                          type="submit"
                          variant="contained"
                          sx={{
                            px: 3,
                            fontSize: '1rem',
                            borderRadius: '10px',
                            background: 'linear-gradient(90deg, #43cea2, #185a9d)',
                            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                            textTransform: 'none',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              background: 'linear-gradient(90deg, #185a9d, #43cea2)',
                              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
                              transform: 'scale(1.03)'
                            },
                          }}
                        >
                          Sign Up
                        </Button>
                      </Grow>
                    ) : (
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{
                          px: 3,
                          fontSize: '1rem',
                          borderRadius: '10px',
                          background: 'linear-gradient(90deg, #43cea2, #185a9d)',
                          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                          textTransform: 'none',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            background: 'linear-gradient(90deg, #185a9d, #43cea2)',
                            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
                            transform: 'scale(1.03)'
                          },
                        }}
                      >
                        Next
                      </Button>
                    )}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Fade>
      </Container>
    </Box>
  );
}
