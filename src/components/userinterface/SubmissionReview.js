import React, { useState } from 'react';
import {
  Container, Box, Paper, Typography, Button, 
  Stepper, Step, StepLabel, Divider, useTheme,
  List, ListItem, ListItemText, CircularProgress,
  Card, CardContent, CardHeader, Avatar
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import { useRequireAuth } from '../../utils/authUtils';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DownloadIcon from '@mui/icons-material/Download';
import EditIcon from '@mui/icons-material/Edit';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
}));

export default function SubmissionReview() {
  const [activeStep, setActiveStep] = useState(4); // Fifth and final step in the stepper
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
    navigate('/submission-editors');
  };

  const handleSubmit = () => {
    // Submit the manuscript
    alert('Your submission has been successfully submitted!');
    navigate('/newsubmission');
  };

  // Mock data for review
  const submissionDetails = {
    title: "The Impact of Artificial Intelligence on Legal Decision Making",
    abstract: "This paper explores the intersection of AI and legal frameworks, examining how machine learning algorithms are being employed in judicial processes and the ethical implications thereof.",
    keywords: ["Artificial Intelligence", "Legal Ethics", "Judicial Process", "Machine Learning"],
    files: [
      { name: "manuscript.pdf", size: "2.4 MB", type: "Manuscript" },
      { name: "supplementary_data.xlsx", size: "1.1 MB", type: "Supplementary Material" }
    ],
    contributors: [
      { name: "Prateek Sunil", affiliation: "MITS", role: "Author, Primary Contact" },
      { name: "Jane Doe", affiliation: "Harvard Law School", role: "Co-Author" }
    ],
    editorComments: "This paper builds on our previous work in the field of AI ethics, specifically addressing recent developments in automated legal decision-making systems."
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
        <Typography variant="h4" component="h1">Make a Submission: Review</Typography>
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
            Review Your Submission
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Please review all details of your submission before finalizing. You can go back to previous steps to make changes if needed.
          </Typography>
          
          {/* Submission Details Section */}
          <Card sx={{ mb: 3, border: '1px solid', borderColor: 'divider' }}>
            <CardHeader
              title="Submission Details"
              action={
                <Button
                  startIcon={<EditIcon />}
                  sx={{ textTransform: 'none' }}
                  onClick={() => navigate('/newsubmission')}
                >
                  Edit
                </Button>
              }
              sx={{ borderBottom: '1px solid', borderColor: 'divider' }}
            />
            <CardContent>
              <Typography variant="h6" component="h3" gutterBottom>
                {submissionDetails.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                <strong>Abstract:</strong> {submissionDetails.abstract}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                {submissionDetails.keywords.map((keyword, index) => (
                  <Box 
                    key={index} 
                    sx={{ 
                      bgcolor: 'rgba(0,0,0,0.08)', 
                      px: 1.5, 
                      py: 0.5, 
                      borderRadius: 4,
                      fontSize: '0.875rem'
                    }}
                  >
                    {keyword}
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
          
          {/* Files Section */}
          <Card sx={{ mb: 3, border: '1px solid', borderColor: 'divider' }}>
            <CardHeader
              title="Files"
              action={
                <Button
                  startIcon={<EditIcon />}
                  sx={{ textTransform: 'none' }}
                  onClick={() => navigate('/submission-upload')}
                >
                  Edit
                </Button>
              }
              sx={{ borderBottom: '1px solid', borderColor: 'divider' }}
            />
            <CardContent>
              <List sx={{ p: 0 }}>
                {submissionDetails.files.map((file, index) => (
                  <ListItem 
                    key={index}
                    sx={{ 
                      px: 2, 
                      py: 1, 
                      borderBottom: index < submissionDetails.files.length - 1 ? '1px solid' : 'none', 
                      borderColor: 'divider',
                      '&:hover': { bgcolor: 'rgba(0,0,0,0.02)' } 
                    }}
                    secondaryAction={
                      <Button
                        size="small"
                        startIcon={<DownloadIcon />}
                        sx={{ textTransform: 'none' }}
                      >
                        Download
                      </Button>
                    }
                  >
                    <ListItemText
                      primary={file.name}
                      secondary={`${file.type} · ${file.size}`}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
          
          {/* Contributors Section */}
          <Card sx={{ mb: 3, border: '1px solid', borderColor: 'divider' }}>
            <CardHeader
              title="Contributors"
              action={
                <Button
                  startIcon={<EditIcon />}
                  sx={{ textTransform: 'none' }}
                  onClick={() => navigate('/submission-contributors')}
                >
                  Edit
                </Button>
              }
              sx={{ borderBottom: '1px solid', borderColor: 'divider' }}
            />
            <CardContent>
              <List sx={{ p: 0 }}>
                {submissionDetails.contributors.map((contributor, index) => (
                  <ListItem 
                    key={index}
                    sx={{ 
                      px: 2, 
                      py: 1.5, 
                      borderBottom: index < submissionDetails.contributors.length - 1 ? '1px solid' : 'none', 
                      borderColor: 'divider',
                      '&:hover': { bgcolor: 'rgba(0,0,0,0.02)' } 
                    }}
                  >
                    <Avatar sx={{ mr: 2, bgcolor: theme.palette.primary.main }}>
                      {contributor.name.charAt(0)}
                    </Avatar>
                    <ListItemText
                      primary={contributor.name}
                      secondary={
                        <>
                          <Typography component="span" variant="body2" color="text.primary">
                            {contributor.affiliation}
                          </Typography>
                          <Typography component="span" variant="body2" color="text.secondary" sx={{ display: 'block' }}>
                            {contributor.role}
                          </Typography>
                        </>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
          
          {/* Editor Comments Section */}
          <Card sx={{ mb: 3, border: '1px solid', borderColor: 'divider' }}>
            <CardHeader
              title="Comments for the Editor"
              action={
                <Button
                  startIcon={<EditIcon />}
                  sx={{ textTransform: 'none' }}
                  onClick={() => navigate('/submission-editors')}
                >
                  Edit
                </Button>
              }
              sx={{ borderBottom: '1px solid', borderColor: 'divider' }}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {submissionDetails.editorComments}
              </Typography>
            </CardContent>
          </Card>
          
          <Box sx={{ 
            p: 3, 
            mb: 4, 
            borderRadius: theme.shape.borderRadius, 
            bgcolor: 'rgba(76, 175, 80, 0.08)',
            display: 'flex',
            alignItems: 'center'
          }}>
            <CheckCircleIcon color="success" sx={{ mr: 2 }} />
            <Typography>
              All required information has been provided. Your submission is ready to be submitted.
            </Typography>
          </Box>
          
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
                Last saved 5 minutes ago
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
                onClick={handleSubmit}
                sx={{ 
                  px: 4,
                  py: 1,
                  borderRadius: '40px',
                  textTransform: 'none',
                  fontSize: '1rem'
                }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Box>
      </StyledPaper>
    </Container>
  );
} 