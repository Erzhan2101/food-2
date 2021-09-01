// import { useHistory} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";
import MealsList from "../../components/MealsList/MealsList";

const Meals = () => {
    const [meals, setMeals] = useState([])



    useEffect(() => {

        axios("https://www.themealdb.com/api/json/v2/1/randomselection.php")
            .then(({data}) => setMeals(data.meals))
    }, [])


    return (
        <div className='search'>
            <MealsList meals={meals}/>
        </div>
    );
};

export default Meals;