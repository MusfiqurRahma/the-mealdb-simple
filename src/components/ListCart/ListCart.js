import React from 'react';

const ListCart = (props) => {

    const { cart } = props;
    return (
        <div>
            <h2>Total Meals: {props.cart.length}</h2>
            <ul>
                {
                    cart?.map(product => <li>{product.strMeal}</li>)
                }
            </ul>
        </div>
    );
};

export default ListCart;