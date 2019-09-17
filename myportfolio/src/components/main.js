import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./home";
import Contact from "./contact";
import Resume from "./resume";
import Projects from "./projects";

const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Resume" component={Resume} />
        <Route path="/Projects" component={Projects} />
    </Switch>
)


export default Main;