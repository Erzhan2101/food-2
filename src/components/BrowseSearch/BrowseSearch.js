import {Link} from "react-router-dom";

const BrowseSearch = ({meals}) => {
    return (
        <div className='meals'>
            {
                meals.map(item =>
                    <div key={item.idMeal}>
                        <Link to={`/meal/${item.strMeal}`}>
                            <img className='img-brow' src={item.strMealThumb} alt=""/>
                            <h3 className="sub-title-brow" >{item.strMeal}</h3>
                        </Link>
                    </div>
                )
            }
        </div>
    );
};

export default BrowseSearch;