import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { AiFillStar } from 'react-icons/ai';
import React from 'react';

const Statistic = () => {
  return (
    <Paper>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: '60px',
          paddingLeft: '0px',
          flexWrap: 'wrap',
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            sx={{ fontSize: '40px', fontWeight: '600', color: '#db631a' }}
          >
            1,00,000+
          </Typography>
          <Typography>Business Trust Us</Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            sx={{ fontSize: '40px', fontWeight: '600', color: '#db631a' }}
          >
            30,00,000+
          </Typography>
          <Typography>Invoices created</Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            sx={{ fontSize: '40px', fontWeight: '600', color: '#db631a' }}
          >
            5,000+
          </Typography>
          <Typography>Cities & Towns in India</Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            sx={{ fontSize: '40px', fontWeight: '600', color: '#db631a' }}
          >
            4.5 <AiFillStar color='#db631a' />
          </Typography>
          <Typography>Rating on Google Play</Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default Statistic;
