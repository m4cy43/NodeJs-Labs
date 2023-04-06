import React from 'react';
import '../css/Finances.css';
import FinancesTable from './FinancesTable';
import IncomeForm from './IncomeForm';
import FinancesTable2 from './FinancesTable2';

function Wallet() {
    return (
        <div className='finances'>
            <div className="fn-block">
                <div className="amount-div">
                    <div className='quantity-ear'>+ ₴ <span id='earnings-money'>1000</span> <IncomeForm /></div>
                    <div className="last-update">Last update: <span id='last-upg-date'>05/02/2023</span></div>
                </div>
                <hr className='fn-hr'></hr>
                <FinancesTable />
            </div>

            <div className="fn-block">
                <div className="amount-div">
                    <div className='quantity-exp'>- ₴<span id='expenses-money'>1000</span></div> 
                    <div className="last-update">Last update: <span id='last-upg-date'>05/02/2023</span></div>
                </div>
                <hr className='fn-hr'></hr>
                <FinancesTable2 />
            </div>
        </div>
    );
}

export default Wallet;