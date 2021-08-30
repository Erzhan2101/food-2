import {useEffect, useState} from 'react';
import {Link, useHistory, useParams} from "react-router-dom";

import axios from "axios";

const Browse = () => {

    const {search} = useParams()
    const [Meals, setMeals] = useState([])
    const history = useHistory();


    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(({data}) => setMeals(data.meals))
    }, [search])

    return (
        <div>
            <button className="back" onClick={() => history.goBack()}>Back</button>
            <div>
                <h2 className="brow-title">Search by request</h2>
            </div>
            <div className='meals'>
                {
                    Meals.map(item =>
                        <div key={item.idMeal}>
                            <Link to={`/meal/${item.strMeal}`}>
                                <img className='img-brow' src={item.strMealThumb} alt=""/>
                                <h3 className="sub-title-brow" >{item.strMeal}</h3>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Browse;