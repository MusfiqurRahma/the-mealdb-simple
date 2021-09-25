import React from 'react';
import './Item.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const Item = (props) => {
    const icon = <FontAwesomeIcon icon={faShoppingCart} className='cart-icon'/>
    const { strMealThumb, strMeal,strYoutube,strArea} = props.meal;
    return (
        <div className='item-container'>
            <img src={strMealThumb} alt="" />
            <div className='details-list'>
                <h3>Name: {strMeal}</h3>
                <h5>Area: {strArea}</h5>
                <a href={strYoutube}>*Search On Youtube</a>
                <br /><br />
                <button onClick={() => props.btnHandlerAddCart(props.meal)} className='regular-btn'>{icon}add to list</button>
            </div>
        </div>
    );
};
export default Item;