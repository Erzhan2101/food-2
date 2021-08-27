import {useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const Browse = () => {

    const params = useParams()
    const [searchMeal, setSearchMeal] = useState([])

    axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.search}`)
        .then(({data}) => setSearchMeal(data.meals))


    return (
        <div>
            {
                searchMeal.map(item =>
                    <div key={item.idMeal}>
                        <Link to={`/meal/${item.strMeal}`}>
                            <img src={item.strMealThumb} alt=""/>
                            <p>{item.strMeal}</p>
                        </Link>
                    </div>
                )
            }
        </div>
    );
};

export default Browse;