import Meals from "./views/Meals/Meals";
import MealDetails from "./views/MealDetails/MealDetails";
import Browse from "./views/Browse/Browse";
import Ingredient from "./views/ingredients/Ingredient";
import {BrowserRouter as Router, Route} from "react-router-dom"


function App() {
    return (
        <Router>
            <Route exact path='/'><Meals/></Route>
            <Route  path='/meal/:id'><MealDetails /></Route>
            <Route path='/browse/:search'><Browse /></Route>
            <Route path='/ingredients/:ing'><Ingredient /></Route>
        </Router>
    );
}

export default App;
