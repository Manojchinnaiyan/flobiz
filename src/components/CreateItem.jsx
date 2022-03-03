import React, { useState, useEffect } from 'react';
import {
    Box,
    Button,
    MenuItem,
    Paper,
    Select,
    TextField,
    Typography,
    styled,
} from '@mui/material';

const ScanButton = styled(Button)`
    text-transform: capitalize;
    &:hover {
        background: blue;
    }
`;

const CreateItem = ({ getId, setGetId }) => {
    const [itemName, setItemName] = useState('');
    const [itemCode, setItemCode] = useState('');
    const [sales, setSales] = useState('');
    const [purchase, setPurchase] = useState('');
    const [measuring, setMeasuring] = useState('');
    const [date, setDate] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        if (String(getId)) {
            data.filter((data) => {
                if (data.id === getId) {
                    setItemName(data.itemName);
                    setItemCode(data.itemCode);
                    setSales(data.sales);
                    setPurchase(data.purchase);
                    setMeasuring(data.measuring);
                    setDate(data.date);
                }
            });
        }
    }, [getId]);

    const handleUpdate = (e) => {
        e.preventDefault();
        setData(
            data.map((data) => {
                return data.id === getId
                    ? {
                          id: getId,
                          itemName,
                          itemCode,
                          sales,
                          purchase,
                          measuring,
                          date,
                      }
                    : data;
            })
        );
        setItemName('');
        setItemCode('');
        setSales('');
        setPurchase('');
        setMeasuring('');
        setDate('');
        setGetId('');
        window.location.reload();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setData([
            ...data,
            {
                id: data.length,
                itemName,
                itemCode,
                sales,
                purchase,
                measuring,
                date,
            },
        ]);
        setItemName('');
        setItemCode('');
        setSales('');
        setPurchase('');
        setMeasuring('');
        setDate('');
        setGetId('');
        window.location.reload();
    };

    useEffect(() => {
        const retrieve = JSON.parse(localStorage.getItem('items'));
        if (retrieve) setData(retrieve);
    }, []);

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(data));
    }, [data]);

    return (
        <Box>
            <Box display='flex' paddingLeft='20px' paddingBottom='20px'>
                <Box margin='10px'>
                    <Typography color='rgba(0, 0, 0, 0.3)'>
                        Item Name *
                    </Typography>
                    <TextField
                        size='small'
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                        placeholder='Enter Item name'
                        required
                    />
                </Box>
                <Box margin='10px'>
                    <Typography color='rgba(0, 0, 0, 0.3)'>
                        Item Code
                    </Typography>
                    <TextField
                        size='small'
                        value={itemCode}
                        onChange={(e) => setItemCode(e.target.value)}
                        placeholder='Enter Item code'
                        required
                    />
                </Box>
            </Box>
            <Paper
                elevation={0}
                sx={{ backgroundColor: '#f6f6f6', padding: '10px' }}
            >
                Stock & Pricing details(Optional)
            </Paper>
            <Box display='flex' paddingLeft='20px' width='73vh' flexWrap='wrap'>
                <Box margin='10px'>
                    <Typography color='rgba(0, 0, 0, 0.3)'>
                        Sales Price
                    </Typography>
                    <TextField
                        size='small'
                        value={sales}
                        onChange={(e) => setSales(e.target.value)}
                        placeholder='&#8377; 0'
                    />
                </Box>
                <Box margin='10px'>
                    <Typography color='rgba(0, 0, 0, 0.3)'>
                        Purchase Price
                    </Typography>
                    <TextField
                        size='small'
                        value={purchase}
                        onChange={(e) => setPurchase(e.target.value)}
                        placeholder='&#8377; 0'
                    />
                </Box>
                <Box margin='10px'>
                    <Typography color='rgba(0, 0, 0, 0.3)'>
                        Measuring Unit
                    </Typography>
                    <Select
                        size='small'
                        sx={{ width: '210px' }}
                        value={measuring}
                        onChange={(e) => setMeasuring(e.target.value)}
                    >
                        <MenuItem value='PCS'>PCS</MenuItem>
                        <MenuItem value='BOXES'>BOXES</MenuItem>
                        <MenuItem value='GMS'>GMS</MenuItem>
                        <MenuItem value='KGS'>KGS</MenuItem>
                        <MenuItem value='ITR'>ITR</MenuItem>
                    </Select>
                </Box>
                <Box margin='10px'>
                    <Typography color='rgba(0, 0, 0, 0.3)'>
                        Opening Stock Date
                    </Typography>
                    <TextField
                        size='small'
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        placeholder='Select Date'
                        type='date'
                        sx={{ width: '210px' }}
                    />
                </Box>

                {Boolean(String(getId)) ? (
                    <ScanButton
                        onClick={handleUpdate}
                        sx={{
                            margin: '15px',
                            color: 'white',
                            backgroundColor: 'blue',
                            width: '66vh',
                        }}
                    >
                        Update
                    </ScanButton>
                ) : (
                    <ScanButton
                        onClick={handleSubmit}
                        sx={{
                            margin: '15px',
                            color: 'white',
                            backgroundColor: 'blue',
                            width: '66vh',
                        }}
                    >
                        Save
                    </ScanButton>
                )}
            </Box>
        </Box>
    );
};

export default CreateItem;
