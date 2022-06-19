import React from 'react';

import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';

const Header = props => {

    const mealsImage = 'https://firebasestorage.googleapis.com/v0/b/shoppingorder-74d5c.appspot.com/o/meals.jpg?alt=media&token=3ffd295d-4a25-4119-af8d-447792fcceeb';
    
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>Penang Food</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="A table full of delicious Malaysian food!" />
            </div>
        </React.Fragment>
    );
};

export default Header;