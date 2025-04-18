import React, { useEffect } from 'react';
import { Container, Typography, Box, Grid, Paper, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import './styles.css';

// Animation styles
const fadeIn = {
  animation: 'fadeIn 0.8s ease-in-out',
  '@keyframes fadeIn': {
    '0%': { opacity: 0 },
    '100%': { opacity: 1 }
  }
};

const slideUp = {
  animation: 'slideUp 0.8s ease-in-out',
  '@keyframes slideUp': {
    '0%': { opacity: 0, transform: 'translateY(20px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' }
  }
};

const MemberPaper = styled(Paper)(({ theme, delay = 0 }) => ({
  padding: theme.spacing(3),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#f9f9f9',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
  },
  animationName: 'fadeIn',
  animationDuration: '0.8s',
  animationFillMode: 'both',
  animationDelay: `${delay}ms`,
}));

// Staggered animation for team members
const AnimatedBox = styled(Box)(({ theme, delay = 0 }) => ({
  animationName: 'slideUp',
  animationDuration: '0.8s',
  animationFillMode: 'both',
  animationDelay: `${delay}ms`,
}));

const EditorialTeam = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 5, ...fadeIn }}>
      <Typography 
        variant="h4" 
        gutterBottom 
        fontWeight={600} 
        textAlign="center" 
        mb={4}
        sx={{ 
          animationName: 'slideDown',
          animationDuration: '0.5s',
          animationFillMode: 'both'
        }}
      >
        Editorial Team
      </Typography>

      <AnimatedBox mb={6} delay={100}>
        <Typography 
          variant="h5" 
          gutterBottom 
          mb={3} 
          borderBottom="2px solid #1976d2" 
          pb={1}
        >
          Editor-in-Chief
        </Typography>
        <MemberPaper elevation={2} delay={200}>
          <Typography variant="h6" gutterBottom fontWeight={600}>
            Dr. Rajeev Kansal
          </Typography>
          <Typography variant="body1" paragraph>
            Former Professor, Department of Civil Engineering
          </Typography>
          <Typography variant="body1" paragraph>
            MITS-DU, Gwalior, India
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Area of Expertise:</strong> Construction Technology
          </Typography>
        </MemberPaper>
      </AnimatedBox>

      <AnimatedBox mb={6} delay={300}>
        <Typography 
          variant="h5" 
          gutterBottom 
          mb={3} 
          borderBottom="2px solid #1976d2" 
          pb={1}
        >
          Associate Editors
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <MemberPaper elevation={2} delay={400}>
              <Typography variant="h6" gutterBottom fontWeight={600}>
                Dr. M. K Trivedi
              </Typography>
              <Typography variant="body1" paragraph>
                Professor, Department of Civil Engineering
              </Typography>
              <Typography variant="body1" paragraph>
                MITS-DU, Gwalior, India
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Area of Expertise:</strong> Water Resource Engg., Soil Water Transportation
              </Typography>
            </MemberPaper>
          </Grid>
          <Grid item xs={12} md={6}>
            <MemberPaper elevation={2} delay={500}>
              <Typography variant="h6" gutterBottom fontWeight={600}>
                Dr. Kamal Sharma
              </Typography>
              <Typography variant="body1" paragraph>
                Director & CEO
              </Typography>
              <Typography variant="body1" paragraph>
                Lord-Tech Datus Solutions Pvt. Ltd.
              </Typography>
            </MemberPaper>
          </Grid>
        </Grid>
      </AnimatedBox>

      <AnimatedBox delay={600}>
        <Typography 
          variant="h5" 
          gutterBottom 
          mb={3} 
          borderBottom="2px solid #1976d2" 
          pb={1}
        >
          Editorial Board Members
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <MemberPaper elevation={2} delay={700}>
              <Typography variant="h6" gutterBottom fontWeight={600}>
                Dr. Prachi Singh
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Area of Expertise:</strong> Environmental Engineering
              </Typography>
              <Typography variant="body1" paragraph>
                MITS-DU, India
              </Typography>
            </MemberPaper>
          </Grid>
          <Grid item xs={12} md={4}>
            <MemberPaper elevation={2} delay={800}>
              <Typography variant="h6" gutterBottom fontWeight={600}>
                Dr. Abhilash Shukla
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Area of Expertise:</strong> Concrete Technology
              </Typography>
              <Typography variant="body1" paragraph>
                MITS-DU, India
              </Typography>
            </MemberPaper>
          </Grid>
        </Grid>
      </AnimatedBox>
    </Container>
  );
};

export default EditorialTeam; 