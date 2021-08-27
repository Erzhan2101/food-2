import {Link, useHistory, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const Ingredient = () => {

    const params = useParams()
    const [ings, setIngs] = useState([])
    const history = useHistory();


    useEffect(() =>{
        axios(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${params.ing}`)
            .then(({data}) => setIngs(data.meals))
    }, [params.ing])


    return (
        <div>
            <button className="back" onClick={() => history.goBack()}>Back</button>

            {
                ings.map(el =>
                    <Link to={`/meal/${el.strMeal}`}>
                        <img className='img-ing' src={el.strMealThumb} alt=""/>
                    </Link>
                )
            }
        </div>
    );
};

export default Ingredient;