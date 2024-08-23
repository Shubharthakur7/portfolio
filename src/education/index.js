import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const Education = () => {
  return (
    <Box id="education" sx={{ my: 8 }}>
      <Typography
        variant="h4"
        component="h3"
        gutterBottom
        sx={{ backgroundColor: '#ffffff', p: 1, borderRadius: 1, boxShadow: 1 }}
      >
        Education
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mb: 2 }}>
        <Typography variant="h6">M.Tech in Computer Science Engineering</Typography>
        <Typography variant="body2" color="text.secondary">
          IIT Patna | 2017-2019
        </Typography>
      </Paper>
      <Paper elevation={3} sx={{ p: 3, mb: 2 }}>
        <Typography variant="h6">B.Tech in Mechanical Engineering</Typography>
        <Typography variant="body2" color="text.secondary">
          Dr. K N Modi Institute Of Engg. & Technology, AKTU
        </Typography>
      </Paper>
    </Box>
  );
};

export default Education;
