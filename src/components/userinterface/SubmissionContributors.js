import React, { useState, useEffect } from 'react';
import {
  Container, Box, Paper, Typography, Button, 
  Stepper, Step, StepLabel, Divider, useTheme,
  List, ListItem, ListItemText, Grid, Card,
  CardContent, TextField, ButtonGroup, CircularProgress
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import { useRequireAuth } from '../../utils/authUtils';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
}));

export default function SubmissionContributors() {
  const [contributors, setContributors] = useState([
    {
      name: 'Prateek Sunil',
      affiliation: 'MITS',
      isAuthor: true,
      isPrimaryContact: true
    }
  ]);
  const [activeStep, setActiveStep] = useState(2); // Third step in the stepper
  const theme = useTheme();
  const navigate = useNavigate();
  
  // Use our custom auth hook to require authentication
  const isAuthenticated = useRequireAuth(true, true);

  // If authentication is still being checked, show loading
  if (isAuthenticated === false) {
    return <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}><CircularProgress /></Box>;
  }

  const steps = [
    'Details', 'Upload Files', 'Contributors', 'For the Editors', 'Review'
  ];

  const saveLater = () => {
    // Save the submission data for later
    alert('Your submission has been saved for later.');
  };

  const handleBack = () => {
    navigate('/submission-upload');
  };

  const handleContinue = () => {
    // Navigate to the editors page
    navigate('/submission-editors');
  };

  const handleAddContributor = () => {
    // This would typically open a modal or form to add a new contributor
    alert('Add new contributor');
  };

  const handleEditContributor = (index) => {
    // This would typically open a modal or form to edit the contributor
    alert(`Edit contributor ${index}`);
  };

  const handleDeleteContributor = (index) => {
    setContributors(prevContributors => 
      prevContributors.filter((_, i) => i !== index)
    );
  };

  const handleSetPrimaryContact = (index) => {
    setContributors(prevContributors => 
      prevContributors.map((contributor, i) => ({
        ...contributor,
        isPrimaryContact: i === index
      }))
    );
  };

  const handleOrderContributors = () => {
    // This would typically open a modal to order contributors
    alert('Order contributors');
  };

  const handlePreviewContributors = () => {
    // This would typically show a preview of how contributors will appear
    alert('Preview contributors');
  };

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Button 
          component={Link} 
          to="/submissions" 
          startIcon={<ArrowBackIcon />}
          sx={{ 
            textTransform: 'none', 
            fontWeight: 'normal',
            color: theme.palette.text.secondary
          }}
        >
          Back to Submissions
        </Button>
      </Box>
      
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h4" component="h1">Make a Submission: Contributors</Typography>
        <Button 
          variant="outlined" 
          onClick={saveLater}
          sx={{ 
            borderRadius: '20px',
            textTransform: 'none',
          }}
        >
          Save for Later
        </Button>
      </Box>
      
      <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      
      <StyledPaper>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
            Contributors
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Add details for all of the contributors to this submission. Contributors added here will be sent 
            an email confirmation of the submission, as well as a copy of all editorial decisions recorded 
            against this submission.
          </Typography>
          
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            If a contributor can not be contacted by email, because they must remain anonymous or do not 
            have an email account, please do not enter a fake email address. You can add information 
            about this contributor in a message to the editor at a later step in the submission process.
          </Typography>
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" component="h3">
              Contributors
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button 
                variant="outlined" 
                onClick={handleOrderContributors}
                sx={{ 
                  borderRadius: '20px',
                  textTransform: 'none',
                }}
              >
                Order
              </Button>
              <Button 
                variant="outlined" 
                onClick={handlePreviewContributors}
                sx={{ 
                  borderRadius: '20px',
                  textTransform: 'none',
                }}
              >
                Preview
              </Button>
              <Button 
                variant="contained" 
                onClick={handleAddContributor}
                sx={{ 
                  borderRadius: '20px',
                  textTransform: 'none',
                }}
              >
                Add Contributor
              </Button>
            </Box>
          </Box>
          
          {contributors.map((contributor, index) => (
            <Card key={index} sx={{ mb: 2, border: '1px solid', borderColor: 'divider' }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Box>
                    <Typography variant="h6" component="h4">
                      {contributor.name}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography variant="body2" sx={{ 
                        backgroundColor: 'rgba(0,0,0,0.08)', 
                        px: 1, 
                        py: 0.5, 
                        borderRadius: 1
                      }}>
                        Author
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                      {contributor.affiliation}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    {contributor.isPrimaryContact && (
                      <Button 
                        variant="contained" 
                        color="primary"
                        size="small"
                        sx={{ 
                          borderRadius: '20px',
                          textTransform: 'none',
                        }}
                      >
                        Primary Contact
                      </Button>
                    )}
                    <Button 
                      variant="outlined" 
                      size="small"
                      onClick={() => handleEditContributor(index)}
                      sx={{ 
                        borderRadius: '20px',
                        textTransform: 'none',
                      }}
                    >
                      Edit
                    </Button>
                    <Button 
                      variant="outlined" 
                      color="error"
                      size="small"
                      onClick={() => handleDeleteContributor(index)}
                      sx={{ 
                        borderRadius: '20px',
                        textTransform: 'none',
                      }}
                    >
                      Delete
                    </Button>
                  </Box>
                </Box>
                {!contributor.isPrimaryContact && (
                  <Button 
                    variant="outlined" 
                    size="small"
                    onClick={() => handleSetPrimaryContact(index)}
                    sx={{ 
                      borderRadius: '20px',
                      textTransform: 'none',
                    }}
                  >
                    Set as Primary Contact
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
          
          <Divider sx={{ my: 4 }} />
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              variant="outlined"
              onClick={handleBack}
              sx={{ 
                px: 4,
                py: 1,
                borderRadius: '40px',
                textTransform: 'none',
                fontSize: '1rem'
              }}
            >
              Back
            </Button>
            
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Typography variant="body2" color="text.secondary" sx={{ alignSelf: 'center' }}>
                Last saved 13 minutes ago
              </Typography>
              
              <Button
                variant="outlined"
                onClick={saveLater}
                sx={{ 
                  px: 4,
                  py: 1,
                  borderRadius: '40px',
                  textTransform: 'none',
                  fontSize: '1rem'
                }}
              >
                Save for Later
              </Button>
              
              <Button
                variant="contained"
                color="primary"
                onClick={handleContinue}
                sx={{ 
                  px: 4,
                  py: 1,
                  borderRadius: '40px',
                  textTransform: 'none',
                  fontSize: '1rem'
                }}
              >
                Continue
              </Button>
            </Box>
          </Box>
        </Box>
      </StyledPaper>
    </Container>
  );
} 