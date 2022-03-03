import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import Login from './Login';
import { BsHeartFill } from 'react-icons/bs';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import { Box } from '@mui/system';

const Banner = () => {
  return (
    <Paper sx={{ backgroundColor: '#fbf7f4' }}>
      <Grid container>
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            paddingLeft: '65px',
            paddingTop: '100px',
          }}
        >
          <Typography sx={{ fontSize: '36px', fontWeight: '500' }}>
            <strong>Simple GST Billing </strong> &{' '}
            <strong>Stock Management</strong>
          </Typography>
          <Typography variant='h4'>software for your business</Typography>
          <Typography variant='h6' sx={{ marginTop: '20px' }}>
            Atma Nirbhar Vyapaari bane
          </Typography>
          <Typography
            sx={{ marginTop: '180px', fontSize: '14px', fontWeight: 'bold' }}
          >
            Made With <BsHeartFill color='red' /> in India
          </Typography>
          <Typography
            sx={{
              fontSize: '14px',
              marginLeft: '180px',
              marginTop: '-20px',
              fontWeight: 'bold',
            }}
          >
            <AiFillSafetyCertificate color='green' />
            ISO Certified
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            height: '70vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Login />
        </Grid>
      </Grid>
      <Box
        sx={{ height: '4px', width: '200px', backgroundColor: '#ef7338' }}
      ></Box>
    </Paper>
  );
};

export default Banner;
