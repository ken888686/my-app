import DUMMY_MEALS from './dummy-meals';
import classes from './AvailableMeals.module.scss';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

export default function AvailableMeals() {
  const mealsList = DUMMY_MEALS.map(
    (meal) => (
      <MealItem
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    ),
  );

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {mealsList}
        </ul>
      </Card>
    </section>
  );
}
