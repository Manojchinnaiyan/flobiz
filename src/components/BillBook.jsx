import React, { useState } from 'react';
import { Button, Box, Divider } from '@mui/material';
import { useNavigate } from 'react-router';
import CreateItem from './CreateItem';
import ListItems from './ListItems';

const BillBook = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [getId, setGetId] = useState('');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('user');
        navigate('/');
    };

    return (
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '15px',
                }}
            >
                <Box>{user.mobile_number}</Box>
                <Box>
                    <Button onClick={logout}>LogOut</Button>
                </Box>
            </Box>
            <Divider />
            <Box sx={{ display: 'flex' }}>
                <Box
                    sx={{
                        width: '160vh',
                        border: '1px solid rgba(0, 0, 0, 0.12)',
                        height: '91vh',
                    }}
                >
                    <Box padding='10px'>Items</Box>
                    <Divider />
                    <ListItems setGetId={setGetId} />
                </Box>
                <Box>
                    <Box padding='10px'>Create/Edit Items</Box>
                    <Divider />
                    <CreateItem getId={getId} setGetId={setGetId} />
                </Box>
            </Box>
        </Box>
    );
};

export default BillBook;
