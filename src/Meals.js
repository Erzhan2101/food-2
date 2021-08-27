import {Link, useHistory} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";

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

    const btnSearch = () =>{
        if(search.trim()){
            history.push(`browse/${search}`)
        }
    }

    return (

        <div className='search'>
            <input className='search-input' onChange={searchInput} type='text' placeholder='Enter text'/>
            <button className='search-btn' onClick={btnSearch}>Search...</button>
            <div className='meals'>
                {
                    meals.map(el => (
                        <div key={el.idMeal}>
                            <Link to={`/meal/${el.strMeal}`}>
                                <h3 className='title-meals'>{el.strMeal}</h3>
                                <img className='img-meals' src={el.strMealThumb} alt=''/>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>

    );
};

export default Meals;