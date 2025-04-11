import React from 'react';
import { Container, Typography, Box, Grid, Paper, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';

const MemberPaper = styled(Paper)(({ theme }) => ({
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
}));

const EditorialTeam = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom fontWeight={600} textAlign="center" mb={4}>
        Editorial Team
      </Typography>

      <Box mb={6}>
        <Typography variant="h5" gutterBottom mb={3} borderBottom="2px solid #1976d2" pb={1}>
          Editor-in-Chief
        </Typography>
        <MemberPaper elevation={2}>
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
      </Box>

      <Box mb={6}>
        <Typography variant="h5" gutterBottom mb={3} borderBottom="2px solid #1976d2" pb={1}>
          Associate Editors
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <MemberPaper elevation={2}>
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
            <MemberPaper elevation={2}>
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
      </Box>

      <Box>
        <Typography variant="h5" gutterBottom mb={3} borderBottom="2px solid #1976d2" pb={1}>
          Editorial Board Members
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <MemberPaper elevation={2}>
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
            <MemberPaper elevation={2}>
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
      </Box>
    </Container>
  );
};

export default EditorialTeam; 