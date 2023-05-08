import React from 'react';
import cartIcon from '../images/shopping-cart.svg';
import listIcon from '../images/list.svg';
import categoryIcon from '../images/folders.svg';
import walletIcon from '../images/wallet.svg';
import userIcon from '../images/user.svg';
import '../css/Navigation.css';

const menuItems = [
    {
        id: 'Navigation',
        children: [
            { id: 'Purchases', url: '/', icon: listIcon, },
            { id: 'Categories', url: 'categories', icon: categoryIcon, },
            { id: 'Finances', url: 'finances', icon: walletIcon, },
            { id: 'Users', url: 'users', icon: userIcon, },
        ],
    },
];

const Navigation = (props) => {
    return (
        <div className='navbar'>
            <div className='navbar__logo'>
                <div><img className='navbar__icon' src={cartIcon} alt="cart" /></div>  
                <div className='navbar__title'>Your Cart</div> 
            </div>

            <div className='navbar__links'>
                <div>
                    <div className='navbar__link'>
                        <div className='nav-link'><img className='link-icon' src={listIcon} alt="list" /></div>
                        <div className='nav-link'><a href="">Purchases</a></div>
                    </div>

                    <div className='navbar__link'>
                        <div className='nav-link'><img className='link-icon' src={categoryIcon} alt="category" /></div>
                        <div className='nav-link'><a href="">Categories</a></div>
                    </div>
                    
                    <div className='navbar__link'>
                        <div className='nav-link'><img className='link-icon' src={walletIcon} alt="wallet" /></div>
                        <div className='nav-link'><a href="">Finances</a></div>
                    </div>

                    <div className='navbar__link'>
                        <div className='nav-link'><img className='link-icon' src={userIcon} alt="user" /></div>
                        <div className='nav-link'><a href="">Users</a></div>
                    </div>
                </div>
            </div>

            <div className='navbar__creators'>
                Created by&nbsp; 
                <a className='creators-link' target='__blank' href="https://github.com/m4cy43">M4cya</a>,&nbsp;
                <a className='creators-link' target='__blank' href="https://github.com/violettpv">VIO</a>,&nbsp;
                <a className='creators-link' target='__blank' href="https://github.com/Bodogato">Bodogato</a>
            </div>
        </div>
    );
}

export default Navigation;