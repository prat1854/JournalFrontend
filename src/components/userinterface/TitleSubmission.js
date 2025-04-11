import React, { useState, useEffect } from 'react';
import {
  Container, Box, Paper, Typography, TextField, Button, Checkbox,
  FormControlLabel, FormGroup, FormHelperText, Grid, Divider,
  Alert, CircularProgress, IconButton, Menu, MenuItem
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useRequireAuth } from '../../utils/authUtils';
import axios from 'axios';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import TextFormatIcon from '@mui/icons-material/TextFormat';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 600,
  marginBottom: theme.spacing(3),
  color: theme.palette.primary.main,
}));

export default function TitleSubmission() {
  const [title, setTitle] = useState('');
  const [checklist, setChecklist] = useState({
    guidelines: false,
    notPublished: false,
    references: false,
    tables: false,
    permissions: false
  });
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  
  // Use our custom auth hook to require authentication with alert
  const isAuthenticated = useRequireAuth(true, true);

  // If not authenticated, the hook will redirect and we can show loading
  if (!isAuthenticated) {
    return <CircularProgress />;
  }

  const handleChecklistChange = (event) => {
    setChecklist({
      ...checklist,
      [event.target.name]: event.target.checked
    });
  };
  
  const handleFormatClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const validateForm = () => {
    const newErrors = {};
    if (!title.trim()) {
      newErrors.title = 'Title is required';
    }
    
    // Check if all checklist items are checked
    const allChecklistChecked = Object.values(checklist).every(value => value === true);
    if (!allChecklistChecked) {
      newErrors.checklist = 'All submission requirements must be met';
    }
    
    if (!privacyConsent) {
      newErrors.privacyConsent = 'You must agree to the privacy statement';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    setSubmissionError(null);
    
    try {
      const response = await axios.post('http://localhost:5000/api/submissions/submit', {
        title,
        submitted_by: 1
      });
    
      console.log('✅ Response from backend:', response.data);
      // Navigate to the submission detail page instead of showing an alert
      navigate('/submission-detail');
    } catch (error) {
     // console.error('❌ Submission error details:', error);
     // console.error('❌ Error response data:', error.response?.data);
      setSubmissionError('An error occurred while submitting. Please try again.');
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <StyledPaper>
        <SectionTitle>Global Journal of Construction Management and Engineering (GJCME) </SectionTitle>
        <Typography variant="h5" gutterBottom>Make a Submission</Typography>
        
        <Box mt={4} mb={3}>
          <Typography variant="h6" gutterBottom>Before you begin</Typography>
          <Typography paragraph>
            Thank you for submitting to the Global Journal of Construction Management and Engineering (GJCME). You will be asked to upload files, identify co-authors, and provide information such as the title and abstract.
          </Typography>
          <Typography paragraph>
            Please read our Submission Guidelines if you have not done so already. When filling out the forms, provide as many details as possible in order to help our editors evaluate your work.
          </Typography>
          <Typography paragraph>
            Once you begin, you can save your submission and come back to it later. You will be able to review and correct any information before you submit.
          </Typography>
        </Box>
        
        <Divider sx={{ mb: 4 }} />
        
        {submissionError && (
          <Alert severity="error" sx={{ mb: 3 }}>{submissionError}</Alert>
        )}
        
        <form onSubmit={handleSubmit}>
          <Box mb={4} display="flex" alignItems="flex-start">
            <Box flexGrow={1}>
              <Typography variant="h6" gutterBottom>
                Title <span style={{ color: 'red' }}>*</span>
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                error={!!errors.title}
                helperText={errors.title}
                placeholder="Enter the title of your submission"
                required
              />
            </Box>
            
            <Box ml={1} mt={4}>
              <IconButton onClick={handleFormatClick}>
                <TextFormatIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={() => { handleClose(); }}>
                  <FormatBoldIcon fontSize="small" sx={{ mr: 1 }} /> Bold
                </MenuItem>
                <MenuItem onClick={() => { handleClose(); }}>
                  <FormatItalicIcon fontSize="small" sx={{ mr: 1 }} /> Italic
                </MenuItem>
                <MenuItem onClick={() => { handleClose(); }}>
                  <FormatUnderlinedIcon fontSize="small" sx={{ mr: 1 }} /> Underline
                </MenuItem>
                <MenuItem onClick={() => { handleClose(); }}>
                  <span style={{ fontWeight: 'bold', marginRight: 8 }}>x²</span> Superscript
                </MenuItem>
                <MenuItem onClick={() => { handleClose(); }}>
                  <span style={{ fontWeight: 'bold', marginRight: 8 }}>x₂</span> Subscript
                </MenuItem>
              </Menu>
            </Box>
          </Box>
          
          <Box mb={4}>
            <Typography variant="h6" gutterBottom>Submission Checklist *</Typography>
            <Typography paragraph>
              All submissions must meet the following requirements.
            </Typography>
            
            <FormGroup>
              <FormControlLabel
                control={
                    <Checkbox  
                    checked={checklist.guidelines}
                    onChange={handleChecklistChange}
                    name="guidelines"
                  />
                }
                label="This submission meets the requirements outlined in the Author Guidelines."
              />
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={checklist.notPublished}
                    onChange={handleChecklistChange}
                    name="notPublished"
                  />
                }
                label="This submission has not been previously published, nor is it before another journal for consideration."
              />
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={checklist.references}
                    onChange={handleChecklistChange}
                    name="references"
                  />
                }
                label="All references have been checked for accuracy and completeness."
              />
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={checklist.tables}
                    onChange={handleChecklistChange}
                    name="tables"
                  />
                }
                label="All tables and figures have been numbered and labeled."
              />
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={checklist.permissions}
                    onChange={handleChecklistChange}
                    name="permissions"
                  />
                }
                label="Permission has been obtained to publish all photos, datasets and other material provided with this submission."
              />
            </FormGroup>
            
            {errors.checklist && (
              <FormHelperText error>{errors.checklist}</FormHelperText>
            )}
          </Box>
          
          <Box mb={4}>
            <Typography variant="h6" gutterBottom>Privacy Consent *</Typography>
            <FormGroup>
              <FormControlLabel
                control={
                    <Checkbox 
                    checked={privacyConsent}
                    onChange={(e) => setPrivacyConsent(e.target.checked)}
                    name="privacyConsent"
                  />
                }
                label="Yes, I agree to have my data collected and stored according to the privacy statement."
              />
              {errors.privacyConsent && (
                <FormHelperText error>{errors.privacyConsent}</FormHelperText>
              )}
            </FormGroup>
          </Box>
          
          <Box display="flex" justifyContent="center" mt={4}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              disabled={loading}
              sx={{ 
                px: 4,
                py: 1,
                borderRadius: '40px',
                textTransform: 'none',
                fontSize: '1rem',
                cursor: 'pointer'
              }}
            >
              {loading ? <CircularProgress size={24} /> : 'Begin Submission'}
            </Button>
          </Box>
        </form>
      </StyledPaper>
    </Container>
  );
} 