import React from 'react';

import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Roti Canai with Fish Curry',
      description: 'Get 2 pieces of crispy rotis with home-cooked fish curry.',
      price: 10.00,
    },
    {
      id: 'm2',
      name: 'Char Kway Teow',
      description: 'Our traditional fried noodles recipe! Cooked with fresh prawns and cockles.',
      price: 15.50,
    },
    {
      id: 'm3',
      name: 'Hor Fun',
      description: 'Fried egg noodle served with rich gravy and silky egg.',
      price: 16.40,
    },
    {
      id: 'm4',
      name: 'Nasi Lemak with Rendang Chicken',
      description: 'A traditional Malay dish consists of fragrant rice cooked in coconut milk and pandan leaf. Served with 1 tasty fried chicken piece!',
      price: 15.70,
    },
  ];

const AvailableMeals = () => {

    const mealsList = DUMMY_MEALS.map(meal => <li>{meal.name}</li>);

    return (
        <section className={classes.meals}>
            <ul>
                {mealsList}
            </ul>
        </section>
    );
};

export default AvailableMeals;