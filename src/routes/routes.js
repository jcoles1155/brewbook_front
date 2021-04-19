import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Contact from '../pages/Contact/Contact'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        {/* <Route exact path="/" component={AddRecipe}></Route> */}
    </Switch>
);

export default Routes;