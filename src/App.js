import Meals from "./Meals";
import Food from "./Food";
import {BrowserRouter, Route} from "react-router-dom"
import RickAndMorty from "./RickAndMorty";


function App() {
    return (
        // <div>
        //     <RickAndMorty />
        // </div>
        <BrowserRouter>
            <Route exact path='/'><Meals/></Route>
            <Route  path='/meal/:id'><Food /></Route>
        </BrowserRouter>
    );
}

export default App;
