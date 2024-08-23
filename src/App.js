import React, { useState } from 'react';
import { Container, CssBaseline, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Header from './header';
import Experience from './experience';
import Skills from './skills';
import Education from './education';
import Contact from './contact';
import './App.css';

function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handleOpenContactModal = () => setContactModalOpen(true);
  const handleCloseContactModal = () => setContactModalOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header onContactClick={handleOpenContactModal} />
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          minHeight: '100vh',
          py: 8,
          mt: 8,
          background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
          backgroundSize: '400% 400%',
          animation: 'gradientBG 15s ease infinite',
        }}
      >
        <Container maxWidth="md">
          <Experience />
          <Skills />
          <Education />
          <Contact open={contactModalOpen} onClose={handleCloseContactModal} />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
