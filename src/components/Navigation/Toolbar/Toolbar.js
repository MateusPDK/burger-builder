import React from 'react';

import styles from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import HamburguerButton from '../SideDrawer/HamburgerButton/HamburgerButton';

const toolbar = (props) => (
    <header className={styles.Toolbar}>
        <HamburguerButton clicked={props.drawerToggleClicked} />
        
        <div className={styles.Logo}>
            <Logo />
        </div>
        
        <nav className={styles.DesktopOnly}>
            <NavigationItems
                isAuthenticated={props.isAuth} />
        </nav>
    </header>
);

export default toolbar;