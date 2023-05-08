import * as React from 'react';
import DataTable from './DataTable';
import '../css/Purchases.css';
import AddPurchase from './AddPurchase';

export default function Purchases() {
    return (
        <div id="puchases-content">
            <div className="add-purchase">
                <AddPurchase />
            </div>

            <div className="purchases-table">
                <DataTable />
            </div>
        </div>
    );
}