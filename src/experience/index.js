import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const Experience = () => {
  return (
    <Box id="experience" sx={{ my: 8 }}>
      <Typography
        variant="h4"
        component="h3"
        gutterBottom
        sx={{ backgroundColor: '#ffffff', p: 1, borderRadius: 1, boxShadow: 1 }}
      >
        Experience
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mb: 2 }}>
        <Typography variant="h6">Evolent Health</Typography>
        <Typography variant="body2" color="text.secondary">
          Software Developer | Aug 2023 - Present
        </Typography>
        <Typography variant="body1">
          Worked on healthcare modules including Rule Admin, Mass Submission, and Claim.
        </Typography>
      </Paper>
      <Paper elevation={3} sx={{ p: 3, mb: 2 }}>
        <Typography variant="h6">Sakhatech Information Systems Pvt Ltd</Typography>
        <Typography variant="body2" color="text.secondary">
          Senior Software Developer | Oct 2021 - Aug 2023
        </Typography>
        <Typography variant="body1">
          Developed educational modules like Resume Builder and New Video Platform.
        </Typography>
      </Paper>
      <Paper elevation={3} sx={{ p: 3, mb: 2 }}>
        <Typography variant="h6">Neellion Media</Typography>
        <Typography variant="body2" color="text.secondary">
          Software Developer | Aug 2019 - Oct 2021
        </Typography>
        <Typography variant="body1">
          Created an immersive VR shopping experience with VRcommerce.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Experience;
