import {useParams, useHistory} from "react-router-dom"
import {useEffect, useState} from "react";
import axios from "axios";
import IngeredientList from "../../components/ingeredientList/IngeredientList";
import YoutubeVideo from "../../components/YoutubeVideo/YoutubeVideo";

const MealDetails = () => {
    const {id} = useParams()
    const [meal, setMeal] = useState({})
    const history = useHistory();
    const [youtubeCode, setYoutubeCode] = useState("")

    const strIngredients = Array(20).fill(0).reduce((acc, item, idx) => {
        const Ingredient = meal[`strIngredient${idx + 1}`]
        return Ingredient ? [...acc, Ingredient] : acc
    }, [])

    console.log(strIngredients)

    useEffect(async () => {
        const {data: {meals}} = await axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${id}`)
        setMeal(meals[0])
        const youTube = meals[0].strYoutube
        setYoutubeCode(youTube.slice(youTube.indexOf("v=") + 2, youTube.length))
    }, [id])


    return (
        <div>
            <button className="back" onClick={() => history.goBack()}>Back</button>
            <div className='food'>
                <div>
                    <img className='img-food' src={meal.strMealThumb} alt=""/>
                    <h3 className='title-food'>{meal.strMeal}</h3>
                    <YoutubeVideo youtubeCode={youtubeCode} />
                </div>
                <IngeredientList strIngredients={strIngredients}/>
            </div>
        </div>
    );
};

export default MealDetails;