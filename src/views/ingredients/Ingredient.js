import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import BtnBack from "../../components/Btn-Back/BtnBack";
import CompositionIngList from "../../components/Сomposition/Composition-ingList";

const Ingredient = () => {

    const {ing} = useParams()
    const [ings, setIngs] = useState([])

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ing}`)
            .then(({data}) => setIngs(data.meals))
    }, [ing])


    return (
        <div>
            <BtnBack/>
            <div className='ing-grid'>
                <div>
                    <img className="ingImg" src={`https://www.themealdb.com/images/ingredients/${ing}.png`}
                         alt=""/>
                    <div className='ing-title'>{ing}</div>
                </div>
                <CompositionIngList ings={ings}/>
            </div>
        </div>
    );
};

export default Ingredient;