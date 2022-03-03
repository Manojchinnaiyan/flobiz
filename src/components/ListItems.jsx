import React, { useEffect, useState, useRef } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'itemName', headerName: 'ITEM CODE', width: 150 },
    { field: 'itemCode', headerName: 'ITEM CODE', width: 150 },
    { field: 'sales', headerName: 'SALES', width: 150 },
    { field: 'purchase', headerName: 'PURCHASE PRICE', width: 150 },
    { field: 'measuring', headerName: 'UNIT', width: 150 },
    { field: 'date', headerName: 'DATE', width: 150 },
];

const ListItems = ({ setGetId }) => {
    const [rows, setRow] = useState([]);

    useEffect(() => {
        const retreive = JSON.parse(localStorage.getItem('items'));
        if (retreive) setRow(retreive);
    }, []);

    return (
        <div style={{ height: 800, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                onCellClick={(params, event) => {
                    setGetId(params.id);
                }}
                sx={{
                    '& .MuiDataGrid-cell:hover': {
                        cursor: 'pointer',
                    },
                }}
            />
        </div>
    );
};

export default ListItems;
