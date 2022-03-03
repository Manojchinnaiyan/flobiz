import React, { useState } from 'react';
import { Paper, Grid, Box, Tabs, Tab } from '@mui/material';
import Logo from '../images/mybillbook-logo (1).webp';
import { styled } from '@mui/system';

const ImageContainer = styled(Box)`
  padding: 10px;
  margin-left: 100px;
`;

const Tabbed = styled(Tabs)`
  align-items: center;
  button.Mui-selected {
    color: #ef7338;
  }
  span.css-1aquho2-MuiTabs-indicator {
    background-color: #ef7338;
  }
`;

const TabMenu = styled(Tab)`
  text-transform: capitalize;
  font-size: 13px;
  font-weight: 600;
  &:hover {
    color: #ef7338;
  }
  &:active {
    color: #ef7338;
  }
`;

const Navbar = () => {
  const [value, setValue] = useState('one');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square>
      <Grid container>
        <Grid item xs={12} md={6}>
          <ImageContainer>
            <img
              src={Logo}
              style={{ height: '30px', width: '150px' }}
              alt='#'
            />
          </ImageContainer>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Tabbed value={value} onChange={handleChange}>
            <TabMenu value='one' label='Why Use My Billbook?' />
            <TabMenu value='two' label='why is it for?' />
            <TabMenu value='three' label='Online Store' />
            <TabMenu value='four' label='Pricing' />
            <TabMenu value='five' label='FAQs' />
          </Tabbed>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Navbar;
