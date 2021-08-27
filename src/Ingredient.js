import {Link, useHistory, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const Ingredient = () => {

    const params = useParams()
    const [ings, setIngs] = useState([])
    const history = useHistory();


    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${params.ing}`)
            .then(({data}) => setIngs(data.meals))
    }, [params.ing])


    return (
        <div>
            <button className="back" onClick={() => history.goBack()}>Back</button>
            <div className='ing-grid'>
                <div>
                    <img className="ingImg" src={`https://www.themealdb.com/images/ingredients/${params.ing}.png`}
                         alt=""/>
                    <div className='ing-title'>{params.ing}</div>
                </div>
                <div className='ing-meal'>
                    {
                        ings.map(el =>
                            <Link to={`/meal/${el.strMeal}`}>
                                <div>{el.strMeal}</div>
                                <img className='img-ing' src={el.strMealThumb} alt=""/>

                            </Link>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Ingredient;