import React, { useState, useEffect } from 'react';
import {
  Container, Box, Typography, Tabs, Tab, Paper, Button, InputBase,
  IconButton, Tooltip, CircularProgress, Chip
} from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddIcon from '@mui/icons-material/Add';
import { Link, useNavigate } from 'react-router-dom';
import { useRequireAuth } from '../../utils/authUtils';

// Styled components
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
}));

const EmbeddedStyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: 0,
  boxShadow: 'none',
}));

const SearchContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  border: '1px solid #e0e0e0',
  borderRadius: 4,
  padding: '0 10px',
  height: 40,
  width: '100%',
  maxWidth: 300,
}));

const StatusChip = styled(Chip)(({ status, theme }) => ({
  borderRadius: 16,
  fontWeight: 500,
  fontSize: '0.75rem',
  backgroundColor: status === 'Incomplete' ? '#ffeee6' : '#e6f7ec',
  color: status === 'Incomplete' ? '#d32f2f' : '#2e7d32',
  border: `1px solid ${status === 'Incomplete' ? '#ffc8b7' : '#b7e1cd'}`,
}));

export default function Submissions({ isEmbedded = false }) {
  const [tabValue, setTabValue] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Mock data - would be fetched from API in real implementation
  const mockSubmissions = [
    {
      id: 14,
      title: 'Pushkar',
      subtitle: 'tester submission',
      status: 'Incomplete',
      lastActivity: 'Saturday, April 12, 2025'
    }
  ];

  // Always call the hook unconditionally
  // When embedded, we don't need to redirect (first param is false)
  // When not embedded, we do want to show alerts (second param is true)
  const isAuthenticated = useRequireAuth(!isEmbedded, !isEmbedded);

  // If embedded or authenticated, continue rendering
  // Otherwise, the hook will handle redirecting
  if (!isEmbedded && !isAuthenticated) {
    return <CircularProgress />;
  }

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleViewSubmission = (submissionId) => {
    navigate(`/submission-detail/${submissionId}`);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Choose the appropriate container and Paper component based on whether the component is embedded
  const PaperComponent = isEmbedded ? EmbeddedStyledPaper : StyledPaper;
  const ContentWrapper = ({ children }) => {
    return isEmbedded ? (
      <>{children}</>
    ) : (
      <Container maxWidth="lg" sx={{ py: 6 }}>{children}</Container>
    );
  };

  return (
    <ContentWrapper>
      {!isEmbedded && (
        <Typography variant="h4" component="h1" gutterBottom>
          Submissions
        </Typography>
      )}

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: isEmbedded ? 0 : 3 }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          aria-label="submission tabs"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label={<Box sx={{ display: 'flex', alignItems: 'center' }}>My Queue <Chip size="small" label="1" sx={{ ml: 1, height: 20, fontSize: '0.75rem' }} /></Box>} />
          <Tab label="Archived" />
        </Tabs>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4, mb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <SearchContainer>
            <InputBase
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
              sx={{ ml: 1, flex: 1 }}
            />
            <IconButton type="button" sx={{ p: '5px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </SearchContainer>
          <IconButton sx={{ ml: 1 }} aria-label="filter">
            <FilterListIcon />
          </IconButton>
        </Box>

        <Box>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            component={Link}
            to="/newsubmission"
            sx={{ textTransform: 'none' }}
          >
            New Submission
          </Button>
          <Tooltip title="Help">
            <IconButton sx={{ ml: 1 }}>
              <HelpOutlineIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      <PaperComponent>
        {tabValue === 0 && (
          <Box>
            {mockSubmissions.map((submission) => (
              <Box 
                key={submission.id}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  py: 2,
                  borderBottom: '1px solid #eaeaea'
                }}
              >
                <Box>
                  <Typography variant="subtitle1" fontWeight="medium">
                    {submission.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {submission.subtitle}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <StatusChip 
                    label={submission.status} 
                    status={submission.status}
                    size="small"
                  />
                  <Button 
                    variant="outlined"
                    onClick={() => handleViewSubmission(submission.id)}
                    sx={{ ml: 2, textTransform: 'none' }}
                  >
                    View
                  </Button>
                  <IconButton size="small" sx={{ ml: 1 }}>
                    <KeyboardArrowDownIcon />
                  </IconButton>
                </Box>
              </Box>
            ))}
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Last activity recorded on {mockSubmissions[0].lastActivity}.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'end', mt: 2 }}>
              <Button 
                color="secondary" 
                variant="outlined"
                sx={{ textTransform: 'none' }}
              >
                Delete
              </Button>
            </Box>
          </Box>
        )}

        {tabValue === 1 && (
          <Box sx={{ py: 4, textAlign: 'center' }}>
            <Typography variant="body1" color="text.secondary">
              No archived submissions found.
            </Typography>
          </Box>
        )}
      </PaperComponent>
    </ContentWrapper>
  );
} 