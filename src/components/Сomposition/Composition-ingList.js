import {Link} from "react-router-dom";

const CompositionIngList = ({ings}) => {
    return (
        <div className='ing-meal'>
            {
                ings.map(el =>
                    <Link to={`/meal/${el.strMeal}`}>
                        <div className="ing-list">{el.strMeal}</div>
                        <img className='img-ing' src={el.strMealThumb} alt=""/>
                    </Link>
                )
            }
        </div>
    );
};

export default CompositionIngList;