import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Contact from '../pages/Contact/Contact'
import Recipes from '../pages/Recipes/Recipes'
import BeerRecipeForm from '../components/BeerRecipes/BeerRecipeForm/BeerRecipeForm'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/recipes" component={Recipes}></Route>
        <Route exact path="/recipes/new" component={BeerRecipeForm}></Route>
    </Switch>
);

export default Routes;