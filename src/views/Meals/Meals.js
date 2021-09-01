import {useState, useEffect} from "react";
import axios from "axios";
import MealsList from "../../components/MealsList/MealsList";

const Meals = () => {
    const [meals, setMeals] = useState([])


    useEffect(() => {
        async function Meals() {
            const {data: {meals}} = await axios("https://www.themealdb.com/api/json/v2/1/randomselection.php")
            setMeals(meals)
        }
        Meals()
    }, [])


    return (
        <div className='search'>
            <MealsList meals={meals}/>
        </div>
    );
};

export default Meals;