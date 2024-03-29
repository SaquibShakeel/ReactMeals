import { useState, useEffect } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";



  function AvailableMeals() {

    const [meals, setMeals] = useState([]);

    useEffect(()=> {
      const fetchMeals = async () => {
        const response = await fetch('https://react-meals-c8140-default-rtdb.firebaseio.com/meals.json');
        const responseData = await response.json();
        const loadedMeals = [];
        for(const key in responseData) {
          loadedMeals.push({
            id: key,
            name: responseData[key]?.name,
            description: responseData[key]?.description,
            price: responseData[key]?.price,
          });
        }
        setMeals(loadedMeals);
        
      }

      fetchMeals();

    }, []);

      return (
        <section className={classes.meals}>
          <Card>
            <ul>
              {meals?.map((meal) => (
                <MealItem
                  id={meal.id}
                  key={meal.id}
                  name={meal.name}
                  description={meal.description}
                  price={meal.price}
                />
              ))}
            </ul>
          </Card>
        </section>
      );
  };

  export default AvailableMeals;