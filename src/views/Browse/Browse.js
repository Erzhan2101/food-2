import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import BtnBack from "../../components/Btn-Back/BtnBack";

import axios from "axios";
import BrowseSearch from "../../components/BrowseSearch/BrowseSearch";

const Browse = () => {

    const {search} = useParams()
    const [meals, setMeals] = useState([])
    const [error, setError] = useState(false)
    useEffect(() => {
        async function Search(){
            const {data: {meals}} = await axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            meals ? setMeals(meals) : setError(true)
        }
           Search()
    }, [search])



    return (
        <div>
            <BtnBack/>
            <div>
                <h2 className="brow-title">Search by request</h2>
                {error? <h2 className="error-search">DISH NOT FOUND</h2> : <BrowseSearch meals={meals}/>}
            </div>
        </div>
    );
};

export default Browse;