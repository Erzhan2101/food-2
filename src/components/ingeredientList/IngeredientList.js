import {Link} from "react-router-dom";

const IngeredientList = ({strIngredients}) => {
    return (
        <div className='strIngredient'>
            {
                strIngredients.map(el =>
                    <div>
                        <Link to={`/ingredients/${el}`}>
                            <img key={el.id} className='strIngredient-img' src={`https://www.themealdb.com/images/ingredients/${el}.png`} alt=""/>
                            <div className="t-ing">{el}</div>
                        </Link>
                    </div>
                )
            }
        </div>
    );
};

export default IngeredientList;