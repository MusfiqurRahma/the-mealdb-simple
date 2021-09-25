import React, { useEffect, useState } from 'react';
import ListCart from '../ListCart/ListCart';
import Item from './Item/Item';
import './Meal.css';

const Meal = () => {
    const [meals, setMeals] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayMeals, setDisplayMeals] = useState([]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`)
            .then(res => res.json())
            .then(data =>{
                setMeals(data.meals)
                setDisplayMeals(data.meals)
               })
    }, [])
    const btnHandlerAddCart = meal => {
        const newCarts = [...cart, meal];
        setCart(newCarts)
    }
    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedMeals = meals.filter(meal => meal.strMeal.toLowerCase().includes(searchText.toLowerCase()))
        setDisplayMeals(matchedMeals);
    }
    return (
       <> <div className='search-box'>
        <input onChange={handleSearch} type="text" placeholder='Search here' />
        </div>
        <div className='meal-container'>
            <div className='meal-items'>
                {
                displayMeals.map(meal => <Item
                    meal={meal}
                    btnHandlerAddCart={btnHandlerAddCart}
                    key={meal.idMeal}>
                    </Item>)
            }
           </div>
            <div className='list-container'>
               <ListCart cart={cart}></ListCart>
            </div>
        </div> </>
    );
};
export default Meal;