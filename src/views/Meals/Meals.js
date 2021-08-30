import { useHistory} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";
import MealsList from "../../components/MealsList/MealsList";

const Meals = () => {
    const [meals, setMeals] = useState([])
    const [search, setSearch] = useState('')
    const history = useHistory();


    useEffect(() => {
        axios("https://www.themealdb.com/api/json/v2/1/randomselection.php")
            .then(({data}) => setMeals(data.meals))
    }, [])

    const searchInput = (e) => {
        setSearch(e.target.value)
    }

    const btnSearch = () => {
        if (search.trim()) {
            history.push(`browse/${search}`)
        }
    }

    return (
        <div className='search'>
            <input className='search-input' onChange={searchInput} type='text' placeholder='Enter text'/>
            <button className='search-btn' onClick={btnSearch}>Search...</button>
            <MealsList meals={meals}/>
        </div>
    );
};

export default Meals;