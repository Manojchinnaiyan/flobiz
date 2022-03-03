import { Paper, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import React from 'react';
import Gaurentee from '../images/gaurentee.png';
import { GiQueenCrown } from 'react-icons/gi';
import { MdPhonelink } from 'react-icons/md';
import { BsCheck2 } from 'react-icons/bs';
import { BsCheck2All } from 'react-icons/bs';

const ImageContainer = styled('img')`
  width: 100px;
  height: 100px;
`;

const Plan = () => {
  return (
    <Paper elevation={0}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box sx={{ marginLeft: '65px' }}>
          <Typography sx={{ fontSize: '30px' }}>
            Now Try all benefits of My BillBook app
          </Typography>
          <Typography
            sx={{ fontSize: '30px', color: '#db631a', fontWeight: 'bold' }}
          >
            Free for 14 days
          </Typography>
        </Box>
        <Box sx={{ marginRight: '100px' }}>
          <ImageContainer src={Gaurentee} alt='#' />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginTop: '50px',
        }}
      >
        <Paper
          sx={{
            height: '50vh',
            width: '50vh',
            background: '#F7F5F7',
          }}
        >
          <Paper
            sx={{ padding: '10px', backgroundColor: '#F7F5F7' }}
            elevation={0}
          >
            <GiQueenCrown color='#125376' />
            <Typography>
              <strong>Silver Plan</strong>
            </Typography>
            <Box sx={{ display: 'flex' }}>
              <Typography
                sx={{
                  textDecoration: 'line-through',
                  fontSize: '13px',
                  marginTop: '5px',
                  padding: '1px',
                }}
              >
                <span>&#8377;</span>1299
              </Typography>
              <Typography sx={{ fontSize: '13px' }}>
                <strong style={{ fontSize: '20px', color: '#125376' }}>
                  <span>&#8377;</span> 799
                </strong>{' '}
                /year
              </Typography>
            </Box>
          </Paper>
          <Paper
            elevation={0}
            sx={{
              height: '50px',
              backgroundColor: '#eef7fc',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{
                color: '#125376',
                fontSize: '15px',
                textAlign: 'center',
                paddingTop: '10px',
              }}
            >
              {' '}
              <MdPhonelink
                size='20px'
                color='#125376'
                sx={{ marginTop: '10px' }}
              />{' '}
              &nbsp; Mobile + Desktop
            </Typography>
          </Paper>
          <Box
            sx={{
              padding: '10px',
              marginTop: '15px',
              color: '#125376',
              fontSize: '5px',
            }}
          >
            <Typography lineHeight='30px' fontSize='14px'>
              {' '}
              <BsCheck2 color='green' /> Unlimited Stock Adjustments{' '}
            </Typography>
            <Typography lineHeight='30px' fontSize='14px'>
              {' '}
              <BsCheck2 color='green' /> GST Reports, Profit & Loss Report{' '}
            </Typography>
            <Typography lineHeight='30px' fontSize='14px'>
              {' '}
              <BsCheck2 color='green' /> Remove MyBillBook logo from Invoice
            </Typography>
            <Typography lineHeight='30px' fontSize='14px'>
              {' '}
              <BsCheck2 color='green' /> Only mobile device supported
            </Typography>
            <Typography lineHeight='30px' fontSize='14px'>
              {' '}
              <BsCheck2 color='green' /> +5 more features
            </Typography>
          </Box>
        </Paper>
        <Paper
          sx={{
            height: '50vh',
            width: '50vh',
            background: '#FCF5F6',
            border: '2px solid #E1B225',
          }}
        >
          <Paper
            sx={{
              padding: '10px',
              backgroundColor: '#FCF5F6',
            }}
            elevation={0}
          >
            <Typography
              sx={{
                border: '1px solid yellow',
                fontSize: '10px',
                backgroundColor: 'red',
                color: 'white',
                width: '100px',
                padding: '2px 15px',
                borderRadius: '10px',
                position: 'relative',
                top: '-20px',
                left: '200px',
              }}
            >
              Most Popular
            </Typography>
            <GiQueenCrown color='#E1B225' />
            <Typography>
              <strong>Gold Plan</strong>
            </Typography>
            <Box sx={{ display: 'flex' }}>
              <Typography
                sx={{
                  textDecoration: 'line-through',
                  fontSize: '13px',
                  marginTop: '5px',
                  padding: '1px',
                }}
              >
                <span>&#8377;</span>2599
              </Typography>
              <Typography sx={{ fontSize: '13px' }}>
                <strong style={{ fontSize: '20px', color: '#E1B225' }}>
                  <span>&#8377;</span> 1799
                </strong>{' '}
                /year
              </Typography>
            </Box>
          </Paper>
          <Paper
            elevation={0}
            sx={{
              height: '50px',
              backgroundColor: '#FFE9A5',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{
                color: '#E1B225',
                fontSize: '15px',
                textAlign: 'center',
                paddingTop: '10px',
              }}
            >
              {' '}
              <MdPhonelink
                size='20px'
                color='#E1B225'
                sx={{ marginTop: '10px' }}
              />{' '}
              &nbsp; Mobile + Desktop
            </Typography>
          </Paper>
          <Box
            sx={{
              padding: '10px',
              marginTop: '15px',
              color: '#125376',
              fontSize: '5px',
            }}
          >
            <Typography lineHeight='30px' fontSize='14px'>
              {' '}
              <BsCheck2All color='green' /> All Silver Features
            </Typography>
            <Typography lineHeight='30px' fontSize='14px'>
              {' '}
              <BsCheck2 color='green' /> Add <strong>upto 5 Staff</strong> to My
              BillBook
            </Typography>
            <Typography lineHeight='30px' fontSize='14px'>
              {' '}
              <BsCheck2 color='green' /> Unlimited Mobile + Desktop Logins
            </Typography>
          </Box>
        </Paper>
        <Paper
          sx={{
            height: '50vh',
            width: '50vh',
          }}
        >
          <Paper sx={{ padding: '10px' }} elevation={0}>
            <GiQueenCrown color='#db631a' />
            <Typography>
              <strong>Diamond Plan</strong>
            </Typography>
            <Box sx={{ display: 'flex' }}>
              <Typography
                sx={{
                  textDecoration: 'line-through',
                  fontSize: '13px',
                  marginTop: '5px',
                  padding: '1px',
                }}
              >
                <span>&#8377;</span>4599
              </Typography>
              <Typography sx={{ fontSize: '13px' }}>
                <strong style={{ fontSize: '20px', color: '#db631a' }}>
                  <span>&#8377;</span> 3500
                </strong>{' '}
                /year
              </Typography>
            </Box>
          </Paper>
          <Paper
            elevation={0}
            sx={{
              height: '50px',
              backgroundColor: '#FFEAF8',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{
                color: '#db631a',
                fontSize: '15px',
                textAlign: 'center',
                paddingTop: '10px',
              }}
            >
              {' '}
              <MdPhonelink
                size='20px'
                color='#db631a'
                sx={{ marginTop: '10px' }}
              />{' '}
              &nbsp; Mobile + Desktop
            </Typography>
          </Paper>
          <Box
            sx={{
              padding: '10px',
              marginTop: '15px',
              color: '#125376',
              fontSize: '5px',
            }}
          >
            <Typography lineHeight='30px' fontSize='14px'>
              {' '}
              <BsCheck2All color='green' /> All Gold & Silver Features
            </Typography>
            <Typography lineHeight='30px' fontSize='14px'>
              {' '}
              <BsCheck2 color='green' /> Add <strong>unlimited staff</strong> to
              My BillBook
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Paper>
  );
};

export default Plan;
