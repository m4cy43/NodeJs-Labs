import * as React from 'react';
import DataTable from './DataTable';
import '../css/Purchases.css';
import AddPurchase from './AddPurchase';
import ShoppingTable from './ShoppingTable';

export default function Purchases() {
    return (
        <div id="puchases-content">
            <div className="add-purchase">
                <AddPurchase />
            </div>

            <div className="purchases-table">
                {/* <DataTable /> */}
                <ShoppingTable />
            </div>
        </div>
    );
}