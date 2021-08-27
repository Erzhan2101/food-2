import {Link, useParams, useHistory} from "react-router-dom"
import {useEffect, useState} from "react";
import axios from "axios";

const Food = () => {
    const params = useParams()
    const [food, setFood] = useState({})
    const history = useHistory();
    const [link, setLink] = useState("")

    const strIngredients = Array(20).fill(0).reduce((acc, item, idx) => {
        if (food[`strIngredient${idx + 1}`]) {
            return [...acc, food[`strIngredient${idx + 1}`]]
        }
        return acc
    }, [])

    console.log(strIngredients)

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.id}`)
            .then(({data}) => {
                const obj = data.meals[0]
                setFood(obj)
                let str = obj.strYoutube
                setLink(str.slice(str.indexOf('v=') + 2, str.length))
            })
    }, [params.id])


    return (
        <div>
            <button className="back" onClick={() => history.goBack()}>Back</button>
            <div className='food'>
                <div>
                    <img className='img-food' src={food.strMealThumb} alt=""/>
                    <h3 className='title-food'>{food.strMeal}</h3>
                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${link}`}
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                    </iframe>
                </div>
                <div className='strIngredient'>
                    {
                        strIngredients.map(el => (
                            <div>
                                <Link to={`/ingredients/${el}`}>
                                    <img key={el.id} className='strIngredient-img' src={`https://www.themealdb.com/images/ingredients/${el}.png`} alt=""/>
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