import React, { useEffect, useState } from 'react';

import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';

const AvailableMeals = () => {

  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchMeals = async() => {
      const response = await fetch('https://shoppingorder-74d5c-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json');
      const responseData = await response.json();
      const loadedMeals = [];

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

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
      setIsLoading(false);
      };

      fetchMeals().catch((error) => {
        setIsLoading(false);
        setHttpError(error.message);
      });
    }, []);

    if (isLoading) {
      return (
        <section className={classes.MealsLoading}>
          <p>Loading...</p>
        </section>
        );
    }

    if (httpError) {
      return (
        <section className={classes.MealsError}>
          <p>Failed to fetch.</p>
        </section>
      );
    }

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