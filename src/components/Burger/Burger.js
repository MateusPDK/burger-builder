import React from 'react';
import { withRouter } from 'react-router-dom';

import styles from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    console.log(props);
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />;
        });
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, []); // Esse código transforma as 4 arrays em uma unica array contendo todos os valores

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding some ingredients!</p>
    }

    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bot" />
        </div>
    );
};

export default withRouter(burger);