import {useParams} from "react-router-dom"
import {useEffect, useState} from "react";
import axios from "axios";

const Food = () => {
    const params = useParams()
    const [food, setFood] = useState({})


    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.id}`)
            .then(({data}) => setFood(data.meals[0]))
    }, [])



    return (
   <div className='food'>
       <img src={food.strMealThumb}/>
       <h3>{food.strMeal}</h3>
   </div>
    );
};

export default Food;