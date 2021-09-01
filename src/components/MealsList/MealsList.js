import React from 'react';
import {Link} from "react-router-dom";

const MealsList = ({meals}) => {
    return (
        <div className='meals'>
            {
                meals.map(el => (
                    <div  key={el.idMeal}>
                        <Link to={`/meal/${el.strMeal}`}>
                            <h3 className='title-meals'>{el.strMeal}</h3>
                            <img  className='img-meals' src={el.strMealThumb} alt=''/>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
};

export default MealsList;