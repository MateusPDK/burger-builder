import React from 'react';

import burgerLogo from '../../assets/img/logo.png';
import styles from './Logo.css';

const logo = (props) => (
    <div className={styles.Logo}>
        <img title="Burger Builder" alt="Burger Builder" src={burgerLogo} />
    </div>
);

export default logo;