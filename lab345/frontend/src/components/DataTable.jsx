import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 80 },
    { field: 'purchase', headerName: 'Purchase', width: 450 },
    { field: 'category', headerName: 'Category', width: 220 },
    { field: 'price', headerName: 'Price', type: 'number', width: 130 },
    { field: 'date', headerName: 'Date', type: 'number', width: 150 },
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
    <div style={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}