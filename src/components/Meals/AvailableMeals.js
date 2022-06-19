import React, { useEffect, useState } from 'react';

import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';

const AvailableMeals = () => {

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async() => {
      const response = await fetch('https://shoppingorder-74d5c-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json');
      const responseData = await response.json();
      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          image: responseData[key].image,
          description: responseData[key].description,
          price: responseData[key].price,
        })
      }

      setMeals(loadedMeals);
      };
      fetchMeals();
      }, []);

    const mealsList = meals.map(meal => (
        <MealItem 
            id={meal.id}
            key={meal.id} 
            name={meal.name} 
            image={meal.image}
            description={meal.description} 
            price={meal.price}
        />
        ));

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;