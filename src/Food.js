import {Link, useParams} from "react-router-dom"
import {useEffect, useState} from "react";
import axios from "axios";

const Food = () => {
    const params = useParams()
    const [food, setFood] = useState({})

    const strIngredients = Array(20).fill(0).reduce((acc, item, idx) => {
        if (food[`strIngredient${idx + 1}`]) {
            return [...acc, food[`strIngredient${idx + 1}`]]
        }
        return acc
    }, [])

    console.log(strIngredients)

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.id}`)
            .then(({data}) => setFood(data.meals[0]))
    }, [])


    return (

        <div className='food'>
            <Link className="back" to={`/`}>Back</Link>
            <img src={food.strMealThumb}/>
            <h3>{food.strMeal}</h3>
            {
                strIngredients.map(el => (
                    <div>
                        <img src={`https://www.themealdb.com/images/ingredients/${el}.png`} alt=""/>
                        <div>{el}</div>
                    </div>
                ))
            }
        </div>
    );
};

export default Food;