import {Link, useParams,useHistory} from "react-router-dom"
import {useEffect, useState} from "react";
import axios from "axios";

const Food = () => {
    const params = useParams()
    const [food, setFood] = useState({})
    const history = useHistory();

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
    }, [params.id])


    return (
<div>
    <button className="back" onClick={() => history.goBack()}>Back</button>
    <div className='food'>
       <div>
           <img className='img-food' src={food.strMealThumb} alt=""/>
           <h3 className='title-food'>{food.strMeal}</h3>
       </div>
        <div className='strIngredient'>
            {
                strIngredients.map(el => (
                    <div  >
                        <Link to={`/ingredients/${el}`}>
                            <img className='strIngredient-img' src={`https://www.themealdb.com/images/ingredients/${el}.png`} alt=""/>
                            <div>{el}</div>
                        </Link>
                    </div>
                ))
            }
        </div>
    </div>
</div>

    );
};

export default Food;