import { Button } from '@mui/material';
import React from 'react';
import UserCard from './UserCard';
import '../css/Users.css';

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
            {/* <UserCard />
            <UserCard /> */}

            <div className="form-block login">
                <h2>Login</h2>
                <form method="post" action="">
                    <input type="text" name="username" id="username" placeholder="Username" required /> <br/>
                    <input type="password" name="password" id="password" placeholder="Password" required /> <br/>
                    <button type="submit" name="login">Submit</button>
                </form>
            </div>

            <div className="form-block register">
                <h2>Register</h2>
                <form method="post" action="">
                    <input type="text" name="username" id="username" placeholder="Username" required /> <br/>
                    <input type="password" name="password" id="password" placeholder="Password" required /> <br/>
                    <input type="password" name="repeatPassword" id="repeatPassword" placeholder="Repeat password" required /> <br/>
                    <button type="submit" name="register">Submit</button>
                </form>
            </div>

            {/* <div class="account-block">
                    <h2>Welcome, <span>USERNAME</span>!</h2>
                    <form method="post" action="">
                        <button type="submit" name="logout">Log out</button>
                    </form>
            </div> */}

        </div>
    );
}

export default Users;