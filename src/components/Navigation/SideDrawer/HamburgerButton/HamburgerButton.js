import React from 'react';

import Auxiliar from '../../../../hoc/Auxiliar';
import styles from './HamburgerButton.css';

const hamburguerButton = (props) => (
    <Auxiliar>
        <div className={styles.HamburgerButton} onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </Auxiliar>
)

export default hamburguerButton;