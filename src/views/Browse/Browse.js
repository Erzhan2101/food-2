import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import BtnBack from "../../components/Btn-Back/BtnBack";

import axios from "axios";
import BrowseSearch from "../../components/BrowseSearch/BrowseSearch";

const Browse = () => {

    const {search} = useParams()
    const [meals, setMeals] = useState([])

    useEffect(() => {
        async function Search(){
            const {data: {meals}} = await axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            setMeals(meals)
        }
           Search()
    }, [search])

    return (
        <div>
            <BtnBack/>
            <div>
                <h2 className="brow-title">Search by request</h2>
            </div>
            <BrowseSearch meals={meals}/>
        </div>
    );
};

export default Browse;