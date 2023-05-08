import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const tableStyle = {
    height: 400,
    width: '100%',
};

const columns = [
    { field: 'id', headerName: 'ID', width: 60 },
    { field: 'purchase', headerName: 'Purchase', width: 360 },
    { field: 'category', headerName: 'Category', width: 180 },
    { field: 'price', headerName: 'Price', type: 'number', width: 120 },
    { field: 'date', headerName: 'Date', type: 'number', width: 160 },
];

const rows = [
    { id: 1, purchase: 'Bag', category: 'Accessories', price: 2500, date: '2021-01-01' },
    { id: 2, purchase: 'Shoes', category: 'Clothes', price: 3200, date: '2021-01-01' },
    { id: 3, purchase: 'T-shirt', category: 'Clothes', price: 800, date: '2021-01-01' },
    { id: 4, purchase: 'Socks', category: 'Clothes', price: 100, date: '2021-01-01' },
    { id: 5, purchase: 'Hat', category: 'Accessories', price: 750, date: '2021-01-01' },
    { id: 6, purchase: 'Sunglasses', category: 'Accessories', price: 3000, date: '2021-01-01' },
    { id: 7, purchase: 'Jacket', category: 'Clothes', price: 3000, date: '2021-01-01' },
    { id: 8, purchase: 'Trousers', category: 'Clothes', price: 2500, date: '2021-01-01' },
    { id: 9, purchase: 'Belt', category: 'Accessories', price: 1500, date: '2021-01-01' },
    { id: 10, purchase: 'Grosseries', category: 'Food', price: 250, date: '2021-01-01' },
    { id: 11, purchase: 'Bread', category: 'Food', price: 50, date: '2021-01-01' },
    { id: 12, purchase: 'Milk', category: 'Food', price: 50, date: '2021-01-01' },
];

export default function DataTable() {
    return (
        <div style={tableStyle}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination:{ paginationModel: { pageSize: 10 } },
                }}
                rowsPerPage={[1]}
                disableColumnSelector={true} // disable "hide all" and "manage columns"
            />
        </div>
    );
}