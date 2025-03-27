import React, { useState } from 'react';
import {
  Container, CssBaseline, Avatar, Typography, TextField, Button, Box, Paper, 
  FormControlLabel, Checkbox, Grid, InputAdornment, IconButton, Link
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
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [formData, setFormData] = useState({
    givenName: '',
    familyName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    affiliation: '',
    country: '',
    orcidId: '',
    areasOfInterest: '',
    agreeToPrivacy: false,
  });

  const [errors, setErrors] = useState({});

  // Handle Input Changes
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  // Validate form fields
  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.givenName) {
      tempErrors.givenName = 'Required';
      isValid = false;
    }
    if (!formData.familyName) {
      tempErrors.familyName = 'Required';
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
    if (!formData.agreeToPrivacy) {
      tempErrors.agreeToPrivacy = 'You must agree to privacy policy';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  // Handle Form Submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log('Form submitted successfully:', formData);
      // Here you would typically make an API call to register the user
      // For now we'll just show a success message and redirect
      alert('Account created successfully!');
      navigate('/login');
    }
  };

  return (
    <Box
      sx={{
        padding: '20px 0',
        background: '#f5f5f5',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 2,
            background: '#ffffff',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar
              sx={{
                m: 1,
                bgcolor: '#1976d2',
                width: 56,
                height: 56,
              }}
            >
              <PersonAddOutlinedIcon sx={{ fontSize: 32 }} />
            </Avatar>
            
            <Typography 
              component="h1" 
              variant="h5" 
              sx={{ 
                mb: 1,
                fontWeight: 500,
                color: '#333333'
              }}
            >
              Create Account
            </Typography>
            
            <Typography 
              variant="body2" 
              sx={{ 
                mb: 3,
                color: '#666666',
                textAlign: 'center' 
              }}
            >
              Join our academic community
            </Typography>

            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ width: '100%' }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="First Name *"
                    name="givenName"
                    value={formData.givenName}
                    onChange={handleChange}
                    error={!!errors.givenName}
                    helperText={errors.givenName}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircleIcon color="primary" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Last Name *"
                    name="familyName"
                    value={formData.familyName}
                    onChange={handleChange}
                    error={!!errors.familyName}
                    helperText={errors.familyName}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircleIcon color="primary" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
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
                          <EmailIcon color="primary" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
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
                          <AccountCircleIcon color="primary" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
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
                          <LockIcon color="primary" />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
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
                          <LockIcon color="primary" />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowConfirmPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Affiliation / Institution *"
                    name="affiliation"
                    value={formData.affiliation}
                    onChange={handleChange}
                    error={!!errors.affiliation}
                    helperText={errors.affiliation}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <BusinessIcon color="primary" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
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
                          <PublicIcon color="primary" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="ORCID ID (Optional)"
                    name="orcidId"
                    value={formData.orcidId}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircleIcon color="primary" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Areas of Interest"
                    name="areasOfInterest"
                    value={formData.areasOfInterest}
                    onChange={handleChange}
                    placeholder="e.g., Machine Learning, Climate Science"
                    helperText="For reviewer/editor matching"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <BusinessIcon color="primary" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" sx={{ color: '#666666', mt: 1, mb: 2, lineHeight: 1.5 }}>
                    By signing up, you agree to our privacy policy. Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
                  </Typography>
                  
                  <FormControlLabel 
                    control={
                      <Checkbox
                        checked={formData.agreeToPrivacy}
                        onChange={handleChange}
                        name="agreeToPrivacy"
                        color="primary"
                      />
                    } 
                    label="Yes, I agree to have my data collected and stored according to the privacy statement."
                    sx={{ display: 'flex', alignItems: 'flex-start' }}
                  />
                  {errors.agreeToPrivacy && (
                    <Typography sx={{ color: 'error.main', fontSize: '0.8rem', mt: 1 }}>
                      {errors.agreeToPrivacy}
                    </Typography>
                  )}
                </Grid>
              </Grid>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                <Button
                  onClick={() => navigate('/login')}
                  sx={{
                    textTransform: 'none',
                  }}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    textTransform: 'none',
                    fontSize: '0.95rem',
                  }}
                >
                  Sign Up
                </Button>
              </Box>
              
              <Box sx={{ mt: 3, textAlign: 'center' }}>
                <Typography variant="body2" color="textSecondary">
                  Already have an account?{' '}
                  <Link 
                    component="button" 
                    variant="body2" 
                    onClick={() => navigate('/login')}
                  >
                    Sign in
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
