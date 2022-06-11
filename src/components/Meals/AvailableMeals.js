import React from 'react';

import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';

import roti from '../../assets/roti.jpg';
import charKwayTeow from '../../assets/charKwayTeow.jpg';
import horFun from '../../assets/horFun.jpg';
import nasi from '../../assets/nasi.jpg';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Roti Canai with Fish Curry',
      image: roti,
      description: 'Get 2 pieces of crispy rotis with home-cooked fish curry.',
      price: 10.00,
    },
    {
      id: 'm2',
      name: 'Char Kway Teow',
      image: charKwayTeow,
      description: 'Our traditional fried noodle recipe! Cooked with fresh prawns and cockles.',
      price: 15.50,
    },
    {
      id: 'm3',
      name: 'Hor Fun',
      image: horFun,
      description: 'Fried rice noodle served with rich gravy and silky egg.',
      price: 16.40,
    },
    {
      id: 'm4',
      name: 'Nasi Lemak with Rendang Chicken',
      image: nasi,
      description: 'A traditional Malay dish consists of fragrant rice cooked in coconut milk and pandan leaf. Served with 1 tasty fried chicken piece!',
      price: 15.70,
    },
  ];

const AvailableMeals = () => {

    const mealsList = DUMMY_MEALS.map(meal => (
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