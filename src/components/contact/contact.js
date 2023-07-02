import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Box, Button, TextField, Typography } from '@mui/material';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_4aqil1s';
    const templateID = 'template_wqyudt1';
    const userID = 'K9at_gZ5ec3c4ociz';

    emailjs.send(serviceID, templateID, {
      from_name: name,
      from_email: email,
      message: message
    }, userID)
      .then(() => {
        alert('Email Enviado Com Successo!');
        setName('');
        setEmail('');
        setMessage('');
      }, (error) => {
        console.log('An error occurred while sending the email:', error);
      });
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h4" gutterBottom style={{ color: '' }}>
        Entre em contato
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Seu nome"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          fullWidth
          margin="normal"
          InputProps={{ style: { color: 'black' } }}
           style={{ backgroundColor: 'white' }}
           sx={{ borderRadius: '20px' }} 
        />
        <TextField
          label="Seu email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
          margin="normal"
          InputProps={{ style: { color: 'black' } }}
           style={{ backgroundColor: 'white' }}
           sx={{ borderRadius: '20px' }} 
        />
        <TextField
          label="Sua mensagem"
          variant="outlined"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          fullWidth
          multiline
          rows={2}
          margin="normal"
          InputProps={{ style: { color: 'black' } }}
           style={{ backgroundColor: 'white' }}
           sx={{ borderRadius: '20px' }} 
        />
        <Button type="submit" variant="contained" color="primary">
          Enviar Email
        </Button>
      </form>
    </Box>
  );
 
};

export default Contact;
