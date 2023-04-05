import React from 'react';
import '../css/Content.css';
import DataTable from './DataTable';

function Content(props) {
    return (
        <div className='content'>
            {/* cюди передавати навігацію */}
            <div className='content__nav-title'>Full list</div>
            <hr></hr>
            <DataTable />
            
            

            
        </div>
    );
}

export default Content;