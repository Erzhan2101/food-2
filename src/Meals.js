import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";

const Meals = () => {
    const [meals, setMeals] = useState([])
    const [search, setSearch] = useState('')


    useEffect(() => {
        axios("https://www.themealdb.com/api/json/v2/1/randomselection.php")
            .then(({data}) => setMeals(data.meals))
    }, [])

    const searchInput = (e) => {
        setSearch(e.target.value)
    }

    return (

        <div className='search'>
            <input onChange={searchInput} type='text'/>
            <Link className='search-btn' to={`browse/${search}`}>Search...</Link>
            <div className='meals'>
                {
                    meals.map(el => (
                        <div key={el.idMeal}>
                            <Link to={`/meal/${el.strMeal}`}>
                                <div>{el.strMeal}</div>
                                <img src={el.strMealThumb} alt=''/>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>

    );
};

export default Meals;