import React, { useState } from 'react';
import { Box, Typography, Button, Modal, TextField, Grid, Paper } from '@mui/material';

const Contact = ({ open, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted', formData);
    onClose(); // Close the modal after submission
  };

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="contact-modal-title">
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90%',
          maxWidth: '600px',
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="contact-modal-title" variant="h6" component="h2" gutterBottom>
          Contact Form
        </Typography>
        <Paper elevation={2} sx={{ p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                variant="outlined"
                value={formData.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                name="message"
                variant="outlined"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Box sx={{ mt: 2, textAlign: 'right' }}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Box>
        </Paper>
      </Box>
    </Modal>
  );
};

export default Contact;
