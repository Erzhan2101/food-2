import Meals from "./Meals";
import Food from "./Food";
import Browse from "./Browse";
import Ingredient from "./Ingredient";
import {BrowserRouter, Route} from "react-router-dom"


function App() {
    return (
        <BrowserRouter>
            <Route exact path='/'><Meals/></Route>
            <Route  path='/meal/:id'><Food /></Route>
            <Route path='/browse/:search'><Browse /></Route>
            <Route path='/ingredients/:ing'><Ingredient /></Route>
        </BrowserRouter>
    );
}

export default App;
