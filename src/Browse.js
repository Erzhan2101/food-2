import {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const Browse = () => {

    const params = useParams()
    const [searchMeal, setSearchMeal] = useState([])


    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.search}`)
            .then(({data}) => setSearchMeal(data.meals))
    }, [params.search])

    return (
        <div>
            <Link className="back" to={`/`}>Back</Link>
            <div className='meals'>
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
        </div>
    );
};

export default Browse;