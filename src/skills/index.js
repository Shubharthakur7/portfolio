import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const Skills = () => {
  return (
    <Box id="skills" sx={{ my: 8 }}>
      <Typography
        variant="h4"
        component="h3"
        gutterBottom
        sx={{ backgroundColor: '#ffffff', p: 1, borderRadius: 1, boxShadow: 1 }}
      >
        Skills
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mb: 2 }}>
        <Typography variant="body1">
          JavaScript, TypeScript, ReactJs, NextJS, RTK, Redux, GraphQL, NodeJS, ExpressJS, Jest, React-Testing-Library
        </Typography>
      </Paper>
    </Box>
  );
};

export default Skills;
