import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Avatar, Box } from '@mui/material';

const Header = ({ onContactClick }) => {
  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: '#ffffff', // Set the background color here
        color: '#000000',           // Set the text color if needed
        boxShadow: 'none',          // Remove the shadow if needed
        zIndex: 1300,               // Ensure the header is above other content
      }}
    >
      <Toolbar>
        <Container maxWidth="md" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar 
              src="/path/to/your/image.jpg" // Replace with your image path
              alt="Profile"
              sx={{ width: 50, height: 50, borderRadius: '50%', marginRight: 2 }}
            />
            <Typography variant="h6" component="div">
              Shubham Singh
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit" href="#experience">
              Experience
            </Button>
            <Button color="inherit" href="#skills">
              Skills
            </Button>
            <Button color="inherit" href="#education">
              Education
            </Button>
            <Button color="inherit" onClick={onContactClick}>
              Contact
            </Button>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
