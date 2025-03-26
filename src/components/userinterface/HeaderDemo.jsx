import React, { useState } from 'react';
import { Container, Box, Typography, Button, Paper, Divider } from '@mui/material';
import Header from '../Header';
import HeaderAlt from '../HeaderAlt';

const HeaderDemo = () => {
  const [activeHeader, setActiveHeader] = useState('standard');

  return (
    <div>
      {activeHeader === 'standard' ? <Header /> : <HeaderAlt />}
      
      <Container maxWidth="lg" sx={{ mt: 5, mb: 8 }}>
        <Paper elevation={2} sx={{ p: 4, borderRadius: 2 }}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 600 }}>
            Header Design Showcase
          </Typography>
          
          <Typography variant="body1" paragraph sx={{ mb: 3 }}>
            Choose between two unique header designs created for publication purposes. Both are responsive, 
            mobile-friendly, and feature modern design principles suitable for journal and publication websites.
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
            <Button 
              variant={activeHeader === 'standard' ? 'contained' : 'outlined'} 
              color="primary"
              onClick={() => setActiveHeader('standard')}
            >
              Standard Header
            </Button>
            <Button 
              variant={activeHeader === 'publication' ? 'contained' : 'outlined'} 
              color="primary"
              onClick={() => setActiveHeader('publication')}
            >
              Publication Style Header
            </Button>
          </Box>
          
          <Divider sx={{ mb: 4 }} />
          
          <Box>
            <Typography variant="h5" gutterBottom>
              {activeHeader === 'standard' ? 'Standard Header Features:' : 'Publication Header Features:'}
            </Typography>
            
            {activeHeader === 'standard' ? (
              <Box component="ul" sx={{ pl: 2 }}>
                <Typography component="li" sx={{ mb: 1 }}>Clean, minimalist design with subtle animations</Typography>
                <Typography component="li" sx={{ mb: 1 }}>Scroll-aware header that changes appearance when scrolling</Typography>
                <Typography component="li" sx={{ mb: 1 }}>Active page indicators with elegant underline effect</Typography>
                <Typography component="li" sx={{ mb: 1 }}>Responsive design with hamburger menu on mobile</Typography>
                <Typography component="li" sx={{ mb: 1 }}>Search functionality integrated in the header</Typography>
                <Typography component="li" sx={{ mb: 1 }}>Bookmark and user account shortcuts</Typography>
              </Box>
            ) : (
              <Box component="ul" sx={{ pl: 2 }}>
                <Typography component="li" sx={{ mb: 1 }}>Classic newspaper/journal style with masthead design</Typography>
                <Typography component="li" sx={{ mb: 1 }}>Current date display formatted in publication style</Typography>
                <Typography component="li" sx={{ mb: 1 }}>Centered logo with subtitle for brand emphasis</Typography>
                <Typography component="li" sx={{ mb: 1 }}>Category navigation bar in traditional publication style</Typography>
                <Typography component="li" sx={{ mb: 1 }}>Responsive with specialized mobile layout</Typography>
                <Typography component="li" sx={{ mb: 1 }}>Additional utility links for notifications and bookmarks</Typography>
              </Box>
            )}
          </Box>
        </Paper>
      </Container>
    </div>
  );
};

export default HeaderDemo; 