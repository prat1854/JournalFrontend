import React, { useState } from 'react';
import { Container, CssBaseline, Avatar, Typography, TextField, Button, Box, Paper } from '@mui/material';
import LockResetOutlinedIcon from '@mui/icons-material/LockResetOutlined';
import { useNavigate } from 'react-router-dom';

export default function ResetPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleResetPassword = (event) => {
    event.preventDefault();
    console.log(`Password reset link sent to ${email}`);
    alert('A password reset link has been sent to your email.');
    navigate('/login'); // Redirect back to login page
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper
          elevation={10}
          sx={{
            p: 4,
            borderRadius: 4,
            backdropFilter: 'blur(10px)',
            background: 'rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            color: 'white',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ bgcolor: '#ff4081', width: 60, height: 60, mb: 2 }}>
              <LockResetOutlinedIcon sx={{ fontSize: 32 }} />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', color: '#fff' }}>
              Reset Password
            </Typography>
            <Typography variant="body2" sx={{ color: '#dcdcdc', mb: 2, textAlign: 'center' }}>
              Enter your email below, and we will send you a link to reset your password.
            </Typography>
            <Box component="form" noValidate onSubmit={handleResetPassword} sx={{ width: '100%' }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Enter your email"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  sx: { borderRadius: '10px', backgroundColor: 'rgba(255, 255, 255, 0.8)' },
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  p: 1.5,
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  borderRadius: '10px',
                  background: 'linear-gradient(45deg, #ff4081, #ff80ab)',
                  transition: '0.3s',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #ff80ab, #ff4081)',
                  },
                }}
              >
                Send Reset Link
              </Button>
              <Button
                fullWidth
                variant="outlined"
                onClick={() => navigate('/login')}
                sx={{
                  borderRadius: '10px',
                  color: 'white',
                  borderColor: 'white',
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.2)',
                  },
                }}
              >
                Back to Login
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
