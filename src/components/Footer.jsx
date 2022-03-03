import React from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { BsChat } from 'react-icons/bs';
import {
  AiFillYoutube,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '40vh',
        marginTop: '50px',
      }}
    >
      <Box>
        <Typography fontSize='18px' lineHeight='50px' color='orange'>
          Get in touch
        </Typography>
        <Typography lineHeight='30px' fontSize='12px'>
          help@flobiz.in
        </Typography>
        <Typography>
          <strong>+91 74004 17400</strong>
        </Typography>
        <Box sx={{ display: 'flex', marginTop: '10px' }}>
          <Button
            sx={{
              textTransform: 'capitalize',
              color: 'green',
              background: 'lightgreen',
            }}
          >
            <AiOutlineWhatsApp color='green' />
            &nbsp; WhatsApp us
          </Button>
          <Button
            sx={{
              textTransform: 'capitalize',
              color: 'blue',
              background: 'lightblue',
              marginLeft: '20px',
            }}
          >
            <BsChat color='blue' />
            &nbsp; Chat with us
          </Button>
        </Box>
      </Box>
      <Box>
        <Typography color='orange'>Information</Typography>
        <Typography fontSize='13px' lineHeight='30px'>
          Refund Policy
        </Typography>
        <Typography lineHeight='30px' fontSize='13px' color='orange'>
          Privacy Policy
        </Typography>
        <Typography lineHeight='30px' fontSize='13px'>
          Terms & Conditions
        </Typography>
      </Box>
      <Box>
        <Typography lineHeight='30px' fontSize='13px'>
          FAQ's
        </Typography>
        <Typography lineHeight='30px' fontSize='13px'>
          Pricing
        </Typography>

        <Typography lineHeight='30px' fontSize='13px'>
          FloBiz Business Group
        </Typography>
        <Typography lineHeight='30px' fontSize='13px'>
          Blogs
        </Typography>
      </Box>
      <Box>
        <Typography color='orange'>Follow us</Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '200px',
            marginTop: '20px',
          }}
        >
          <AiFillYoutube />

          <AiFillTwitterCircle />

          <FaInstagramSquare />

          <BsFacebook />

          <AiFillLinkedin />
        </Box>
        <Typography marginTop='30px'>
          <strong>
            FloBooks is a product by{' '}
            <span style={{ color: 'blue', textDecoration: 'underline' }}>
              FloBiz
            </span>
          </strong>
        </Typography>
      </Box>
    </Paper>
  );
};

export default Footer;
