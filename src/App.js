import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Redirect, Route, Switch} from "react-router-dom";
import Home from './component/Home';
import Destination from './component/Destination';
import Excursions from './component/Excursions';
import Navbar from  './component/Navbar';
import Contact from './component/Contact';


const App=()=>{
return (
    <>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/destination" component={Destination}/>
    <Route exact path="/excursion" component={Excursions}/>
    <Route exact path="/contact" component={Contact}/> 
    <Redirect to="/" />
    </Switch>
    </>
)
};
export default App;
