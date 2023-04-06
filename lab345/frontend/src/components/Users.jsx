import { Button } from '@mui/material';
import React from 'react';
import UserCard from './UserCard';

// const buttonStyle = {
//     backgroundColor: '#902598',
//     color: '#fff',
//     width: '12%',
//     height: '50px',
//     marginBottom: '20px',
//     fontSize: '15px',
//     fontWeight: 'bold',
//     textTransform: 'none',
//     borderRadius: '5px',
//     boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
//     '&:hover': {
//         backgroundColor: '#902598',
//         boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
//     }
// };

function Users() {
  return (
    <div className='users'>
        {/* <Button style={buttonStyle}>Add user</Button> */}

        <UserCard />
        <UserCard />
    </div>
  );
}

export default Users;